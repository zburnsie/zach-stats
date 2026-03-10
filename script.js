// ─── Game Data ────────────────────────────────────────────────
const ALL_GAMES = [
  // 2023-24
  { season: '2023-24', game: 1,  league: 'Orem',        points: 10, ftMade: 2,  ftAtt: 3,  threeMade: 0, threeAtt: 1,  result: 'L', ths: null },
  { season: '2023-24', game: 2,  league: 'PG',          points: 16, ftMade: 3,  ftAtt: 5,  threeMade: 1, threeAtt: 2,  result: 'L', ths: null },
  { season: '2023-24', game: 3,  league: 'Orem',        points: 20, ftMade: 0,  ftAtt: 0,  threeMade: 4, threeAtt: 7,  result: 'W', ths: null },
  { season: '2023-24', game: 4,  league: 'PG',          points: 26, ftMade: 4,  ftAtt: 5,  threeMade: 1, threeAtt: 3,  result: 'W', ths: null },
  { season: '2023-24', game: 5,  league: 'PG',          points: 22, ftMade: 5,  ftAtt: 6,  threeMade: 2, threeAtt: 4,  result: 'W', ths: null },
  { season: '2023-24', game: 6,  league: 'PG',          points: 21, ftMade: 1,  ftAtt: 2,  threeMade: 4, threeAtt: 6,  result: 'L', ths: null },
  { season: '2023-24', game: 7,  league: 'Orem',        points: 14, ftMade: 0,  ftAtt: 0,  threeMade: 2, threeAtt: 7,  result: 'W', ths: null },
  { season: '2023-24', game: 8,  league: 'PG',          points: 16, ftMade: 4,  ftAtt: 6,  threeMade: 2, threeAtt: 5,  result: 'L', ths: null },
  { season: '2023-24', game: 9,  league: 'PG',          points: 30, ftMade: 4,  ftAtt: 5,  threeMade: 2, threeAtt: 5,  result: 'W', ths: null },
  { season: '2023-24', game: 10, league: 'PG',          points: 17, ftMade: 1,  ftAtt: 2,  threeMade: 0, threeAtt: 3,  result: 'L', ths: null },
  { season: '2023-24', game: 11, league: 'PG',          points: 29, ftMade: 5,  ftAtt: 8,  threeMade: 2, threeAtt: 4,  result: 'W', ths: null },
  { season: '2023-24', game: 12, league: 'PG',          points: 20, ftMade: 4,  ftAtt: 6,  threeMade: 0, threeAtt: 6,  result: 'L', ths: null },
  { season: '2023-24', game: 13, league: 'Orem',        points: 26, ftMade: 8,  ftAtt: 10, threeMade: 4, threeAtt: 12, result: 'W', ths: null },
  { season: '2023-24', game: 14, league: 'PG',          points: 21, ftMade: 2,  ftAtt: 5,  threeMade: 3, threeAtt: 5,  result: 'L', ths: null },
  { season: '2023-24', game: 15, league: 'PG',          points: 21, ftMade: 3,  ftAtt: 4,  threeMade: 2, threeAtt: 5,  result: 'W', ths: null },
  { season: '2023-24', game: 16, league: 'PG',          points: 31, ftMade: 2,  ftAtt: 2,  threeMade: 1, threeAtt: 4,  result: 'W', ths: null },
  { season: '2023-24', game: 17, league: 'PG',          points: 22, ftMade: 2,  ftAtt: 2,  threeMade: 2, threeAtt: 4,  result: 'W', ths: null },
  { season: '2023-24', game: 18, league: 'PG',          points: 16, ftMade: 3,  ftAtt: 4,  threeMade: 3, threeAtt: 9,  result: 'L', ths: null },
  { season: '2023-24', game: 19, league: 'PG',          points: 24, ftMade: 3,  ftAtt: 5,  threeMade: 0, threeAtt: 3,  result: 'W', ths: null },
  { season: '2023-24', game: 20, league: 'PG',          points: 31, ftMade: 6,  ftAtt: 7,  threeMade: 4, threeAtt: 7,  result: 'L', ths: null },
  // 2024-25
  { season: '2024-25', game: 1,  league: 'Orem',        points: 15, ftMade: 5,  ftAtt: 8,  threeMade: 2, threeAtt: 3,  result: 'L', ths: null },
  { season: '2024-25', game: 2,  league: 'PG',          points: 19, ftMade: 3,  ftAtt: 5,  threeMade: 2, threeAtt: 5,  result: 'L', ths: null },
  { season: '2024-25', game: 3,  league: 'PG',          points: 8,  ftMade: 1,  ftAtt: 1,  threeMade: 1, threeAtt: 5,  result: 'L', ths: null },
  { season: '2024-25', game: 4,  league: 'PG',          points: 42, ftMade: 2,  ftAtt: 2,  threeMade: 4, threeAtt: 7,  result: 'W', ths: null },
  { season: '2024-25', game: 5,  league: 'PG',          points: 27, ftMade: 8,  ftAtt: 10, threeMade: 1, threeAtt: 2,  result: 'W', ths: null },
  { season: '2024-25', game: 6,  league: 'PG',          points: 22, ftMade: 1,  ftAtt: 2,  threeMade: 1, threeAtt: 6,  result: 'L', ths: null },
  { season: '2024-25', game: 7,  league: 'PG',          points: 27, ftMade: 9,  ftAtt: 11, threeMade: 2, threeAtt: 3,  result: 'L', ths: null },
  { season: '2024-25', game: 8,  league: 'PG',          points: 34, ftMade: 6,  ftAtt: 6,  threeMade: 4, threeAtt: 7,  result: 'W', ths: null },
  { season: '2024-25', game: 9,  league: 'PG',          points: 7,  ftMade: 0,  ftAtt: 0,  threeMade: 1, threeAtt: 7,  result: 'L', ths: null },
  { season: '2024-25', game: 10, league: 'Intramurals', points: 10, ftMade: 1,  ftAtt: 2,  threeMade: 1, threeAtt: 5,  result: 'W', ths: null },
  { season: '2024-25', game: 11, league: 'Intramurals', points: 24, ftMade: 5,  ftAtt: 6,  threeMade: 1, threeAtt: 2,  result: 'W', ths: null },
  { season: '2024-25', game: 12, league: 'PG',          points: 38, ftMade: 17, ftAtt: 19, threeMade: 1, threeAtt: 5,  result: 'W', ths: null },
  { season: '2024-25', game: 13, league: 'PG',          points: 22, ftMade: 4,  ftAtt: 4,  threeMade: 2, threeAtt: 6,  result: 'W', ths: null },
  { season: '2024-25', game: 14, league: 'Intramurals', points: 18, ftMade: 2,  ftAtt: 3,  threeMade: 0, threeAtt: 3,  result: 'W', ths: null },
  { season: '2024-25', game: 15, league: 'PG',          points: 25, ftMade: 9,  ftAtt: 12, threeMade: 2, threeAtt: 3,  result: 'W', ths: null },
  { season: '2024-25', game: 16, league: 'Intramurals', points: 22, ftMade: 0,  ftAtt: 0,  threeMade: 0, threeAtt: 2,  result: 'W', ths: null },
  { season: '2024-25', game: 17, league: 'PG',          points: 16, ftMade: 8,  ftAtt: 10, threeMade: 0, threeAtt: 5,  result: 'L', ths: null },
  { season: '2024-25', game: 18, league: 'PG',          points: 26, ftMade: 0,  ftAtt: 0,  threeMade: 6, threeAtt: 13, result: 'L', ths: null },
  { season: '2024-25', game: 19, league: 'Intramurals', points: 25, ftMade: 0,  ftAtt: 0,  threeMade: 3, threeAtt: 5,  result: 'W', ths: null },
  { season: '2024-25', game: 20, league: 'Intramurals', points: 19, ftMade: 5,  ftAtt: 6,  threeMade: 0, threeAtt: 2,  result: 'W', ths: null },
  { season: '2024-25', game: 21, league: 'Intramurals', points: 23, ftMade: 6,  ftAtt: 8,  threeMade: 1, threeAtt: 4,  result: 'W', ths: null },
  // 2025-26
  { season: '2025-26', game: 1,  league: 'Orem',        points: 16, ftMade: 3,  ftAtt: 4,  threeMade: 1, threeAtt: 4,  result: 'W', ths: false },
  { season: '2025-26', game: 2,  league: 'Orem',        points: 21, ftMade: 0,  ftAtt: 0,  threeMade: 3, threeAtt: 6,  result: 'W', ths: false },
  { season: '2025-26', game: 3,  league: 'Orem',        points: 17, ftMade: 5,  ftAtt: 6,  threeMade: 0, threeAtt: 3,  result: 'W', ths: false },
  { season: '2025-26', game: 4,  league: 'Orem',        points: 24, ftMade: 7,  ftAtt: 12, threeMade: 1, threeAtt: 1,  result: 'W', ths: true  },
  { season: '2025-26', game: 5,  league: 'Orem',        points: 20, ftMade: 2,  ftAtt: 2,  threeMade: 2, threeAtt: 4,  result: 'W', ths: true  },
  { season: '2025-26', game: 6,  league: 'Orem',        points: 16, ftMade: 2,  ftAtt: 5,  threeMade: 0, threeAtt: 5,  result: 'W', ths: false },
  { season: '2025-26', game: 7,  league: 'Orem',        points: 25, ftMade: 4,  ftAtt: 4,  threeMade: 3, threeAtt: 7,  result: 'W', ths: true  },
  { season: '2025-26', game: 8,  league: 'Orem',        points: 19, ftMade: 7,  ftAtt: 8,  threeMade: 2, threeAtt: 4,  result: 'W', ths: false },
  { season: '2025-26', game: 9,  league: 'Orem',        points: 12, ftMade: 5,  ftAtt: 8,  threeMade: 1, threeAtt: 2,  result: 'L', ths: false },
  { season: '2025-26', game: 10, league: 'Copperview',  points: 21, ftMade: 5,  ftAtt: 6,  threeMade: 2, threeAtt: 5,  result: 'L', ths: true  },
  { season: '2025-26', game: 11, league: 'Intramurals', points: 21, ftMade: 1,  ftAtt: 1,  threeMade: 2, threeAtt: 4,  result: 'W', ths: false },
  { season: '2025-26', game: 12, league: 'Intramurals', points: 24, ftMade: 1,  ftAtt: 1,  threeMade: 1, threeAtt: 3,  result: 'W', ths: true  },
  { season: '2025-26', game: 13, league: 'Copperview',  points: 42, ftMade: 4,  ftAtt: 4,  threeMade: 4, threeAtt: 6,  result: 'W', ths: true  },
  { season: '2025-26', game: 14, league: 'Copperview',  points: 32, ftMade: 4,  ftAtt: 5,  threeMade: 2, threeAtt: 8,  result: 'L', ths: true  },
  { season: '2025-26', game: 15, league: 'Copperview',  points: 28, ftMade: 6,  ftAtt: 10, threeMade: 0, threeAtt: 1,  result: 'W', ths: true  },
  { season: '2025-26', game: 16, league: 'Intramurals', points: 21, ftMade: 1,  ftAtt: 3,  threeMade: 2, threeAtt: 5,  result: 'W', ths: false },
  { season: '2025-26', game: 17, league: 'Copperview',  points: 21, ftMade: 7,  ftAtt: 14, threeMade: 0, threeAtt: 1,  result: 'W', ths: true  },
  { season: '2025-26', game: 18, league: 'Copperview',  points: 23, ftMade: 5, ftAtt: 6, threeMade: 2, threeAtt: 3, result: 'L', ths: true },
];

