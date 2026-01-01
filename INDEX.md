# ATM10 Modular Base — Docs + Schematics Bundle

This bundle contains:
- **GitHub Pages–ready documentation** (Docsify) under `docs-site/`
- **Minecraft Structure NBT schematics** (Litematica + cubical.xyz) under `schematics/`

## Quick Start
1. Read **Build Order**: `docs-site/09-build-order.md`
2. Load schematics in-game from `schematics/`
3. Replace color-key blocks with your ATM10 material palettes from the docs

## GitHub Pages
See `GITHUB_PAGES.md` to publish this repo via GitHub Pages (recommended folder: `/docs-site`).

## Schematics (Litematica / cubical.xyz)
All schematics are `.nbt` structure files.

### Files
- `schematics/atrium_with_interiors.nbt` — Atrium shell + interior markers
- `schematics/core_module_example.nbt` — Core module shell + interior markers
- `schematics/power_module_example.nbt` — Power module shell + interior markers
- `schematics/tech_module_example.nbt` — Tech module shell + interior markers
- `schematics/farm_module_example.nbt` — Farm module shell + interior markers
- `schematics/magic_module_example.nbt` — Magic module shell + interior markers
- `schematics/utilities_basement.nbt` — Utility basement plate
- `schematics/dark_magic_basement.nbt` — Dark magic/ritual basement plate

### Color Legend (Concrete Blocks)
- Light Gray: Atrium
- Gray: Core
- Orange: Power
- Cyan: Tech
- Green: Farm
- Purple: Magic
- Black: Utilities basement
- Magenta: Dark magic basement
- White: Interior focal markers
- Glass: Windows/voids

## Docs ↔ Schematics Map
- Atrium docs: `docs-site/03-central-atrium.md` → `schematics/atrium_with_interiors.nbt`
- Tunnels & transport: `docs-site/04-tunnels-and-transport.md` → (tile using tunnel standard; schematics represent connectors)
- Modules overview: `docs-site/05-modules/*` → corresponding `*_module_example.nbt`
- Vertical expansion: `docs-site/06-vertical-expansion.md` → stack modules every 8 blocks
- Basement expansion: `docs-site/07-basement-expansion.md` → `utilities_basement.nbt`, `dark_magic_basement.nbt`
- Chunk alignment & loaders: `docs-site/02-chunk-alignment-and-loaders.md`

## Notes
- The schematics intentionally use **vanilla blocks** for broad compatibility.
- After placement, swap blocks to ATM10 materials per module palettes.
