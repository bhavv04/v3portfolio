---
title: "groat"
tagline: "Every token counts."
slug: "groat"
github: "https://github.com/bhavv04/groat"
live: "https://getgroat.vercel.app/"
status: "active"
featured: true
tech: ["Rust", "Tokio", "OpenAI-compatible APIs", "Vector databases", "Embeddings", "LLMs"]
image: "/images/projects/groat.png"
---

Groat is a self-hosted LLM proxy that reduces API costs through semantic response caching and intelligent model routing. It's a drop-in OpenAI-compatible endpoint — no changes to existing application code required. The name comes from the old English coin, worth very little on its own, but the whole point of a groat is that it counts.

Unlike existing options, Groat is built around actually reducing spend rather than just reporting on it. LiteLLM requires hand-configured routing and only supports exact-match caching, which rarely fires on real traffic. Portkey is SaaS-first, meaning traffic has to leave your own infrastructure. Helicone tells you what you spent but doesn't help you spend less. Groat's wedge: self-hosted, zero required config, and an active attempt to cut costs rather than just observe them.

## How it works

Groat sits in front of LLM traffic and applies four cost-reduction levers, ordered from most trusted to least proven:

- **Semantic caching** — incoming requests are embedded (bge-small-en-v1.5) and checked against LanceDB for a near-duplicate already in the cache. Above a 0.95 similarity threshold, the cached response is returned directly.
- **Prompt cache injection** — stable system-prompt prefixes are detected automatically and a `cache_control` breakpoint is injected, capturing the 50–90% discount providers already offer on cached prefix tokens.
- **User-defined routing** — a TOML config lets you pin your own use cases to your own model tiers, with savings tracked per route. Structured-output requests with a JSON schema are auto-routed to a cheaper model, since the schema itself constrains the output enough for a small model to hold up.
- **Retroactive suggestions** — after enough logged traffic, Groat surfaces routing suggestions with estimated savings (e.g. "these 340 requests look like extraction tasks, routing to GPT-4o-mini would've saved $12.40"). Nothing is rerouted automatically; it only suggests.

## Features

- Drop-in OpenAI-compatible endpoint, zero required config
- Semantic response caching via vector similarity (LanceDB)
- Automatic prompt cache breakpoint injection
- User-defined, TOML-based model tier routing
- Auto-routing for schema-constrained structured outputs
- Retroactive, opt-in routing suggestions based on traffic patterns
- Fully self-hosted — traffic never leaves your infrastructure
- Plain HTML dashboard baked into the binary, no frontend build step

## Why I built it

I was annoyed at the existing options for controlling LLM spend. Every proxy I looked at either made you hand-roll your own routing, sent traffic through someone else's servers, or just told you what you'd already spent without doing anything to reduce it. I wanted something self-hosted that actively tried to save money, ordered around how much trust I was willing to place in automated decisions — from safe, near-zero-risk levers like semantic caching, up to a suggestion engine that shows its work and asks permission rather than silently rerouting production traffic.

## Architecture

The project is a Rust workspace split into four crates:

- `groat` — the binary: axum server, clap CLI
- `groat-core` — pure logic, no I/O
- `groat-providers` — one file per provider, behind a shared trait
- `groat-storage` — SQLite via sqlx, plus LanceDB for vectors

Requests currently flow end to end through Groat to a local Ollama instance running Llama 3.

## What's next

Two ideas are still being sketched out before implementation. **Conversation graph routing** would model conversations as a graph — nodes as requests, edges as parent-child relationships, with depth, branching factor, and accumulated context tokens as queryable properties in SQLite — routing follow-ups differently from root questions the way an OS scheduler treats a new process differently from a continuation. **Speculative prefetching** would fire a cheap speculative call the moment a request pattern reliably known to precede another arrives, strictly async and never on the critical path. Both depend on validating a simple-vs-complex direction vector in embedding space, sketched out as a next step before either gets built.