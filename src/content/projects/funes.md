---
title: "funes"
tagline: "Your machine's memory, queryable"
slug: "funes"
github: "https://github.com/bhavv04/funes"
live: "https://get-funes.vercel.app/"
status: "active"
featured: true
tech: ["Rust", "Ollama", "SQLite"]
image: "/images/projects/funes.png"
---

funes is a local-first semantic search tool for your own machine. It runs quietly in the background, indexes your files, notes, and terminal history, and lets you find anything you've ever worked on by describing it in plain English — no exact filenames or keywords required.

You fixed a Postgres deadlock bug three months ago. You remember roughly what the problem was, but not which file, which project, or what the fix looked like. That's the gap funes closes.

## Why I built it

I kept running into the same problem: the useful trace of my own work — a config that fixed a weird bug, a command I ran once and never wrote down, a note from a project I abandoned and picked back up months later — was scattered across files, shell history, and memory that fades fast. Grep only works if you remember the exact string. Cloud-based "second brain" tools solve part of this, but they mean sending your files and terminal history to someone else's servers, plus a subscription for something that's really just indexing your own machine.

funes is built on the idea that this kind of memory should be local, private, and free of any account or subscription. It uses local embedding models via Ollama to understand what you're searching for semantically, so a vague, half-remembered description is enough — and nothing ever leaves your machine.

The name comes from Jorge Luis Borges' 1942 short story *Funes the Memorious*, about a man who forgets nothing — every detail of his life perfectly preserved and instantly recallable. funes doesn't aim for literally perfect memory, just memory that's reliably there when you need it.

## How it works

funes watches your files and shell history, breaks them into chunks, and embeds each chunk with a local model. A query is embedded the same way, and funes retrieves the chunks closest in meaning — not just keyword matches, but results based on what you actually meant.

```
your files -> chunker -> embedder -> local database -> query -> answer
```

Everything — indexing, embedding, and querying — runs locally through Ollama. No API calls, no cloud storage, no account.

## Use cases

- **Recovering forgotten fixes** — recall the config change, command, or fix for a bug you solved once and can't find again
- **Reconstructing context** — figure out what you were working on last week or last month across scattered files and terminal sessions
- **Searching by vague memory** — find something when you remember the shape of it ("the nginx config that fixed the 502s") but not the exact name or location
- **Working across projects without a shared notes system** — a single searchable memory layer over everything on your machine, regardless of which project or tool a file belongs to

## Install

**Requirements:** Rust, Ollama

```bash
# Pull the models funes needs
ollama pull nomic-embed-text
ollama pull llama3

# Install funes
cargo install funes
```

## Usage

```bash
funes start                    # Start the background daemon
funes add ~/notes              # Manually index a folder
funes watch ~/projects         # Watch a folder for changes
funes query "something you remember vaguely"
funes query "..." --llm        # Get a plain English answer instead of raw results
funes status                   # See what's indexed
funes forget "*.env"           # Exclude sensitive files
```

## Design philosophy

- **Local-first** — your data never leaves your machine
- **No accounts, no subscriptions** — install it and it's yours
- **Semantic, not keyword-based** — built to work with a vague memory, not an exact search term
- **Quiet by default** — indexes in the background without getting in the way

## Roadmap

### Shipped

- CLI skeleton
- Ollama embeddings
- SQLite / vector storage
- File watcher
- Shell history indexing
- Query with results
- LLM synthesis mode (`--llm`)

### Planned

- Packaging via `cargo install funes-memory`
- Homebrew packaging
- True background daemon process
- Documentation site

## License

MIT License

## Contributing

Contributions are welcome, particularly around the roadmap above. See `CONTRIBUTING.md` for details.