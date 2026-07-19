# OBS overlay contract

## Source boundaries

An animation is a complete HTML document at
`src/<animation-id>/<animation-id>.html`. It may use inline CSS and JavaScript
and a small CDN-hosted library. It must not require a bundler, import a local
module, or rely on shared project assets.

The browser source is transparent: `html` and `body` fill the viewport, hide
overflow, and have `background: transparent`. Generated visual elements must
not accept pointer input.

## Runtime behavior

- Place editable `CONFIG` and `TWITCH` objects before runtime state.
- Start `TWITCH.enabled` as `false`, use `your_twitch_channel`, and never
  commit a token, password, OAuth value, or actual personal channel default.
- Commands start with `!` and are unique across `src/`.
- Support exactly one local preview by recognising the `preview` query
  parameter.
- Resize canvas backing stores for the viewport and `devicePixelRatio` when a
  canvas is used.
- Remove finished DOM nodes, timers, and event listeners. A second trigger
  must add safely to the effect unless replacement is intentional and clear.

## Script organisation and comments

For every newly created or materially changed overlay script, retain these
section dividers in this order. Keep the divider comments even when a section
is short; they are the repository's navigation aid.

```js
// ==========================================
// 1. CONFIGURATION
// ==========================================

// ==========================================
// 2. CONSTANTS
// ==========================================

// ==========================================
// 3. ANIMATION
// ==========================================

// ==========================================
// 3. CALLBACK (COMFYJS)
// ==========================================
```

- Put `CONFIG` and `TWITCH` in **CONFIGURATION**.
- Put DOM references, canvas/context initialisation, state, and resize setup in
  **CONSTANTS**.
- Put helper functions first in **ANIMATION**, followed by the main trigger and
  rendering or scheduling functions.
- Put preview handling, `ComfyJS.onCommand`, and `ComfyJS.Init` in
  **CALLBACK (COMFYJS)**.
- Add one short `//` comment immediately above every named function or named
  function expression. State its purpose, not a restatement of its name.
  Trivial inline callbacks such as an event listener callback do not need their
  own comment.

A review-only task must report missing dividers or function comments; it must
not add them unless the user asks for fixes.

## Documentation contract

Every source has a sibling `CONFIG.md` containing:

1. the animation title and a short description;
2. the exact default `TWITCH` snippet;
3. every editable `CONFIG` setting, its actual default value, unit when useful,
   and accepted colour names or CSS-colour support.

When adding an animation, add its source path and command to the README table
and its path to `dist/index.html`. Keep the demo options alphabetical by their
visible label.
