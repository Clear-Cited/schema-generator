# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html), and
the format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Every release is archived on Zenodo. The **concept DOI**
[10.5281/zenodo.21757593](https://doi.org/10.5281/zenodo.21757593) always resolves to the latest
version; each release below also has its own version DOI.

## [0.1.0] - 2026-08-02

First public release.

### Added

- A single static page (`index.html` + `app.js`) that builds valid Organization,
  Product/SoftwareApplication and FAQPage JSON-LD from a short form.
- Light validation and a ready-to-paste `<script type="application/ld+json">`
  block. Everything runs client-side — no build step, no dependencies, no server,
  and nothing typed into it leaves the browser.
- `CITATION.cff` and `.zenodo.json`, so the repository is citable and archives
  automatically on release.

### Notes

- Version DOI: [10.5281/zenodo.21757594](https://doi.org/10.5281/zenodo.21757594)
- Mirrored to [Codeberg](https://codeberg.org/clear-cited/schema-generator), tags included.

[0.1.0]: https://github.com/Clear-Cited/schema-generator/releases/tag/v0.1.0
