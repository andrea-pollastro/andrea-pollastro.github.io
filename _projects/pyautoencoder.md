---
layout: page
title: PyAutoencoder
description: A clean, modular PyTorch library for building and training autoencoders.
img: assets/img/projects/pyautoencoder.png
importance: 1
category: software
github: https://github.com/andrea-pollastro/pyautoencoder
---

PyAutoencoder is an open-source Python library that gives simple access to autoencoder frameworks in [PyTorch](https://pytorch.org/).
You bring your own `nn.Module` encoder and decoder, and the library wraps them into ready-to-use models, each paired with its loss function.

- **Minimal, composable API**: no complicated base classes and no custom training loop to learn.
- **Ready-to-use models**: Autoencoder (AE), Variational Autoencoder (VAE) and Adaptive Group VAE (Ada-GVAE), with reconstruction likelihoods and KL divergence already implemented.
- **Research-oriented**: lightweight and transparent, designed for quick prototyping with full control.

```bash
pip install pyautoencoder
```

### Links

- **Documentation**: [andrea-pollastro.github.io/pyautoencoder](https://andrea-pollastro.github.io/pyautoencoder/)
- **Source code**: [github.com/andrea-pollastro/pyautoencoder](https://github.com/andrea-pollastro/pyautoencoder)
- **PyPI**: [pypi.org/project/pyautoencoder](https://pypi.org/project/pyautoencoder/)
