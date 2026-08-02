# Schema / JSON-LD Generator

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21757593.svg)](https://doi.org/10.5281/zenodo.21757593)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Generate valid **Organization**, **Product**, and **FAQPage** JSON-LD — entirely in your browser.

A free, open-source tool from **[Clear Cited](https://clearcited.com)** — AI search visibility (AEO/GEO) for B2B SaaS and developer tools.

## What it does

Structured data (JSON-LD) helps search and AI engines understand your site. This tool builds valid `schema.org` JSON-LD for the three types that matter most to SaaS and dev-tool sites — Organization, Product/SoftwareApplication, and FAQPage — with light validation, then lets you copy the ready-to-paste `<script type="application/ld+json">` block. Fully client-side; no data leaves your browser.

## Usage

It's a single static page — no build step, no dependencies, no server.

- **Online:** use the hosted version at <https://clearcited.com/schema-generator/>.
- **Locally:** clone this repo and open `index.html` in a browser (or serve the folder with any static server, e.g. `python -m http.server`).

All logic is in `app.js` and runs entirely client-side. Nothing you type is sent anywhere.

## What the output looks like

A ready-to-paste block for your page `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Acme Deploy",
  "url": "https://acmedeploy.com",
  "logo": "https://acmedeploy.com/logo.png",
  "description": "Zero-config deployment for backend teams shipping containers.",
  "sameAs": ["https://www.linkedin.com/company/acmedeploy"]
}
</script>
```

Want the same templates as files you can validate in CI? See
[schema-for-ai](https://github.com/Clear-Cited/schema-for-ai).

## Why Clear Cited built this

When buyers ask ChatGPT, Perplexity, Claude, Gemini, or Google AI for the best tool in a category, you're either named — or a competitor is. Clean structured data and crawler-friendly signals are part of being citable. We build these free tools because the basics should be free.

→ **[Get a free AI-visibility teardown](https://clearcited.com/free-teardown/)** — send your domain and a couple of competitors, get a short video + one-pager showing where AI sends buyers in your category.

→ See the **[AI Visibility Index](https://clearcited.com/ai-visibility-index/)** — our public leaderboards of which products AI engines recommend.

## Related tools

Part of a set of five, all MIT-licensed and each archived on Zenodo with a DOI.
Find what is missing, fix it, then measure whether it moved.

| Tool | What it does |
|---|---|
| [`aeo-audit-lite`](https://github.com/Clear-Cited/aeo-audit-lite) | measure your share of model against competitors, with a confidence interval |
| [`citation-ready`](https://github.com/Clear-Cited/citation-ready) | check whether a page carries the signals cited pages tend to carry |
| [`schema-for-ai`](https://github.com/Clear-Cited/schema-for-ai) | JSON-LD templates tuned for AI extraction, plus a validator |
| **schema-generator** | build Organization / Product / FAQPage JSON-LD in your browser — *you are here* |
| [`llms-txt-generator`](https://github.com/Clear-Cited/llms-txt-generator) | generate an llms.txt for your site, in your browser |

## Cite this

Every release is archived on Zenodo with a DOI, and the repo carries a
`CITATION.cff` so GitHub’s **Cite this repository** box works.

| | DOI |
|---|---|
| **Cite the software** (always resolves to the latest version) | [10.5281/zenodo.21757593](https://doi.org/10.5281/zenodo.21757593) |
| **Cite this exact release** (v0.1.0) | [10.5281/zenodo.21757594](https://doi.org/10.5281/zenodo.21757594) |

## Mirror

Mirrored to Codeberg at <https://codeberg.org/clear-cited/schema-generator>, tags
included, so the project does not depend on any single host.

## License

MIT © Clear Cited. See [LICENSE](LICENSE).