// ─── Stats Calculator ──────────────────────────────────────────
function calcStats(games) {
  if (!games.length) return null;
  const totalPts = games.reduce((s, g) => s + g.points, 0);
  const ftMade   = games.reduce((s, g) => s + g.ftMade, 0);
  const ftAtt    = games.reduce((s, g) => s + g.ftAtt, 0);
  const thrMade  = games.reduce((s, g) => s + g.threeMade, 0);
  const thrAtt   = games.reduce((s, g) => s + g.threeAtt, 0);
  const wins     = games.filter(g => g.result === 'W').length;
  const losses   = games.filter(g => g.result === 'L').length;
  const thsCount = games.filter(g => g.ths).length;
  const highGame = Math.max(...games.map(g => g.points));
  return {
    gp:        games.length,
    ppg:       (totalPts / games.length).toFixed(1),
    ftPct:     ftAtt > 0 ? ((ftMade / ftAtt) * 100).toFixed(1) + '%' : 'N/A',
    threePct:  thrAtt > 0 ? ((thrMade / thrAtt) * 100).toFixed(1) + '%' : 'N/A',
    record:    `${wins}-${losses}`,
    wins, losses,
    thsCount,
    highGame,
  };
}

// ─── State ────────────────────────────────────────────────────
let currentSeason = 'Career';
let ppgChart = null;
let shootingChart = null;

