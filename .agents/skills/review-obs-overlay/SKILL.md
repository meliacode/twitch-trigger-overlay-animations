---
name: review-obs-overlay
description: Review an existing standalone OBS/Twitch overlay for runtime, documentation, and repository-contract defects. Use for audit, code review, or release-readiness requests involving src/<animation-id>, without modifying files unless the user explicitly asks for fixes.
---

# Review an OBS overlay

Read `AGENTS.md` and `.codex/references/overlay-contract.md`. Review the target
source, its `CONFIG.md`, and its matching README/demo entries.

Check:

1. standalone HTML, transparent pointer-inert stage, and responsive canvas or
   DOM behaviour;
2. repeated triggering, cleanup of timers/nodes/particles, and preview support;
3. safe default Twitch configuration, command uniqueness, cooldown handling,
   and absence of credentials;
4. exact alignment between editable `CONFIG` values and `CONFIG.md` defaults;
5. correct README and alphabetical demo registration.
6. retained `CONFIGURATION`, `CONSTANTS`, `ANIMATION`, and `CALLBACK (COMFYJS)`
   dividers, plus concise purpose comments above named functions.

Run `npm run check` when it is relevant. Return only actionable findings,
ordered by severity and with precise file references. Do not modify files in a
review-only request; say clearly when no findings exist.
