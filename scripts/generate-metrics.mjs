// Generates the profile's metric cards from the GitHub GraphQL API.
// Palette is locked to the Gotham Night colours. No third-party card service.
//
//   GITHUB_TOKEN=... node scripts/generate-metrics.mjs
//   METRICS_FIXTURE=path/to/sample.json node scripts/generate-metrics.mjs   (offline preview)

import { mkdir, readFile, writeFile } from 'node:fs/promises';

const C = { night: '#0b0b0f', steel: '#1d1d26', gold: '#FFD60A', ash: '#9a9aa8' };
const SERIF = "Georgia, 'Times New Roman', serif";
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const login = process.env.GITHUB_ACTOR || 'KerolosNader69';
const OUT = 'assets/metrics';

const query = `
  query ProfileMetrics($login: String!) {
    user(login: $login) {
      followers { totalCount }
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          stargazerCount
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) { edges { size node { name } } }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }`;

async function load() {
  if (process.env.METRICS_FIXTURE) return JSON.parse(await readFile(process.env.METRICS_FIXTURE, 'utf8'));
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required (or set METRICS_FIXTURE for an offline preview).');
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': `${login}-profile-metrics` },
    body: JSON.stringify({ query, variables: { login } })
  });
  if (!res.ok) throw new Error(`GitHub API returned ${res.status}: ${await res.text()}`);
  const payload = await res.json();
  if (payload.errors?.length) throw new Error(payload.errors.map(e => e.message).join('; '));
  return payload.data;
}

const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const fmt = n => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

function frame(w, h, title, desc, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="t d">
  <title id="t">${esc(title)}</title>
  <desc id="d">${esc(desc)}</desc>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="10" fill="${C.night}" stroke="${C.steel}" stroke-width="2"/>
  <path d="M16 16h24M16 16v16M${w - 16} 16h-24M${w - 16} 16v16M16 ${h - 16}h24M16 ${h - 16}v-16M${w - 16} ${h - 16}h-24M${w - 16} ${h - 16}v-16" fill="none" stroke="${C.gold}" stroke-opacity=".45" stroke-width="2"/>
${body}
</svg>
`;
}
const label = (x, y, text, size = 11, color = C.ash, anchor = 'start') =>
  `<text x="${x}" y="${y}" fill="${color}" font-family="${MONO}" font-size="${size}" letter-spacing="2" text-anchor="${anchor}">${esc(text)}</text>`;
const heading = (x, y, text, size = 18) =>
  `<text x="${x}" y="${y}" fill="${C.gold}" font-family="${SERIF}" font-size="${size}" letter-spacing="3">${esc(text)}</text>`;

function streaks(days) {
  const today = new Date().toISOString().slice(0, 10);
  const list = days.filter(d => d.date <= today);
  let longest = 0, run = 0;
  for (const d of list) { run = d.contributionCount > 0 ? run + 1 : 0; longest = Math.max(longest, run); }
  let current = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].contributionCount > 0) current++;
    else if (i === list.length - 1) continue; // today may still be empty
    else break;
  }
  return { current, longest };
}

function overviewCard(m, stamp) {
  const stats = [
    ['PUBLIC REPOS', m.repos], ['STARS EARNED', m.stars], ['FOLLOWERS', m.followers], ['CONTRIBUTIONS · 1Y', m.contributions]
  ];
  const cell = 820 / 4;
  const body = [
    heading(32, 48, '🦇 SIGNAL TELEMETRY'),
    label(818, 48, `REFRESHED ${stamp}`, 10, C.ash, 'end'),
    ...stats.map(([k, v], i) => {
      const x = 32 + i * cell;
      return `<g>${label(x, 92, k, 10)}<text x="${x}" y="132" fill="${C.gold}" font-family="${SERIF}" font-size="34">${esc(fmt(v))}</text>${i ? `<path d="M${x - 16} 80v58" stroke="${C.steel}" stroke-width="2"/>` : ''}</g>`;
    })
  ].join('\n  ');
  return frame(850, 165, 'Signal telemetry', `Public GitHub metrics for ${login}, refreshed ${stamp}.`, body);
}

function languagesCard(langs, stamp) {
  const total = langs.reduce((s, l) => s + l.size, 0) || 1;
  const top = langs.slice(0, 6);
  const shades = [1, .78, .6, .45, .32, .22];
  let x = 32;
  const bar = top.map((l, i) => {
    const w = Math.max(4, (l.size / total) * 786);
    const r = `<rect x="${x.toFixed(1)}" y="72" width="${w.toFixed(1)}" height="14" fill="${C.gold}" fill-opacity="${shades[i]}"/>`;
    x += w;
    return r;
  }).join('');
  const legend = top.map((l, i) => {
    const col = i % 3, row = Math.floor(i / 3), lx = 32 + col * 270, ly = 118 + row * 26;
    return `<rect x="${lx}" y="${ly - 10}" width="10" height="10" fill="${C.gold}" fill-opacity="${shades[i]}"/>${label(lx + 18, ly, `${l.name.toUpperCase()} ${(100 * l.size / total).toFixed(1)}%`, 11)}`;
  }).join('\n  ');
  const body = [heading(32, 48, '🦇 LANGUAGE SCAN'), label(818, 48, 'BY CODE SIZE · PUBLIC REPOS', 10, C.ash, 'end'),
    `<rect x="32" y="72" width="786" height="14" fill="${C.steel}"/>`, bar, legend].join('\n  ');
  return frame(850, 180, 'Language scan', `Most used languages across ${login}'s public repositories, refreshed ${stamp}.`, body);
}

