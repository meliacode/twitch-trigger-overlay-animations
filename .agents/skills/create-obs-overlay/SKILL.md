---
name: create-obs-overlay
description: Create a new standalone transparent HTML animation for OBS, optionally triggered by Twitch chat. Use when adding an animation under src/, including its CONFIG.md documentation and demo/README registration; do not use for a review-only request or a small change to an existing animation.
---

# Create an OBS overlay

Read `AGENTS.md`, `.codex/references/overlay-contract.md`, and
`INSTRUCTION.md` before editing.

1. Choose a lowercase kebab-case ID. Create exactly
   `src/<id>/<id>.html` and `src/<id>/CONFIG.md`.
2. Build a complete, standalone HTML document with a transparent, pointer-inert
   stage. Keep editable `CONFIG` and `TWITCH` objects near the script start.
3. Start Twitch disabled with `your_twitch_channel`; use a unique `!` command.
   Add `?preview=1` support and make repeated triggers safe.
4. Preserve the `CONFIGURATION`, `CONSTANTS`, `ANIMATION`, and `CALLBACK (COMFYJS)`
   section dividers from the overlay contract. Add a concise purpose
   comment immediately above every named function.
5. Document every editable setting with its actual default. Add the source to
   the README table and the alphabetically ordered demo picker.
6. Run `npm run check`. For visual work, also use `npm start` and inspect the
   demo at the intended source size.

Do not add a bundler, shared runtime dependency, local asset dependency, or
secret. Report the files created, the command, and any visual check requiring
manual confirmation.
