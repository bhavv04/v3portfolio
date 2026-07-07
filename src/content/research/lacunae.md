---
highlights:
  - "Center 8% of k-space columns always retained - low frequencies carry the bulk of image energy"
  - "~7.7M parameter U-Net with four encoder/decoder stages and transposed convolution upsampling"
  - "Benchmarked on NYU fastMRI single-coil knee dataset (Zbontar et al., 2018)"
---

MRI acquisition is slow because it requires dense sampling of k-space, the frequency-domain representation of the scan. Lacunae artificially undersamples k-space at 4x acceleration — retaining only 25% of frequency lines — and trains a U-Net to reconstruct diagnostically useful images from the incomplete data. A naive inverse FFT on undersampled k-space produces severe aliasing artifacts; the model learns to recover the missing structure. Trained on the fastMRI single-coil knee dataset with L1 loss and evaluated on SSIM and PSNR.