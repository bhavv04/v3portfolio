---
title: "Precursor"
subtitle: "Cross-Asset Momentum Spillover from Commodities to Sector Equities via Granger Causality"
slug: "precursor"
highlights:
  - "All five hypothesised commodity-to-equity spillover relationships confirmed at the 5% significance level, from Gold→GDX (F=18.90, p<0.001) to NatGas→XLE (F=2.43, p=0.046)"
  - "Forecast Error Variance Decomposition shows commodity shocks explain 46.4% of GDX momentum variance and 31–37% of XLE momentum variance at short horizons"
  - "Rolling Granger tests and Chow structural break analysis reveal the causal relationships are regime-dependent, not structurally persistent — near-universal breaks around the 2022 energy crisis"
  - "A signal-based long/short backtest confirms regime-conditionality: positive Sharpe ratios during 2020–2022 COVID volatility, deteriorating in the post-energy-crisis period"
---

## Abstract

This paper investigates whether momentum in commodity futures markets contains statistically significant predictive information about subsequent momentum in related sector equity ETFs. Using daily data from January 2010 to May 2026 across five commodity-equity pairs, we apply Granger causality testing, Vector Autoregression (VAR), and Directed Acyclic Graph (DAG) analysis to characterize the cross-asset causal structure.

We find that all five hypothesised commodity-to-equity spillover relationships are confirmed at the 5% significance level, with Gold→GDX producing the strongest signal (F=18.90, p<0.001) and NatGas→XLE the weakest (F=2.43, p=0.046). Forecast Error Variance Decomposition reveals that commodity shocks explain 46.4% of GDX momentum variance and 31–37% of XLE momentum variance at short forecast horizons.

Rolling Granger tests and Chow structural break analysis show that the causal relationships are regime-dependent rather than structurally persistent: near-universal structural breaks are detected around the 2022 energy crisis across all pairs, while COVID-era breaks affect energy and materials pairs but not Gold→GDX. A signal-based long/short backtest confirms the regime-conditionality of the spillover — strategies achieve positive Sharpe ratios during the COVID volatility regime (2020–2022) but deteriorate in the post-energy-crisis period. These findings suggest that commodity-to-equity momentum spillover is a genuine but time-varying causal phenomenon, activated by macro-structural shocks rather than operating as a continuous arbitrage.

## Motivation

Commodities are upstream inputs to the businesses that consume them. If oil prices begin trending, energy company revenues should follow — but with a lag. This project investigates whether commodity momentum statistically precedes sector equity momentum, quantifies the lag structure, and tests whether that predictive precedence is exploitable as a trading signal.

**Research question:** Does past momentum in commodity markets contain information about future momentum in related equity sectors, beyond what equity prices already reflect? Concretely — does WTI crude momentum at time $t$ predict XLE (energy ETF) momentum at time $t+k$, for some lag $k \in \{1, 2, 3, 4, 5\}$ trading days?

## Methodology

### 1. Momentum Signal Construction

For each asset $i$ at time $t$, the momentum signal is the rolling log return over a lookback window $w$:

$$
M_{i,t}(w) = \sum_{\tau=1}^{w} r_{i,t-\tau+1} = \ln\left(\frac{P_{i,t}}{P_{i,t-w}}\right)
$$

where $r_{i,t} = \ln(P_{i,t}) - \ln(P_{i,t-1})$ is the daily log return and $P_{i,t}$ is the closing price of asset $i$ on day $t$. Signals are computed across three lookback windows: $w \in \{5, 10, 20\}$ trading days.

### 2. Granger Causality

The core statistical test. For a commodity series $X$ and equity series $Y$, we test whether lagged values of $X$ improve the forecast of $Y$ beyond $Y$'s own history.

Restricted model (null — $X$ does not Granger-cause $Y$):

$$
Y_t = \alpha + \sum_{k=1}^{p} \beta_k Y_{t-k} + \varepsilon_t
$$

Unrestricted model (alternative — $X$ Granger-causes $Y$):

$$
Y_t = \alpha + \sum_{k=1}^{p} \beta_k Y_{t-k} + \sum_{k=1}^{p} \gamma_k X_{t-k} + \varepsilon_t
$$

We reject the null (i.e., conclude $X$ Granger-causes $Y$) if the $\gamma_k$ coefficients are jointly significant via an F-test:

$$
F = \frac{(RSS_R - RSS_U)/p}{RSS_U/(T-2p-1)} \sim F(p,\; T-2p-1)
$$