// ─── Card Flip ────────────────────────────────────────────────
function flipCard() {
  document.getElementById('toppsCard').classList.toggle('flipped');
}

// ─── Season Select ────────────────────────────────────────────
function selectSeason(season, btn) {
  currentSeason = season;

  // Update tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const games = season === 'Career'
    ? ALL_GAMES
    : ALL_GAMES.filter(g => g.season === season);

  updateStatCards(games);
  renderPPGChart(games, season);
  renderShootingChart(games, season);
  renderGameLog(games);
}

// ─── Stat Cards ───────────────────────────────────────────────
function updateStatCards(games) {
  const s = calcStats(games);
  if (!s) return;
  document.getElementById('sc-ppg').textContent    = s.ppg;
  document.getElementById('sc-ft').textContent     = s.ftPct;
  document.getElementById('sc-3pt').textContent    = s.threePct;
  document.getElementById('sc-record').textContent = s.record;
  document.getElementById('sc-high').textContent   = s.highGame;
  const winPct = ((s.wins / s.gp) * 100).toFixed(1) + '%';
  document.getElementById('sc-winpct').textContent  = winPct;
  document.getElementById('gameCount').textContent = `${s.gp} game${s.gp !== 1 ? 's' : ''}`;
}

// ─── PPG Chart ────────────────────────────────────────────────
function renderPPGChart(games, season) {
  const ctx = document.getElementById('ppgChart').getContext('2d');
  if (ppgChart) { ppgChart.destroy(); ppgChart = null; }

  const labels = games.map(g =>
    season === 'Career' ? `${g.season} G${g.game}` : `G${g.game}`
  );
  const pts = games.map(g => g.points);
  const avgLine = games.map((_, i) => {
    const slice = pts.slice(0, i + 1);
    return parseFloat((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(1));
  });

  ppgChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Points',
          data: pts,
          backgroundColor: pts.map(p =>
            p >= 30 ? 'rgba(255,215,0,0.7)' : 'rgba(255,107,0,0.6)'
          ),
          borderColor: pts.map(p =>
            p >= 30 ? '#FFD700' : '#FF6B00'
          ),
          borderWidth: 1,
          borderRadius: 4,
          order: 2,
        },
        {
          label: 'Rolling Avg',
          data: avgLine,
          type: 'line',
          borderColor: 'rgba(255,255,255,0.5)',
          borderWidth: 2,
          borderDash: [4, 4],
          pointRadius: 0,
          fill: false,
          tension: 0.4,
          order: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255,255,255,0.5)',
            font: { size: 11, family: 'Inter' },
            boxWidth: 12,
          },
        },
        tooltip: {
          backgroundColor: '#161f2c',
          borderColor: 'rgba(255,107,0,0.3)',
          borderWidth: 1,
          titleColor: '#FF8C38',
          bodyColor: '#f0f4f8',
          callbacks: {
            label: (ctx) => {
              if (ctx.datasetIndex === 0) {
                const g = games[ctx.dataIndex];
                return [
                  ` ${ctx.parsed.y} pts`,
                  ` ${g.ftMade}/${g.ftAtt} FT  ·  ${g.threeMade}/${g.threeAtt} 3PT`,
                  ` ${g.result === 'W' ? '✓ Win' : '✗ Loss'}${g.ths ? '  ·  ★ THS' : ''}`,
                ];
              }
              return ` Avg: ${ctx.parsed.y}`;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'rgba(255,255,255,0.25)',
            font: { size: 9 },
            maxTicksLimit: season === 'Career' ? 20 : 21,
            maxRotation: 45,
          },
          grid: { color: 'rgba(255,255,255,0.04)' },
        },
        y: {
          ticks: { color: 'rgba(255,255,255,0.4)', font: { size: 11 } },
          grid: { color: 'rgba(255,255,255,0.06)' },
          min: 0,
        },
      },
    },
  });
}

