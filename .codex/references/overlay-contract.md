# OBS overlay contract

## Source boundaries

An animation is a complete HTML document at
`src/<animation-id>/<animation-id>.html`. It may use inline CSS and JavaScript
and a small CDN-hosted library. It must not require a bundler, import a local
module, or rely on shared project assets.

The browser source is transparent: `html` and `body` fill the viewport, hide
overflow, and have `background: transparent`. Generated visual elements must
not accept pointer input.

For readability, leave one blank line between `<title>` and `<style>`, between
`</style>` and external `<script>` tags, and between a canvas element and its
inline script.

## Canvas conventions

An overlay that uses a canvas must name it `<animation-id>-canvas`, where
`<animation-id>` is the source folder name. For example,
`src/starry-sky/starry-sky.html` uses `id="starry-sky-canvas"`.

Use this exact canvas stylesheet, including its comments:

```html
<style>
  /* Transparent background is required for OBS overlays */
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;
    font-family: sans-serif;
  }

  /* Canvas styling for OBS overlays */
  canvas {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
```

Use `canvas`, `context`, `width`, and `height` as the canvas runtime names.
Canvas overlays have an editable overall `CONFIG.duration` of `8000`
milliseconds unless a documented animation requirement needs a different
default. Resize the backing store with this canonical setup:

```js
let width = 0;
let height = 0;

// Resize the canvas backing store for crisp rendering.
function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;

  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
```

## Runtime behavior

- Place editable `CONFIG`, non-editable `LOCAL_CONFIG`, and `TWITCH` objects
  before runtime state.
- `CONFIG` contains streamer-facing controls only: effect duration, on/off
  options, item counts, visible text, and colours. Keep its values practical
  and document every setting in `CONFIG.md`.
- `LOCAL_CONFIG` contains implementation tuning that users normally should not
  edit, such as speeds, size ranges, sway, physics coefficients, delays, and
  rendering thresholds. Keep it in the **CONFIGURATION** section, use it from
  the script instead of duplicating literals, and document its defaults in a
  separate `LOCAL_CONFIG` subsection of `CONFIG.md`.
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

- Put `CONFIG`, `LOCAL_CONFIG`, and `TWITCH` in **CONFIGURATION**, in that
  order, with a blank line between each object.
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
- Leave one blank line after each section divider, after each configuration
  object, and between named functions, classes, and other top-level script
  declarations. Keep related constants together before functions, and group
  helper functions before trigger, render, and scheduling functions. Do not
  compress independent statements onto a single line when separate lines make
  the animation easier to scan.

A review-only task must report missing dividers or function comments; it must
not add them unless the user asks for fixes.

## Documentation contract

Every source has a sibling `CONFIG.md` containing:

1. the animation title and a short description;
2. the exact default `TWITCH` snippet;
3. every editable `CONFIG` setting, its actual default value, unit when useful,
   and accepted colour names or CSS-colour support.
4. a `LOCAL_CONFIG` subsection listing each non-editable tuning value, its
   actual default, and its effect on the animation.

When adding an animation, add its source path and command to the README table
and its path to `dist/index.html`. Keep the demo options alphabetical by their
visible label.
