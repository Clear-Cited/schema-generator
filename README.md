# Schema / JSON-LD Generator

Generate valid **Organization**, **Product**, and **FAQPage** JSON-LD — entirely in your browser.

A free, open-source tool from **[Clear Cited](https://clearcited.com)** — AI search visibility (AEO/GEO) for B2B SaaS and developer tools.

## What it does

Structured data (JSON-LD) helps search and AI engines understand your site. This tool builds valid `schema.org` JSON-LD for the three types that matter most to SaaS and dev-tool sites — Organization, Product/SoftwareApplication, and FAQPage — with light validation, then lets you copy the ready-to-paste `<script type="application/ld+json">` block. Fully client-side; no data leaves your browser.

## Usage

It's a single static page — no build step, no dependencies, no server.

- **Online:** use the hosted version at <https://clearcited.com/schema-generator/>.
- **Locally:** clone this repo and open `index.html` in a browser (or serve the folder with any static server, e.g. `python -m http.server`).

All logic is in `app.js` and runs entirely client-side. Nothing you type is sent anywhere.

## Why Clear Cited built this

When buyers ask ChatGPT, Perplexity, Claude, Gemini, or Google AI for the best tool in a category, you're either named — or a competitor is. Clean structured data and crawler-friendly signals are part of being citable. We build these free tools because the basics should be free.

→ **[Get a free AI-visibility teardown](https://clearcited.com/free-teardown/)** — send your domain and a couple of competitors, get a short video + one-pager showing where AI sends buyers in your category.

→ See the **[AI Visibility Index](https://clearcited.com/ai-visibility-index/)** — our public leaderboards of which products AI engines recommend.

## License

MIT © Clear Cited. See [LICENSE](LICENSE).
