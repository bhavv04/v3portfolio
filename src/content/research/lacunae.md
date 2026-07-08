---
title: "Lacunae"
subtitle: "An empirical study on the effect of k-space sampling patterns for accelerated MRI reconstruction using deep learning"
slug: "lacunae"
highlights:
  - "Systematically compares 4 k-space sampling patterns across 3 acceleration factors on a fixed U-Net, isolating sampling strategy as an independent variable"
  - "Trained and evaluated on the fastMRI single-coil knee dataset with SSIM and PSNR as primary metrics"
  - "12 total training runs spanning the full pattern × acceleration grid"
  - "Addresses a gap in the literature, where random Cartesian undersampling is used by default without direct comparison to alternatives"
---

Most accelerated MRI reconstruction papers default to random Cartesian undersampling without justification. This study asks a question that hasn't been answered cleanly for deep-learning-based reconstruction: does the choice of k-space sampling pattern matter as much as — or more than — model architecture?

We train the same U-Net across four mask types and three acceleration factors, producing a systematic comparison of reconstruction quality that the literature currently lacks.

## Study Design

| Variable | Values |
|---|---|
| Sampling patterns | Random Cartesian, Equispaced, Radial, Variable-density |
| Acceleration factors | 4x, 8x, 16x |
| Model | U-Net (fixed architecture across all runs) |
| Metrics | SSIM, PSNR |
| Dataset | fastMRI single-coil knee |

12 total training runs. Results reported as mean SSIM and PSNR on the held-out test split.

## Sampling Patterns

- **Random Cartesian** — the de facto standard. Randomly samples k-space columns while always retaining the center low-frequency region. Used as the baseline for comparison.
- **Equispaced** — samples every Nth column uniformly. Deterministic and hardware-friendly, but produces coherent aliasing artifacts.
- **Radial** — samples columns with probability weighted by distance from the k-space center, simulating radial acquisition. Denser at low frequencies, where image energy is concentrated.
- **Variable-density** — quadratic falloff from center, providing a smooth transition between dense low-frequency sampling and sparse high-frequency sampling.

## Model

A standard U-Net with four encoder/decoder stages, held fixed across all experimental conditions so that observed differences in reconstruction quality are attributable to the sampling pattern, not the model.

- Encoder: ConvBlock(1→32) → ConvBlock(32→64) → ConvBlock(64→128) → ConvBlock(128→256)
- Bottleneck: ConvBlock(256→512)
- Decoder: mirrors encoder with transposed convolutions and skip connections
- Loss: L1 + SSIM
- Parameters: ~7.7M

## Status

Random Cartesian baseline trained and evaluated at 4x and 8x acceleration. Equispaced, radial, and variable-density mask implementations, the full 4×3 experimental grid, and the final results table and analysis are still in progress.