function activityCard(days, s, stamp) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  const recent = weeks.slice(-26).map(w => w.reduce((n, d) => n + d.contributionCount, 0));
  const max = Math.max(1, ...recent);
  const bw = 786 / recent.length;
  const bars = recent.map((v, i) => {
    const h = v ? Math.max(3, (v / max) * 70) : 2;
    return `<rect x="${(32 + i * bw + 2).toFixed(1)}" y="${(172 - h).toFixed(1)}" width="${(bw - 4).toFixed(1)}" height="${h.toFixed(1)}" fill="${v ? C.gold : C.steel}" fill-opacity="${v ? (0.35 + 0.65 * v / max).toFixed(2) : 1}"/>`;
  }).join('');
  const body = [
    heading(32, 48, '🦇 PATROL LOG'),
    label(818, 48, 'LAST 26 WEEKS', 10, C.ash, 'end'),
    label(32, 80, 'CURRENT STREAK', 10), `<text x="32" y="106" fill="${C.gold}" font-family="${SERIF}" font-size="22">${s.current} days</text>`,
    label(260, 80, 'LONGEST STREAK · 1Y', 10), `<text x="260" y="106" fill="${C.gold}" font-family="${SERIF}" font-size="22">${s.longest} days</text>`,
    `<path d="M32 173H818" stroke="${C.steel}" stroke-width="2"/>`, bars
  ].join('\n  ');
  return frame(850, 196, 'Patrol log', `Contribution streaks and weekly activity for ${login}, refreshed ${stamp}.`, body);
}

const data = await load();
const u = data.user;
const repos = u.repositories.nodes;
const langMap = new Map();
for (const r of repos) for (const e of r.languages.edges) langMap.set(e.node.name, (langMap.get(e.node.name) || 0) + e.size);
const langs = [...langMap].map(([name, size]) => ({ name, size })).sort((a, b) => b.size - a.size);
const days = u.contributionsCollection.contributionCalendar.weeks.flatMap(w => w.contributionDays);
const metrics = {
  repos: u.repositories.totalCount,
  stars: repos.reduce((s, r) => s + r.stargazerCount, 0),
  followers: u.followers.totalCount,
  contributions: u.contributionsCollection.contributionCalendar.totalContributions
};
const stamp = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).toUpperCase();

await mkdir(OUT, { recursive: true });
await writeFile(`${OUT}/overview.svg`, overviewCard(metrics, stamp));
await writeFile(`${OUT}/languages.svg`, languagesCard(langs, stamp));
await writeFile(`${OUT}/activity.svg`, activityCard(days, streaks(days), stamp));
console.log(`Wrote 3 cards for ${login}:`, metrics);
