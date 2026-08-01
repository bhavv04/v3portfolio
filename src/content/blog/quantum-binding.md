---
title: "Quantum kernels for drug-molecule binding"
date: "2026-07-31"
excerpt: "Exploring QKDTI's quantum kernel approach for Alzheimer's drug-target binding prediction - starting from zero on the quantum computing side."
---

### Starting Small: Can Quantum Computing Help Predict Drug-Molecule Binding for Alzheimer's Research?

I just kicked off a new side project, and I want to document it from the very beginning - partly for accountability, partly because I think the "messy start" is more useful to share than the polished result.

### The question I'm chasing

Alzheimer's drug discovery is brutal. One of the hardest parts is predicting how well a candidate drug molecule will bind to its target protein - get that wrong, and you waste years and enormous amounts of money chasing compounds that never had a shot. Classical computational methods (molecular docking, traditional ML) have made real progress here, but they still struggle with the sheer complexity of protein-ligand interactions and often require heavy manual feature engineering.

That got me wondering: could quantum computing offer a meaningfully different lens on this problem? Not as a magic bullet, but as a genuinely different way of representing molecular complexity - one that might capture the kind of nonlinear structure classical feature engineering tends to flatten out.

![Protein-ligand binding, lock and key](/images/content/blog/quantum/protien-ligand-binding.svg)
*Binding affinity comes down to how well a drug molecule's shape fits a protein's binding pocket - get the fit wrong and the drug won't work.*

### The foundation I'm building on

Rather than starting from a blank page, I'm building on top of **QKDTI (Quantum Kernel Drug-Target Interaction)**, a framework published in *Scientific Reports* in 2025. The core idea is to transform biochemical features into a quantum Hilbert space using a parameterized circuit, compute a "quantum kernel" from the overlap between the resulting quantum states, and feed that into a support vector regression model to predict binding affinity. The researchers tested it on well-established datasets (DAVIS, KIBA, and BindingDB) and reported that the quantum kernel handled the non-linear relationships in binding data more effectively than the classical baselines they compared against.

What I don't yet have a good feel for is *why* - is it the entanglement between qubits doing real work, or is some of that gain just a fixed-dataset artifact? That's part of what pulled me toward this project instead of just reading the paper and moving on.

![QKDTI prediction pipeline](/images/content/blog/quantum/qkdti-pipeline.svg)
*The classical approach hits a wall on non-linear binding patterns. QKDTI instead maps molecular pairs into a quantum feature space before computing the kernel that feeds the regression model.*

![Classical versus quantum feature space](/images/content/blog/quantum/classical-vs-quantum-kernel.svg)
*The intuition: the same data points that overlap and resist separation in a classical feature space can become cleanly separable once mapped into a quantum feature space.*

My plan is to explore whether this same quantum kernel approach can be applied - or adapted - to Alzheimer's-relevant drug-target pairs specifically, rather than the general-purpose benchmarks the original paper used.

### The math I'm working through

The comparison I keep coming back to: the classical kernel is a simple similarity measure between feature vectors - a dot product, or something like an RBF kernel based on distance. The quantum kernel instead runs each input through a parameterized rotation circuit and measures the squared overlap between the resulting quantum states. Same inputs, structurally similar idea, very different computation underneath.

[ Image to be made soon ]

*Same input, two different kernels. The quantum version operates in a much higher-dimensional Hilbert space, which is where its extra expressive power supposedly comes from - and also exactly why I need to actually understand the circuits before I trust any results I get out of them.*

### Where I actually am right now

Honestly? Barely started. The GitHub repo exists, the README states the goal, and that's about it. Before I touch any code, I want to actually understand the core concepts properly instead of copy-pasting quantum ML code I don't fully grasp.

The obvious starting point is quantum computing fundamentals themselves - qubits, superposition, entanglement, enough circuit-level intuition to know what's actually happening when a rotation gate fires. The Bloch sphere is the first thing that made it click even a little for me: a classical bit is a light switch, a qubit is more like a compass needle that can point anywhere until you actually look at it.

![Classical bit versus qubit](/images/content/blog/quantum/qubit-vs-classical.svg)
*A classical bit is pinned to 0 or 1. A qubit is a point on the Bloch sphere - it can sit in a superposition of both, and only "collapses" to a definite value when measured.*

From there, quantum kernels specifically are the part I'm least sure about. I get the general pitch - map data into a space where a simple method can find structure it couldn't find before - but I don't yet have real intuition for *why* the quantum version of that mapping is meaningfully better than a classical nonlinear kernel, only that QKDTI's results claim it is. That gap is probably the thing I most want to close.

Which leads pretty directly into actually working through the QKDTI methodology in depth, instead of skimming the abstract - specifically how they landed on the RY/RZ rotation circuit, and why the Nystrom approximation (just 50 landmark samples standing in for the full kernel matrix) doesn't wreck the accuracy.