// ─── Shooting Chart ───────────────────────────────────────────
function renderShootingChart(games, season) {
  const ctx = document.getElementById('shootingChart').getContext('2d');
  if (shootingChart) { shootingChart.destroy(); shootingChart = null; }

  let labels, ftData, threeData;

  if (season === 'Career') {
    labels = ['2023-24', '2024-25', '2025-26'];
    ftData = labels.map(s => {
      const sg = ALL_GAMES.filter(g => g.season === s);
      const made = sg.reduce((a, g) => a + g.ftMade, 0);
      const att  = sg.reduce((a, g) => a + g.ftAtt, 0);
      return att > 0 ? parseFloat(((made / att) * 100).toFixed(1)) : 0;
    });
    threeData = labels.map(s => {
      const sg = ALL_GAMES.filter(g => g.season === s);
      const made = sg.reduce((a, g) => a + g.threeMade, 0);
      const att  = sg.reduce((a, g) => a + g.threeAtt, 0);
      return att > 0 ? parseFloat(((made / att) * 100).toFixed(1)) : 0;
    });
  } else {
    // Per-game shooting for the selected season
    labels = games.map(g => `G${g.game}`);
    ftData = games.map(g =>
      g.ftAtt > 0 ? parseFloat(((g.ftMade / g.ftAtt) * 100).toFixed(1)) : null
    );
    threeData = games.map(g =>
      g.threeAtt > 0 ? parseFloat(((g.threeMade / g.threeAtt) * 100).toFixed(1)) : null
    );
  }

  shootingChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'FT%',
          data: ftData,
          backgroundColor: 'rgba(99, 179, 237, 0.7)',
          borderColor: '#63b3ed',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: '3PT%',
          data: threeData,
          backgroundColor: 'rgba(255, 107, 0, 0.7)',
          borderColor: '#FF6B00',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255,255,255,0.5)',
            font: { size: 11, family: 'Inter' },
            boxWidth: 12,
          },
        },
        tooltip: {
          backgroundColor: '#161f2c',
          borderColor: 'rgba(255,107,0,0.3)',
          borderWidth: 1,
          titleColor: '#FF8C38',
          bodyColor: '#f0f4f8',
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y}%`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'rgba(255,255,255,0.3)',
            font: { size: season === 'Career' ? 11 : 9 },
            maxRotation: season === 'Career' ? 0 : 45,
            maxTicksLimit: 21,
          },
          grid: { color: 'rgba(255,255,255,0.04)' },
        },
        y: {
          ticks: {
            color: 'rgba(255,255,255,0.4)',
            font: { size: 11 },
            callback: v => v + '%',
          },
          grid: { color: 'rgba(255,255,255,0.06)' },
          min: 0,
          max: 100,
        },
      },
    },
  });
}

// ─── Game Log ─────────────────────────────────────────────────
function renderGameLog(games) {
  const tbody = document.getElementById('gameLogBody');
  tbody.innerHTML = '';

  games.forEach(g => {
    let ptsClass = '';
    if (g.points >= 30)      ptsClass = 'pts-high';
    else if (g.points >= 25) ptsClass = 'pts-good';

    const tr = document.createElement('tr');
    tr.className = g.result === 'W' ? 'row-win' : 'row-loss';
    tr.innerHTML = `
      <td class="season-tag">${g.season}</td>
      <td style="color:var(--text-muted)">${g.game}</td>
      <td class="league-tag">${g.league}</td>
      <td class="${ptsClass}">${g.points}</td>
      <td style="color:var(--text-muted)">${g.ftMade}/${g.ftAtt}</td>
      <td style="color:var(--text-muted)">${g.threeMade}/${g.threeAtt}</td>
      <td><span class="${g.result === 'W' ? 'badge-win' : 'badge-loss'}">${g.result}</span></td>
      <td>${g.ths === true ? '<span class="ths-star" title="Team High Scorer">★</span>' : g.ths === false ? '<span style="color:var(--text-muted)">—</span>' : ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  selectSeason('Career', null);

  // Animate stat bars on load
  setTimeout(() => {
    document.querySelectorAll('.sb-bar').forEach(bar => {
      bar.style.transition = 'width 1s ease';
    });
  }, 100);
});
