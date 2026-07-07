---
title: "Thunderhead"
tagline: "A self-hosted reverse proxy that passively detects and mitigates bot traffic"
slug: "thunderhead"
github: "https://github.com/bhavv04/thunderhead"
live: https://getthunderhead.vercel.app/""
status: "active"
featured: true
tech: ["Go", "net/http", "httputil.ReverseProxy", "Bubbletea", "Lipgloss", "Next.js", "Docker", "ngrok"]
image: "/images/projects/thunderhead.png"
---

Thunderhead is a self-hosted reverse proxy that detects and mitigates bot traffic through passive behavioral analysis — no Cloudflare, no JS challenges, no CAPTCHAs. Inspired by Anubis, it takes a different approach: instead of blocking non-browser clients with a proof-of-work challenge, it scores every request inline and responds proportionally, which makes it effective for APIs and headless traffic that JS challenges can't reach.

## How it works

Every request is scored 0–100 across five weighted behavioral signals — robots.txt violations, sequential path crawling, high request rate, suspicious or missing headers, and text-heavy page patterns. Scoring happens inline with zero added latency for legitimate traffic, and every decision is logged as structured JSON for full observability.

Requests are handled with a graduated response:

- **< 40** — Allow, pass through
- **≥ 40** — Tarpit, delayed response
- **≥ 75** — Block, 403 Forbidden

## Features

- Passive bot detection with zero user friction
- Intent scoring across 5 behavioral signals
- Graduated responses: allow → tarpit → block
- Real-time terminal dashboard built with Bubbletea (TUI)
- Web-based status dashboard at `/thunderhead/status`
- IP, CIDR, and user-agent allowlist/blocklist
- Robots.txt awareness and persistent client state across restarts
- Config hot reload, HTTPS/TLS support
- Embeddable Go middleware (`pkg/middleware`) for use in other projects
- Docker support with a full docker-compose setup

## Why I built it

I wanted to explore an alternative to challenge-based bot mitigation (like Cloudflare or Anubis-style JS challenges), which breaks down for API traffic and headless clients that can't execute JavaScript. Thunderhead instead treats bot detection as a passive, explainable scoring problem — every request gets scored on real behavioral signals and every decision is traceable, without adding latency or friction for legitimate users.

## Architecture

The project is organized as a Go backend with a Next.js landing page:

- `cmd/thunderhead` — headless proxy binary
- `cmd/tui` — terminal dashboard binary
- `internal/analyzer` — the intent scoring engine
- `internal/proxy` — request handling, tarpit, block, and dashboard logic
- `internal/store` — persistent client state
- `pkg/middleware` — embeddable middleware for other Go projects
- `web/` — Next.js landing page

## What's next

Planned work includes a REST API layer, a standalone Next.js dashboard, a JS-challenge fallback mode, CIDR/subnet-based rate limiting, a systemd service file, and Goreleaser binary releases.