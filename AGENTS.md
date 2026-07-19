# Agent guide

## Purpose

This repository ships transparent, standalone HTML animations for OBS Browser
sources. Each animation can be previewed locally and optionally triggered by a
Twitch chat command.

## Repository map

- `src/<animation-id>/<animation-id>.html`: standalone animation source.
- `src/<animation-id>/CONFIG.md`: configuration reference for that source.
- `dist/index.html`: manually maintained local animation picker.
- `GUIDE.md`: OBS setup guide; `INSTRUCTION.md`: contribution guide.

## Animation contract

Read `.codex/references/overlay-contract.md` before creating or materially
changing an animation. In particular:

- Keep each source self-contained; do not introduce build tooling, shared
  runtime code, or project-relative assets into an animation.
- Keep `CONFIG` and `TWITCH` near the start of its script. Do not commit
  credentials, tokens, or a real channel as a default.
- Preserve a transparent, pointer-inert stage and one-time `?preview=1`
  support.
- Organise every created or materially changed source script with the preserved
  `CONFIGURATION`, `CONSTANTS`, `ANIMATION`, and `CALLBACK (COMFYJS)` comment
  dividers defined in the overlay contract. Add a concise purpose comment
  immediately above every named function.
- Make repeated triggers safe: clean up finished DOM nodes or particles and do
  not create duplicate listeners.
- Keep the matching `CONFIG.md`, the README table, and the alphabetical demo
  picker in sync when adding or renaming an animation.

## Working rules

- Use lowercase kebab-case for animation identifiers and keep folder and HTML
  file names identical.
- Prefer a small CDN dependency over adding a build step. Pin a library version
  when a stable version is available.
- Preserve unrelated working-tree changes.
- Keep user-facing project documentation in English, matching the existing
  repository.

## Verification

Run the relevant checks before handing off a change:

```bash
npm run check
```

For visual changes, also serve the repository with `npm start`, open `dist/`,
and verify a fresh preview plus repeated triggering at the intended OBS size.
