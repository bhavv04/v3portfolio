export type ProjectStatus = "completed" | "in-progress" | "submitted" | "preprint";

export type ResearchTag =
	| "finance"
	| "medicine"
	| "mathematics"
	| "climate"
	| "geospatial"
	| "physics"
	| "neuroscience"
	| "economics"
	| "artificial-intelligence";

export interface CaseStudy {
	id: string;
	title: string;
	subtitle: string;
	abstract: string;
	status: ProjectStatus;
	tags: ResearchTag[];
	year: number;
	methods: string[];
	stack: string[];
	links: {
		repo?: string;
		demo?: string;
		paper?: string;
		writeup?: string;
	};
	highlights?: string[]; // key findings or design decisions worth calling out
}

export const caseStudies: CaseStudy[] = [
	{
		id: "lacunae",
		title: "Lacunae",
		subtitle: "Accelerated MRI Reconstruction from Undersampled K-Space via U-Net",
		abstract:
			"MRI acquisition is slow because it requires dense sampling of k-space, the frequency-domain representation of the scan. Lacunae artificially undersamples k-space at 4x acceleration — retaining only 25% of frequency lines — and trains a U-Net to reconstruct diagnostically useful images from the incomplete data. A naive inverse FFT on undersampled k-space produces severe aliasing artifacts; the model learns to recover the missing structure. Trained on the fastMRI single-coil knee dataset with L1 loss and evaluated on SSIM and PSNR.",
		status: "completed",
		tags: ["artificial-intelligence", "medicine", "mathematics"],
		year: 2025,
		methods: [
			"Random Cartesian Undersampling",
			"K-Space Masking (4x Acceleration)",
			"U-Net with Skip Connections",
			"L1 Reconstruction Loss",
			"SSIM / PSNR Evaluation",
			"Inverse FFT Baseline"
		],
		stack: ["Python", "PyTorch", "fastMRI", "h5py", "scikit-image", "wandb"],
		links: {
			repo: "https://github.com/bhavv04/lacunae"
		},
		highlights: [
			"Center 8% of k-space columns always retained — low frequencies carry the bulk of image energy",
			"~7.7M parameter U-Net with four encoder/decoder stages and transposed convolution upsampling",
			"Benchmarked on NYU fastMRI single-coil knee dataset (Zbontar et al., 2018)"
		]
	},
	{
		id: "precursor",
		title: "Precursor",
		subtitle: "Cross-Asset Momentum Spillover from Commodities to Sector Equities via Granger Causality",
		abstract:
			"Commodities are upstream inputs to the businesses that consume them. This project investigates whether commodity momentum statistically precedes sector equity momentum, quantifies the lag structure across 1–5 trading days, and tests whether that predictive precedence is exploitable as a long/short trading signal. Granger causality tests, VAR estimation, and a DAG-based causal graph are applied across five commodity–equity pairs including WTI→XLE, Copper→XLB, and Gold→GDX.",
		status: "in-progress",
		tags: ["finance", "economics", "mathematics"],
		year: 2025,
		methods: [
			"Granger Causality (F-test)",
			"Vector Autoregression (VAR)",
			"AIC Lag Selection",
			"Directed Acyclic Graph (DAG)",
			"Long/Short Backtest",
			"Sharpe Ratio & Max Drawdown"
		],
		stack: ["Python", "statsmodels", "networkx", "yfinance", "pandas", "matplotlib"],
		links: {
			repo: "https://github.com/bhavv04/precursor"
		},
		highlights: [
			"Tests momentum spillover at lags k ∈ {1,2,3,4,5} trading days across 3,500+ daily observations",
			"DAG construction maps in/out-degree centrality to identify leading commodity indicators",
			"Backtest evaluates annualised Sharpe, max drawdown, and hit rate on an 80/20 train/test split"
		]
	},
	{
		id: "deadzones",
		title: "Deadzones",
		subtitle: "Modeling the Seasonal Collapse and Recovery of Gulf Hypoxia from River Nutrient Loading",
		abstract:
			"A 40-year computational oceanography study modeling the Gulf of Mexico hypoxic dead zone using NOAA, LUMCON, USGS, and World Ocean Atlas datasets. The project combines annual hypoxia measurements, Mississippi River nutrient flux, and sea surface temperature to predict dead zone size and identify anomalous years driven by flooding, hurricanes, and climate variability. Random Forest regression with Leave-One-Out cross validation reveals spring nitrogen loading as the dominant predictor of hypoxia extent, quantitatively tracing the causal chain from Midwest agricultural runoff to marine ecosystem collapse.",
		status: "completed",
		tags: ["climate", "geospatial", "mathematics"],
		year: 2025,
		methods: [
			"Random Forest Regression",
			"Leave-One-Out Cross Validation",
			"Pearson Correlation Analysis",
			"Anomaly Detection",
			"Time Series Feature Engineering",
			"NetCDF Oceanographic Processing",
			"Geospatial Visualization",
			"Sea Surface Temperature Analysis"
		],
		stack: ["Python", "xarray", "pandas", "scikit-learn", "matplotlib", "cartopy", "NumPy", "Jupyter", "NetCDF4"],
		links: {
			repo: "https://github.com/bhavv04/deadzone"
		},
		highlights: [
			"Built a 40-year Gulf hypoxia time series (1985–2024) integrating NOAA, LUMCON, USGS, and World Ocean Atlas datasets",
			"Spring nitrogen load was the dominant predictor of dead zone size (r = 0.788), accounting for 80.4% of model importance",
			"Random Forest model achieved R² = 0.52 with Leave-One-Out CV and identified anomalous years linked to hurricanes and extreme flooding"
		]
	},
	{
		id: "grokking",
		title: "Grokking",
		subtitle: "Reproducing Generalization Beyond Overfitting on Modular Arithmetic",
		abstract:
			"A from-scratch reproduction of the grokking phenomenon from Power et al. (2022) — where a small transformer trained on modular addition memorizes the training set early, then long after overfitting, suddenly generalizes. The key ingredient is high weight decay, which pressures the model away from memorization and toward the underlying algorithm. Built as a single self-contained script with a custom training loop and publication-style loss/accuracy plots.",
		status: "completed",
		tags: ["artificial-intelligence", "mathematics"],
		year: 2025,
		methods: [
			"Transformer (1-layer, 4-head)",
			"Modular Arithmetic Classification",
			"AdamW with High Weight Decay",
			"Train/Val Loss & Accuracy Tracking",
			"Grokking Epoch Detection"
		],
		stack: ["Python", "PyTorch", "matplotlib"],
		links: {
			repo: "https://gist.github.com/bhavv04/6389c05c23e9093a91c5cf63466ece7c"
		},
		highlights: [
			"Reproduces grokking on (a + b) mod 97 with only 30% of data used for training",
			"Weight decay = 1.0 is the critical hyperparameter — without it, the model never generalizes",
			"Auto-detects the grokking epoch (val acc > 0.95) and marks it on the training curves"
		]
	}
];