where $RSS_R$ and $RSS_U$ are the residual sum of squares for the restricted and unrestricted models, $p$ is the lag order, and $T$ is the number of observations. The test is run across lag orders $p \in \{1, 2, 3, 4, 5\}$, reporting the F-statistic and p-value for each pair.

### 3. Vector Autoregression (VAR)

To model the joint dynamics of commodity and equity momentum simultaneously, we estimate a VAR($p$) system:

$$
z_t = c + \sum_{k=1}^{p} A_k z_{t-k} + \varepsilon_t
$$

where $z_t = [M_{X,t},\, M_{Y,t}]^\top$ is the vector of momentum signals, $A_k$ are $2 \times 2$ coefficient matrices at lag $k$, and $\varepsilon_t \sim N(0, \Sigma)$. The off-diagonal elements of $A_k$ capture cross-asset predictability — specifically, $[A_k]_{21}$ measures how much commodity momentum at lag $k$ predicts equity momentum today.

Lag order $p$ is selected by minimizing the Akaike Information Criterion (AIC):

$$
\mathrm{AIC}(p) = \ln|\hat{\Sigma}_p| + \frac{2p \cdot n^2}{T}
$$

where $n = 2$ is the number of series and $T$ is the sample length.

### 4. DAG Construction

We model the causal structure across all asset pairs as a Directed Acyclic Graph $G = (V, E)$:

- **Nodes ($V$):** each asset (WTI, Brent, copper, natural gas, gold, XLE, XLB, GDX)
- **Directed edges ($E$):** $X \to Y$ if $X$ Granger-causes $Y$ at significance level $\alpha = 0.05$
- **Edge weights:** the F-statistic of the significant Granger test at the optimal lag

The DAG is constructed using `networkx`, with edge weights normalized to $[0, 1]$ for visualization. We also compute in-degree centrality (which equity sectors receive the most predictive signal), out-degree centrality (which commodities are the strongest leading indicators), and path length (the number of hops in indirect spillover chains, e.g. oil → copper → materials).

### 5. Signal-Based Backtest

We construct a simple long/short strategy based on the commodity momentum signal:

$$
\mathrm{Position}_{Y,t} = \mathrm{sign}\big(M_{X,t-k^*}(w)\big)
$$

where $k^*$ is the lag at which Granger causality is strongest. The daily strategy return is:

$$
\Pi_t = \mathrm{Position}_{Y,t} \cdot r_{Y,t}
$$

Performance is evaluated via the annualized Sharpe ratio:

$$
S = \sqrt{252} \cdot \frac{E[\Pi_t]}{\mathrm{std}(\Pi_t)}
$$

maximum drawdown:

$$
\mathrm{MDD} = \max_t \left( \max_{s \le t} C_s - C_t \right)
$$

where $C_t$ is the cumulative return series, and the hit rate (fraction of days where $\mathrm{sign}(\Pi_t) > 0$).

## Asset Universe

| Category | Ticker | Description |
|---|---|---|
| Commodity | CL=F | WTI Crude Oil futures |
| Commodity | BZ=F | Brent Crude futures |
| Commodity | HG=F | Copper futures |
| Commodity | NG=F | Natural Gas futures |
| Commodity | GC=F | Gold futures |
| Equity ETF | XLE | Energy Select Sector SPDR |
| Equity ETF | XLB | Materials Select Sector SPDR |
| Equity ETF | GDX | VanEck Gold Miners ETF |

Hypothesised spillover pairs: WTI/Brent → XLE (oil → energy equities), Copper → XLB (copper → materials equities), Gold → GDX (gold → gold miners).

## Stack

| Purpose | Library |
|---|---|
| Data | yfinance, pandas-datareader |
| Wrangling | pandas, numpy |
| Statistics | statsmodels (VAR, Granger, OLS) |
| Graph | networkx |
| Visualization | matplotlib, seaborn, plotly |
| Notebook | jupyter, nbconvert |

## Data Range

Daily OHLCV from January 2010 to present, sourced via `yfinance`. Approximately 3,500 trading days — sufficient for stable VAR estimation and out-of-sample backtesting with an 80/20 train/test split.

## References

- Granger, C.W.J. (1969). *Investigating Causal Relations by Econometric Models and Cross-spectral Methods.* Econometrica, 37(3), 424–438.
- Lütkepohl, H. (2005). *New Introduction to Multiple Time Series Analysis.* Springer.
- Sims, C.A. (1980). *Macroeconomics and Reality.* Econometrica, 48(1), 1–48.