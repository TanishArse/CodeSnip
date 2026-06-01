# CodeSnip

CodeSnip is a lightweight, local-first code snippet manager built with React. It provides developers with a centralized library to store, organize, and instantly retrieve reusable code snippets, eliminating the need to dig through old repositories or browser bookmarks.

With a focus on speed and developer experience, CodeSnip operates entirely in the browser, leveraging client-side storage for zero-latency searching and editing without requiring a backend.

## Key Features

* **Syntax-Highlighted Editor:** Write and view code with clean, language-specific syntax highlighting powered by `react-syntax-highlighter`.
* **Instant Search & Filtering:** Filter your entire library in real-time by title, language, or custom tags.
* **Flexible Organization:** Categorize snippets by programming language and append searchable, custom tags for granular indexing.
* **Local-First Persistence:** All data is saved directly to `localStorage`, ensuring your snippets persist across browser refreshes without external database dependencies.
* **One-Click Copy:** Quickly copy code blocks straight to your clipboard for instant deployment into your IDE.

## Tech Stack

* **Frontend Framework:** React (built with Vite for fast HMR)
* **Styling:** Custom responsive CSS
* **Syntax Highlighting:** React Syntax Highlighter
* **Storage:** Web Storage API (`localStorage`)

## Live Demo

Explore the live application here: https://tanisharse.github.io/CodeSnip/



Bash
npm run build
