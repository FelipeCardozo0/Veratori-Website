#!/usr/bin/env python3
"""
══════════════════════════════════════════════════════════════════════════════════
  NVIDIA (NVDA) — Monte Carlo Forward Price Simulation · FY 2026
  Institutional-Grade Animated Visualization
══════════════════════════════════════════════════════════════════════════════════
  Model:  Jump-Diffusion GBM (Merton 1976) with stochastic volatility overlay
  Paths:  500 full Monte Carlo trajectories
  Output: Animated build → fade → median extraction with full risk analytics
  
  Designed for Google Colab · Run after environment setup cell
══════════════════════════════════════════════════════════════════════════════════
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import matplotlib.ticker as ticker
import matplotlib.dates as mdates
import matplotlib.patheffects as pe
from matplotlib.animation import FuncAnimation
from matplotlib.colors import LinearSegmentedColormap
from scipy import stats
from IPython.display import HTML, display
import warnings
warnings.filterwarnings('ignore')

# ══════════════════════════════════════════════════════════════════════
# INSTITUTIONAL THEME (Goldman Sachs report aesthetic)
# ══════════════════════════════════════════════════════════════════════
BG_PRIMARY   = '#0A0E17'
BG_CARD      = '#0F1520'
BG_ELEVATED  = '#161D2E'
GRID_CLR     = '#1A2235'
TEXT_PRIMARY  = '#E2E8F0'
TEXT_MUTED    = '#8896AB'
TEXT_DIM      = '#5A6A80'
BORDER_CLR   = '#283348'

# Goldman-inspired palette
GS_BLUE      = '#3A7BD5'
GS_NAVY      = '#1B2A4A'
GS_GOLD      = '#C9A84C'
GS_SILVER    = '#9FAFC2'
GS_GREEN     = '#2EAD6B'
GS_RED       = '#D44C4C'
GS_CYAN      = '#48B8D0'
GS_AMBER     = '#D4943A'
GS_LIGHT_GRN = '#7AC4A5'
GS_LIGHT_RED = '#E8847E'

PNL_CMAP = LinearSegmentedColormap.from_list('gs_pnl',
    ['#6B1F1F', GS_RED, GS_LIGHT_RED, '#C8D0DC', GS_LIGHT_GRN, GS_GREEN, '#1B5E40'], N=256)
PATH_CMAP = LinearSegmentedColormap.from_list('gs_paths',
    ['#1B2A4A', '#2A4A7A', '#3A7BD5', '#48B8D0', '#7AC4A5', '#C9A84C', '#D4943A'], N=256)

plt.rcParams.update({
    'figure.facecolor': BG_PRIMARY, 'axes.facecolor': BG_CARD,
    'axes.edgecolor': BORDER_CLR, 'axes.labelcolor': TEXT_PRIMARY,
    'text.color': TEXT_PRIMARY, 'xtick.color': TEXT_MUTED,
    'ytick.color': TEXT_MUTED, 'grid.color': GRID_CLR,
    'grid.alpha': 0.35, 'font.family': 'monospace',
    'font.size': 9, 'axes.titlesize': 11, 'axes.titleweight': 'bold',
    'figure.dpi': 130, 'savefig.dpi': 200,
    'axes.spines.top': False, 'axes.spines.right': False,
    'legend.facecolor': BG_ELEVATED, 'legend.edgecolor': BORDER_CLR,
})
import matplotlib
matplotlib.rcParams['animation.embed_limit'] = 200

# ══════════════════════════════════════════════════════════════════════
# MODEL CALIBRATION — NVDA PARAMETERS
# ══════════════════════════════════════════════════════════════════════
np.random.seed(2026)

# NVDA reference data (as of calibration date)
S0             = 137.71          # NVDA spot price (reference)
TICKER         = 'NVDA'
COMPANY        = 'NVIDIA Corporation'
SECTOR         = 'Semiconductors & AI Compute'
REPORT_DATE    = 'March 2025'

# Drift & diffusion (annualized, calibrated to NVDA 2023-2025 realized)
MU_BASE        = 0.25           # base expected return (25% ann.)
SIGMA_BASE     = 0.48           # base volatility (48% ann. — NVDA is volatile)
SIGMA_VOL_OF_VOL = 0.15        # stochastic vol perturbation

# Jump-diffusion (Merton) parameters
LAMBDA_JUMP    = 2.5            # ~2.5 jumps per year (earnings, product launches, tariffs)
MU_JUMP        = 0.005          # slight positive jump mean
SIGMA_JUMP     = 0.065          # jump size std (6.5% per jump)

# Simulation grid
N_PATHS        = 500            # total MC paths
N_TRADING_DAYS = 252            # ~1 year of trading days (2026)
DT             = 1 / 252

# Date axis
dates = pd.bdate_range('2026-01-02', periods=N_TRADING_DAYS)
date_labels = dates.strftime('%b %Y')

# ══════════════════════════════════════════════════════════════════════
# PATH GENERATION — Merton Jump-Diffusion with Vol Perturbation
# ══════════════════════════════════════════════════════════════════════
print(f'⏳ Generating {N_PATHS:,} Monte Carlo paths for {TICKER}...')

paths = np.zeros((N_TRADING_DAYS, N_PATHS))
paths[0, :] = S0

for p in range(N_PATHS):
    # Per-path vol perturbation (stochastic vol flavor)
    sigma_p = SIGMA_BASE * np.exp(np.random.normal(0, SIGMA_VOL_OF_VOL))
    sigma_p = np.clip(sigma_p, 0.20, 0.85)

    for t in range(1, N_TRADING_DAYS):
        # GBM diffusion
        Z = np.random.randn()
        diffusion = (MU_BASE - 0.5 * sigma_p**2) * DT + sigma_p * np.sqrt(DT) * Z

        # Poisson jumps
        n_jumps = np.random.poisson(LAMBDA_JUMP * DT)
        jump = 0.0
        if n_jumps > 0:
            jump = np.sum(np.random.normal(MU_JUMP, SIGMA_JUMP, n_jumps))

        paths[t, p] = paths[t-1, p] * np.exp(diffusion + jump)

print(f'✅ Simulation complete. Terminal price range: ${paths[-1].min():.2f} — ${paths[-1].max():.2f}')

# ══════════════════════════════════════════════════════════════════════
# PRECOMPUTE ALL ANALYTICS
# ══════════════════════════════════════════════════════════════════════

# Percentile bands (computed at every timestep)
pct_levels = [5, 10, 25, 50, 75, 90, 95]
bands = {p: np.percentile(paths, p, axis=1) for p in pct_levels}
median_path = bands[50]
mean_path   = paths.mean(axis=1)

# Terminal distribution
terminal = paths[-1, :]
t_mean   = terminal.mean()
t_median = np.median(terminal)
t_std    = terminal.std()
t_skew   = stats.skew(terminal)
t_kurt   = stats.kurtosis(terminal)

# Probability thresholds
prob_above_200  = (terminal > 200).mean()
prob_above_150  = (terminal > 150).mean()
prob_above_S0   = (terminal > S0).mean()
prob_below_100  = (terminal < 100).mean()
prob_below_80   = (terminal < 80).mean()
prob_double     = (terminal > S0 * 2).mean()

# Risk metrics
var_95  = np.percentile(terminal / S0 - 1, 5)
var_99  = np.percentile(terminal / S0 - 1, 1)
cvar_95 = (terminal / S0 - 1)[(terminal / S0 - 1) <= var_95].mean()
cvar_99 = (terminal / S0 - 1)[(terminal / S0 - 1) <= var_99].mean()

# Max drawdown per path
max_dd_all = np.zeros(N_PATHS)
for p in range(N_PATHS):
    running_max = np.maximum.accumulate(paths[:, p])
    dd = (paths[:, p] - running_max) / running_max
    max_dd_all[p] = dd.min()
median_max_dd = np.median(max_dd_all)

# Expected annualized return & vol
ann_returns = (terminal / S0) ** (252 / N_TRADING_DAYS) - 1
exp_return  = np.median(ann_returns)
exp_vol     = np.std(np.log(paths[1:] / paths[:-1]).mean(axis=1)) * np.sqrt(252)

# Key earnings dates (approximate NVDA fiscal quarters in 2026)
earnings_dates_idx = [40, 124, 208, 250]  # ~Feb, May, Aug, late Nov
earnings_labels    = ['Q4 FY26\nEarnings', 'Q1 FY27\nEarnings',
                      'Q2 FY27\nEarnings', 'Q3 FY27\nEarnings']

# ══════════════════════════════════════════════════════════════════════
# ANIMATION FIGURE CONSTRUCTION
# ══════════════════════════════════════════════════════════════════════
fig = plt.figure(figsize=(20, 12.5))
gs = gridspec.GridSpec(3, 4, figure=fig, hspace=0.38, wspace=0.32,
                        height_ratios=[3.5, 1.0, 1.3],
                        left=0.05, right=0.97, top=0.91, bottom=0.04)

# ── Main price chart (spans 3 of 4 columns) ──
ax_main = fig.add_subplot(gs[0, :3])

# ── Terminal distribution (right column, top) ──
ax_dist = fig.add_subplot(gs[0, 3])

# ── Confidence band panel (bottom-left wide) ──
ax_band = fig.add_subplot(gs[1, :3])

# ── Statistics panel (right column, middle) ──
ax_stats = fig.add_subplot(gs[1, 3])
ax_stats.axis('off')

# ── Probability bars (bottom left) ──
ax_prob = fig.add_subplot(gs[2, :2])

# ── Risk metrics panel (bottom right) ──
ax_risk = fig.add_subplot(gs[2, 2:])
ax_risk.axis('off')

# ══════════════════════════════════════════════════════════════════════
# MASTER TITLE
# ══════════════════════════════════════════════════════════════════════
fig.text(0.05, 0.97, f'{TICKER}', fontsize=28, fontweight='bold', color='white',
         fontfamily='monospace', va='top')
fig.text(0.05, 0.935, f'{COMPANY}  |  {SECTOR}', fontsize=10.5,
         color=TEXT_MUTED, fontfamily='monospace', va='top')
fig.text(0.50, 0.97, 'Monte Carlo Forward Price Simulation — FY 2026',
         fontsize=14, fontweight='bold', color=GS_GOLD, fontfamily='monospace',
         va='top', ha='center')
fig.text(0.50, 0.945,
         f'Merton Jump-Diffusion  ·  {N_PATHS:,} paths  ·  σ={SIGMA_BASE:.0%}  '
         f'·  λ_jump={LAMBDA_JUMP}  ·  S₀=${S0:.2f}',
         fontsize=8.5, color=TEXT_DIM, fontfamily='monospace', va='top', ha='center')
fig.text(0.97, 0.97, f'Report Date: {REPORT_DATE}', fontsize=8, color=TEXT_DIM,
         fontfamily='monospace', va='top', ha='right')
fig.text(0.97, 0.945, 'CONFIDENTIAL', fontsize=7, color=GS_RED,
         fontfamily='monospace', va='top', ha='right', fontstyle='italic')

# Separator line
fig.patches.append(plt.Rectangle((0.04, 0.925), 0.92, 0.001,
                                  transform=fig.transFigure, facecolor=BORDER_CLR))

# ══════════════════════════════════════════════════════════════════════
# AX_MAIN — Price chart setup
# ══════════════════════════════════════════════════════════════════════
ax_main.set_xlim(dates[0], dates[-1])
y_min = paths.min() * 0.85
y_max = paths.max() * 1.08
ax_main.set_ylim(y_min, y_max)
ax_main.set_ylabel('Stock Price (USD)', fontsize=10, color=TEXT_MUTED)
ax_main.yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f'${x:,.0f}'))
ax_main.xaxis.set_major_formatter(mdates.DateFormatter('%b'))
ax_main.xaxis.set_major_locator(mdates.MonthLocator())
ax_main.grid(True, alpha=0.20, which='both')
ax_main.set_title('Simulated Price Paths', fontsize=12, fontweight='bold',
                   color='white', loc='left', pad=10)

# Starting price line & annotation
ax_main.axhline(S0, color=GS_GOLD, ls='--', lw=1.0, alpha=0.5, zorder=1)
ax_main.text(dates[3], S0 * 1.012, f'S₀ = ${S0:.2f}', fontsize=7.5,
             color=GS_GOLD, va='bottom', fontfamily='monospace')

# Earnings date markers
for idx, label in zip(earnings_dates_idx, earnings_labels):
    if idx < N_TRADING_DAYS:
        ax_main.axvline(dates[idx], color=GS_AMBER, ls=':', lw=0.7, alpha=0.35, zorder=1)
        ax_main.text(dates[idx], y_max * 0.98, label, fontsize=5.5, color=GS_AMBER,
                     ha='center', va='top', alpha=0.6,
                     bbox=dict(boxstyle='round,pad=0.15', facecolor=BG_ELEVATED,
                               edgecolor=GS_AMBER, alpha=0.5))

# Key price level reference lines
for level, label in [(100, '$100'), (150, '$150'), (200, '$200'), (250, '$250'), (300, '$300')]:
    if y_min < level < y_max:
        ax_main.axhline(level, color=GRID_CLR, ls='-', lw=0.4, alpha=0.4, zorder=0)
        ax_main.text(dates[-1], level, f'  {label}', fontsize=6, color=TEXT_DIM,
                     va='center', ha='left')

# ══════════════════════════════════════════════════════════════════════
# AX_DIST — Terminal distribution setup
# ══════════════════════════════════════════════════════════════════════
ax_dist.set_facecolor(BG_CARD)
bins_t = np.linspace(max(terminal.min() * 0.95, 0), terminal.max() * 1.02, 80)
ax_dist.set_xlim(bins_t[0], bins_t[-1])
ax_dist.set_xlabel('Terminal Price (USD)', fontsize=8, color=TEXT_MUTED)
ax_dist.set_ylabel('Density', fontsize=8, color=TEXT_MUTED)
ax_dist.set_title('Dec 2026 Distribution', fontsize=10, fontweight='bold',
                   color='white', loc='left', pad=8)
ax_dist.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f'${x:,.0f}'))
ax_dist.grid(True, alpha=0.15)

# ══════════════════════════════════════════════════════════════════════
# AX_BAND — Confidence band setup
# ══════════════════════════════════════════════════════════════════════
ax_band.set_xlim(dates[0], dates[-1])
ax_band.set_ylim(y_min, y_max)
ax_band.set_ylabel('Price', fontsize=8, color=TEXT_MUTED)
ax_band.yaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f'${x:,.0f}'))
ax_band.xaxis.set_major_formatter(mdates.DateFormatter('%b'))
ax_band.xaxis.set_major_locator(mdates.MonthLocator(interval=2))
ax_band.grid(True, alpha=0.15)
ax_band.set_title('Confidence Envelope & Median Path', fontsize=10, fontweight='bold',
                   color='white', loc='left', pad=6)

# ══════════════════════════════════════════════════════════════════════
# AX_PROB — Probability targets setup
# ══════════════════════════════════════════════════════════════════════
prob_labels = [f'>{" "*0}$250', f'>{" "*0}$200', f'>{" "*0}$150',
               f'>{" "*0}S₀ (${S0:.0f})', f'<{" "*0}$100', f'<{" "*0}$80']
prob_vals   = [(terminal > 250).mean(), prob_above_200, prob_above_150,
               prob_above_S0, prob_below_100, prob_below_80]
prob_colors = [GS_GREEN, GS_GREEN, GS_LIGHT_GRN, GS_BLUE, GS_LIGHT_RED, GS_RED]

ax_prob.set_xlim(0, 1.05)
ax_prob.set_title('Terminal Price Probabilities', fontsize=10, fontweight='bold',
                   color='white', loc='left', pad=6)
ax_prob.set_xlabel('Probability', fontsize=8, color=TEXT_MUTED)
ax_prob.xaxis.set_major_formatter(ticker.FuncFormatter(lambda x, _: f'{x:.0%}'))
ax_prob.grid(True, axis='x', alpha=0.15)
ax_prob.invert_yaxis()

# ══════════════════════════════════════════════════════════════════════
# PRE-DRAW PATH LINES (hidden, to be revealed in animation)
# ══════════════════════════════════════════════════════════════════════
# Color paths by terminal price (cool→warm)
terminal_norm = (terminal - terminal.min()) / (terminal.max() - terminal.min())
path_colors = PATH_CMAP(terminal_norm)
path_colors[:, 3] = 0.0  # start invisible

# Sort paths so extreme ones draw last (more visible)
sort_order = np.argsort(np.abs(terminal - t_median))  # median paths first
path_lines = []
for i in sort_order:
    line, = ax_main.plot(dates, paths[:, i], lw=0.35, color=path_colors[i],
                          alpha=0.0, zorder=2, solid_capstyle='round')
    path_lines.append((i, line))

# Median line (hidden initially)
median_line, = ax_main.plot([], [], lw=0, color=GS_GOLD, zorder=10)

# Progress counter text
counter_txt = ax_main.text(0.98, 0.03, '', transform=ax_main.transAxes,
                            fontsize=8, fontfamily='monospace', color=TEXT_DIM,
                            ha='right', va='bottom')

# Phase text
phase_txt = ax_main.text(0.98, 0.96, '', transform=ax_main.transAxes,
                          fontsize=9, fontweight='bold', fontfamily='monospace',
                          color=GS_GOLD, ha='right', va='top',
                          bbox=dict(boxstyle='round,pad=0.3', facecolor=BG_ELEVATED,
                                    edgecolor=GS_GOLD, alpha=0.9))

# ══════════════════════════════════════════════════════════════════════
# ANIMATION PHASES
# ══════════════════════════════════════════════════════════════════════
# Phase 1: Draw paths progressively (frames 0–99)
# Phase 2: All paths visible, brief pause (frames 100–109)
# Phase 3: Fade all paths, reveal median + bands + stats (frames 110–149)
# Phase 4: Final polish hold (frames 150–165)

PHASE1_END = 99
PHASE2_END = 109
PHASE3_END = 149
PHASE4_END = 169
TOTAL_FRAMES = PHASE4_END + 1

PATHS_PER_FRAME = max(1, N_PATHS // (PHASE1_END + 1))

# Track what's been drawn
drawn_count = [0]
final_elements_drawn = [False]

def animate(frame):
    artists = []

    # ─────────────────────────────────────────────────────────────
    # PHASE 1: Progressive path reveal
    # ─────────────────────────────────────────────────────────────
    if frame <= PHASE1_END:
        start_idx = drawn_count[0]
        end_idx = min(start_idx + PATHS_PER_FRAME, N_PATHS)

        for k in range(start_idx, end_idx):
            orig_idx, line = path_lines[k]
            base_alpha = 0.12 + 0.20 * terminal_norm[orig_idx]
            c = path_colors[orig_idx].copy()
            c[3] = base_alpha
            line.set_alpha(base_alpha)
            line.set_color(c)
            artists.append(line)

        drawn_count[0] = end_idx
        counter_txt.set_text(f'Simulating... {min(end_idx, N_PATHS):,}/{N_PATHS:,} paths')
        phase_txt.set_text('◉ PHASE 1: MONTE CARLO SIMULATION')
        phase_txt.set_color(GS_CYAN)
        artists.extend([counter_txt, phase_txt])

    # ─────────────────────────────────────────────────────────────
    # PHASE 2: Brief hold — all paths visible
    # ─────────────────────────────────────────────────────────────
    elif frame <= PHASE2_END:
        counter_txt.set_text(f'{N_PATHS:,} paths computed')
        phase_txt.set_text('◉ ALL PATHS GENERATED')
        phase_txt.set_color(GS_GOLD)
        artists.extend([counter_txt, phase_txt])

    # ─────────────────────────────────────────────────────────────
    # PHASE 3: Fade paths → reveal median + analytics
    # ─────────────────────────────────────────────────────────────
    elif frame <= PHASE3_END:
        progress = (frame - PHASE2_END) / (PHASE3_END - PHASE2_END)
        fade_alpha = max(0.015, 0.15 * (1 - progress * 0.92))

        for orig_idx, line in path_lines:
            c = path_colors[orig_idx].copy()
            c[3] = fade_alpha
            line.set_alpha(fade_alpha)
            line.set_color(c)
            artists.append(line)

        # Median line grows in
        reveal_t = int(progress * N_TRADING_DAYS)
        median_line.set_data(dates[:reveal_t], median_path[:reveal_t])
        median_line.set_lw(2.8)
        median_line.set_color(GS_GOLD)
        median_line.set_alpha(min(1.0, progress * 1.5))
        median_line.set_zorder(10)
        median_line.set_path_effects([
            pe.Stroke(linewidth=4.5, foreground=BG_PRIMARY, alpha=0.7),
            pe.Normal()
        ])
        artists.append(median_line)

        # Draw confidence bands progressively
        if progress > 0.3 and not final_elements_drawn[0]:
            final_elements_drawn[0] = True
            band_alpha = 0.6

            # 5–95 band
            ax_band.fill_between(dates, bands[5], bands[95], alpha=0.10 * band_alpha,
                                  color=GS_BLUE, label='5th–95th pctl', zorder=1)
            # 10–90 band
            ax_band.fill_between(dates, bands[10], bands[90], alpha=0.15 * band_alpha,
                                  color=GS_BLUE, label='10th–90th pctl', zorder=2)
            # 25–75 band
            ax_band.fill_between(dates, bands[25], bands[75], alpha=0.25 * band_alpha,
                                  color=GS_BLUE, label='25th–75th pctl', zorder=3)
            # Median
            ax_band.plot(dates, median_path, lw=2.5, color=GS_GOLD, label='Median (P50)',
                          zorder=5, path_effects=[pe.Stroke(linewidth=4, foreground=BG_PRIMARY, alpha=0.6),
                                                    pe.Normal()])
            # Mean
            ax_band.plot(dates, mean_path, lw=1.2, color=GS_CYAN, ls='--',
                          label='Mean', zorder=4, alpha=0.7)
            ax_band.axhline(S0, color=GS_GOLD, ls=':', lw=0.7, alpha=0.4)
            ax_band.legend(fontsize=7, loc='upper left', ncol=5, framealpha=0.85,
                            edgecolor=BORDER_CLR)

            # Terminal annotations on band chart
            for pct, col, align in [(5, GS_RED, 'bottom'), (25, TEXT_MUTED, 'bottom'),
                                     (50, GS_GOLD, 'center'), (75, TEXT_MUTED, 'top'),
                                     (95, GS_GREEN, 'top')]:
                val = bands[pct][-1]
                ax_band.text(dates[-1] + pd.Timedelta(days=2), val,
                             f' P{pct}: ${val:,.0f}', fontsize=6.5,
                             color=col, va=align, fontfamily='monospace', fontweight='bold',
                             clip_on=False)

            # ── Terminal distribution ──
            n_hist, bin_edges, patches_h = ax_dist.hist(
                terminal, bins=bins_t, density=True, orientation='horizontal',
                color=GS_BLUE, alpha=0.45, edgecolor='none')

            # Color bins by price relative to S0
            for patch, left_edge in zip(patches_h, bin_edges[:-1]):
                if left_edge < S0:
                    patch.set_facecolor(GS_RED)
                    patch.set_alpha(0.35)
                else:
                    patch.set_facecolor(GS_GREEN)
                    patch.set_alpha(0.35)

            # KDE overlay
            kde_x = np.linspace(bins_t[0], bins_t[-1], 300)
            kde = stats.gaussian_kde(terminal)
            ax_dist.plot(kde(kde_x), kde_x, lw=1.8, color=GS_CYAN, alpha=0.9)

            # Key markers on distribution
            ax_dist.axhline(t_median, color=GS_GOLD, ls='-', lw=1.5, alpha=0.8)
            ax_dist.axhline(S0, color=GS_GOLD, ls='--', lw=1, alpha=0.5)
            ax_dist.axhline(np.percentile(terminal, 5), color=GS_RED, ls=':', lw=1, alpha=0.6)
            ax_dist.axhline(np.percentile(terminal, 95), color=GS_GREEN, ls=':', lw=1, alpha=0.6)

            ax_dist.text(ax_dist.get_xlim()[1] * 0.55, t_median * 1.01,
                         f'Median: ${t_median:,.0f}', fontsize=7, color=GS_GOLD,
                         fontweight='bold', va='bottom')
            ax_dist.text(ax_dist.get_xlim()[1] * 0.55, S0 * 0.99,
                         f'Entry: ${S0:,.0f}', fontsize=6.5, color=GS_GOLD,
                         alpha=0.6, va='top')
            ax_dist.set_ylim(y_min, y_max)

            # ── Probability bars ──
            y_pos = np.arange(len(prob_labels))
            bars = ax_prob.barh(y_pos, prob_vals, height=0.55, color=prob_colors,
                                edgecolor='none', alpha=0.80)
            ax_prob.set_yticks(y_pos)
            ax_prob.set_yticklabels(prob_labels, fontsize=8.5, fontfamily='monospace')
            for bar, val in zip(bars, prob_vals):
                ax_prob.text(val + 0.012, bar.get_y() + bar.get_height()/2,
                             f'{val:.1%}', va='center', fontsize=8.5,
                             fontweight='bold', color=TEXT_PRIMARY, fontfamily='monospace')

            # ── Statistics panel ──
            stats_items = [
                ('MODEL PARAMETERS', '', '', True),
                ('Base Drift (μ)', f'{MU_BASE:.1%}', GS_CYAN, False),
                ('Base Vol (σ)', f'{SIGMA_BASE:.1%}', GS_CYAN, False),
                ('Jump Intensity (λ)', f'{LAMBDA_JUMP:.1f}/yr', GS_CYAN, False),
                ('Jump Vol (σ_J)', f'{SIGMA_JUMP:.1%}', GS_CYAN, False),
                ('', '', '', False),
                ('TERMINAL STATISTICS', '', '', True),
                ('Mean Price', f'${t_mean:,.2f}', GS_LIGHT_GRN, False),
                ('Median Price', f'${t_median:,.2f}', GS_GOLD, False),
                ('Std Dev', f'${t_std:,.2f}', TEXT_MUTED, False),
                ('Skewness', f'{t_skew:+.3f}', TEXT_MUTED, False),
                ('Kurtosis', f'{t_kurt:+.3f}', TEXT_MUTED, False),
            ]
            y_start = 0.97
            for name, val, col, is_header in stats_items:
                if name == '' and val == '':
                    y_start -= 0.04
                    continue
                if is_header:
                    ax_stats.text(0.02, y_start, name, fontsize=7.5, fontweight='bold',
                                  color=GS_GOLD, transform=ax_stats.transAxes,
                                  fontfamily='monospace')
                    y_start -= 0.005
                    ax_stats.plot([0.02, 0.98], [y_start, y_start], '-',
                                  color=BORDER_CLR, lw=0.5, transform=ax_stats.transAxes)
                else:
                    ax_stats.text(0.04, y_start, name, fontsize=7.5, color=TEXT_MUTED,
                                  transform=ax_stats.transAxes, fontfamily='monospace')
                    ax_stats.text(0.96, y_start, val, fontsize=8, fontweight='bold',
                                  color=col, ha='right', transform=ax_stats.transAxes,
                                  fontfamily='monospace')
                y_start -= 0.085

            # ── Risk metrics panel ──
            risk_items = [
                ('RISK ANALYTICS', '', '', True),
                ('VaR (95%, 1Y)', f'{var_95:+.1%}', GS_RED, False),
                ('VaR (99%, 1Y)', f'{var_99:+.1%}', GS_RED, False),
                ('CVaR (95%)', f'{cvar_95:+.1%}', GS_RED, False),
                ('CVaR (99%)', f'{cvar_99:+.1%}', GS_RED, False),
                ('Median Max DD', f'{median_max_dd:.1%}', GS_LIGHT_RED, False),
                ('P(Double)', f'{prob_double:.1%}', GS_GREEN, False),
                ('', '', '', False),
                ('POINT ESTIMATES', '', '', True),
                ('P10 Price', f'${np.percentile(terminal, 10):,.0f}', GS_LIGHT_RED, False),
                ('P25 Price', f'${np.percentile(terminal, 25):,.0f}', TEXT_MUTED, False),
                ('P50 Price', f'${np.percentile(terminal, 50):,.0f}', GS_GOLD, False),
                ('P75 Price', f'${np.percentile(terminal, 75):,.0f}', TEXT_MUTED, False),
                ('P90 Price', f'${np.percentile(terminal, 90):,.0f}', GS_LIGHT_GRN, False),
            ]
            y_start = 0.97
            for name, val, col, is_header in risk_items:
                if name == '' and val == '':
                    y_start -= 0.03
                    continue
                if is_header:
                    ax_risk.text(0.02, y_start, name, fontsize=7.5, fontweight='bold',
                                 color=GS_GOLD, transform=ax_risk.transAxes,
                                 fontfamily='monospace')
                    y_start -= 0.005
                    ax_risk.plot([0.02, 0.98], [y_start, y_start], '-',
                                 color=BORDER_CLR, lw=0.5, transform=ax_risk.transAxes)
                else:
                    ax_risk.text(0.04, y_start, name, fontsize=7.5, color=TEXT_MUTED,
                                 transform=ax_risk.transAxes, fontfamily='monospace')
                    ax_risk.text(0.96, y_start, val, fontsize=8, fontweight='bold',
                                 color=col, ha='right', transform=ax_risk.transAxes,
                                 fontfamily='monospace')
                y_start -= 0.068

        counter_txt.set_text('')
        phase_txt.set_text('◉ EXTRACTING MEDIAN FORECAST')
        phase_txt.set_color(GS_GOLD)
        artists.extend([median_line, counter_txt, phase_txt])

    # ─────────────────────────────────────────────────────────────
    # PHASE 4: Final hold — everything visible
    # ─────────────────────────────────────────────────────────────
    else:
        # Ensure full median line is shown
        median_line.set_data(dates, median_path)
        median_line.set_alpha(1.0)
        median_line.set_lw(2.8)

        # Final terminal price annotation
        if frame == PHASE3_END + 1:
            # Median endpoint marker
            ax_main.scatter([dates[-1]], [median_path[-1]], s=80, color=GS_GOLD,
                             edgecolors='white', lw=1.5, zorder=15)
            ax_main.annotate(
                f'  Median Target\n  ${median_path[-1]:,.2f}',
                xy=(dates[-1], median_path[-1]),
                xytext=(15, 15), textcoords='offset points',
                fontsize=9.5, fontweight='bold', color=GS_GOLD,
                fontfamily='monospace',
                arrowprops=dict(arrowstyle='->', color=GS_GOLD, lw=1.5),
                bbox=dict(boxstyle='round,pad=0.4', facecolor=BG_ELEVATED,
                          edgecolor=GS_GOLD, alpha=0.95),
                zorder=15)

            # P10/P90 range annotation
            ax_main.annotate(
                f'  P10: ${bands[10][-1]:,.0f}\n  P90: ${bands[90][-1]:,.0f}',
                xy=(dates[-5], bands[10][-1]),
                xytext=(-80, -30), textcoords='offset points',
                fontsize=7.5, color=TEXT_MUTED, fontfamily='monospace',
                bbox=dict(boxstyle='round,pad=0.3', facecolor=BG_ELEVATED,
                          edgecolor=BORDER_CLR, alpha=0.9),
                zorder=12)

            # Mean path (dashed)
            ax_main.plot(dates, mean_path, lw=1.0, color=GS_CYAN, ls='--',
                          alpha=0.5, zorder=8, label='Mean')

            # Light confidence shading on main chart
            ax_main.fill_between(dates, bands[10], bands[90],
                                  alpha=0.06, color=GS_BLUE, zorder=1)
            ax_main.fill_between(dates, bands[25], bands[75],
                                  alpha=0.10, color=GS_BLUE, zorder=1)

        phase_txt.set_text('◉ SIMULATION COMPLETE')
        phase_txt.set_color(GS_GREEN)
        counter_txt.set_text(f'Median 12M Target: ${median_path[-1]:,.2f}  |  '
                              f'P(>{S0:.0f}) = {prob_above_S0:.1%}')
        counter_txt.set_color(GS_GOLD)
        artists.extend([median_line, counter_txt, phase_txt])

    return artists


# ══════════════════════════════════════════════════════════════════════
# DISCLAIMER FOOTER (institutional requirement)
# ══════════════════════════════════════════════════════════════════════
disclaimer = (
    'DISCLAIMER: This simulation is for educational and analytical purposes only. '
    'It does not constitute investment advice. Past performance and model outputs '
    'do not guarantee future results. Parameters are illustrative. '
    'Model: Merton (1976) Jump-Diffusion with stochastic vol perturbation.'
)
fig.text(0.50, 0.005, disclaimer, fontsize=5.5, color=TEXT_DIM,
         fontfamily='monospace', ha='center', va='bottom', fontstyle='italic',
         alpha=0.5)

# ══════════════════════════════════════════════════════════════════════
# RUN ANIMATION
# ══════════════════════════════════════════════════════════════════════
print('🎬 Rendering animation...')
anim = FuncAnimation(fig, animate, frames=TOTAL_FRAMES, interval=55,
                      repeat=False, blit=False)
plt.close()
display(HTML(anim.to_jshtml()))
print('✅ Animation complete.')