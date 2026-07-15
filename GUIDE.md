# Animation Authoring Guide

Use this guide when adding a new standalone animation to this OBS browser-source library. Follow every convention below so the new animation remains compatible with OBS, Twitch chat triggers, the demo, and the documentation.

## Core principles

- Each animation is a self-contained HTML browser source for OBS.
- The page background must be transparent.
- There is no build step and no shared JavaScript dependency between animations.
- Twitch chat support uses ComfyJS and is disabled by default.
- All documentation and in-file comments must be written in English.
- Effects should be responsive to the OBS browser-source size and must clean up particles or elements when they finish.

## Folder and file naming

1. Choose a lowercase, kebab-case animation identifier, such as `star-shower`.
2. Create a folder using that exact identifier: `src/star-shower/`.
3. Create one HTML source whose filename exactly matches the folder name: `src/star-shower/star-shower.html`.
4. Create one configuration guide: `src/star-shower/CONFIG.md`.
5. Do not use `index.html` for animation sources.
6. Keep one animation source HTML file per animation folder.

## HTML document structure

The source file must be a complete HTML document. Its `<head>` must use this exact order:

1. `meta` tags
2. `title`
3. `style`
4. External `script` tags

The title is the folder name converted to title case. For example, `star-shower.html` uses:

```html
<title>Star Shower</title>
```

Use this outline:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Star Shower</title>
    <style>
      /* Transparent OBS-safe styles. */
    </style>
    <script src="https://cdn.jsdelivr.net/npm/comfy.js@latest/dist/comfy.min.js"></script>
  </head>
  <body>
    <canvas id="stage"></canvas>
    <script>
      // Script sections go here.
    </script>
  </body>
</html>
```

Use either a `canvas` or a `div` stage in the body. It must cover the browser source and must not block mouse input:

```css
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
}
```

## CSS formatting

Keep style blocks readable and separate their concerns with blank lines. Use these section labels whenever the corresponding rules exist:

```css
    <style>
      /* Transparent background is required for OBS overlays */

      /*  --- STYLE ELEMENTS ---  */

      html,
      body {
        /* Base source layout. */
      }

      /*  --- EFFECT ELEMENTS  --- */

      .effect {
        /* Effect appearance. */
      }

      /*  --- ANIMATIONS KEYFRAMES --- */

      @keyframes effect-motion {
        /* Motion frames. */
      }
    </style>
```

Do not add an empty effect or keyframes section when the animation does not need it.

## Required animation script format

Every animation script must contain the following four sections, in this exact order and with the exact divider formatting. The two sections numbered `3` are intentional and match the project standard.

```js
// ==========================================
// 1. CONFIGURATION
// ==========================================

const CONFIG = {
  // Animation values that a user may safely edit.
};
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!star-shower",
};

// ==========================================
// 2. CONSTANTS
// ==========================================

// DOM references, canvas contexts, immutable helpers, and runtime state.

// ==========================================
// 3. ANIMATION
// ==========================================

// Animation functions and rendering loop.

// ==========================================
// 3. CALLBACK (COMFYJS)
// ==========================================

// Trigger the animation from preview mode or the configured Twitch command.
if (location.search.includes("preview")) play();
if (TWITCH.enabled) {
  ComfyJS.onCommand = (_, command) => {
    if (`!${command}`.toLowerCase() === TWITCH.command.toLowerCase()) play();
  };
  ComfyJS.Init(TWITCH.channel);
}
```

### Configuration section

- `CONFIG` contains only user-adjustable animation settings: counts, durations, delays, colors, size ranges, velocities, and similar options.
- Prefer clear unit-bearing names such as `duration`, `launchDelay`, or `speedMultiplier`.
- For a configurable speed multiplier, use `1` as normal speed; values above `1` are faster and values below `1` are slower. Document that behavior in `CONFIG.md`.
- `TWITCH` is also part of **Configuration**. Keep it directly after `CONFIG`.
- Start with `enabled: false` and `channel: "your_twitch_channel"`.
- Give each animation a unique command derived from its folder name, such as `!star-shower`.
- Never hardcode a real Twitch channel name, login, OAuth token, or secret.

### Color configuration

Animations with configurable colors use this shared named palette:

```js
const COLOR_OPTIONS = {
  white: "#ffffff",
  red: "#ff3b30",
  pink: "#ff4081",
  purple: "#a855f7",
  blueDark: "#1d4ed8",
  blueLight: "#00d4ff",
  green: "#44e09c",
  yellow: "#ffeb3b",
  orange: "#ff9800",
};
```

- Use `colors` as an array of one or more palette names in `CONFIG`.
- Resolve a color at render time with `COLOR_OPTIONS[color] ?? color` when the effect can safely accept custom CSS colors as well.
- Effects based on named CSS classes, such as butterfly wing palettes, must implement every documented palette name.
- Keep the color array non-empty. Cycle through it with `index % CONFIG.colors.length` when creating repeated elements or particles.
- Document every supported palette name in the matching `CONFIG.md`.

### Constants section

Use this section for DOM references, canvas contexts, immutable helpers, state arrays, and event listeners. Do not place `CONFIG` or `TWITCH` here.

### Animation section

- Name the main trigger function clearly, such as `play()`, `launchStars()`, or `startStarShower()`.
- The function must be safe to call from both preview mode and Twitch chat.
- A rapid second trigger must not cancel the first effect unless replacement is the explicit visual intent. Particle effects should append their new particles to existing state; timed DOM effects may deliberately replace only their own previous elements.
- Remove generated elements and particles after they finish to avoid memory growth.
- Handle resizing when using a canvas.

### Canvas motion and timing

For canvas effects, keep one render loop and make animation updates independent of the display refresh rate. Use the `requestAnimationFrame` timestamp, convert it to seconds, and cap unusually large gaps (for example, after a background tab resumes):

```js
let lastFrameTime;

function animate(now) {
  const delta = lastFrameTime
    ? Math.min((now - lastFrameTime) / 1000, 0.05)
    : 0;
  lastFrameTime = now;

  // update each particle with delta, then draw it
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

- Store motion values in pixels per second and multiply updates by `delta`.
- Resize canvas elements on `resize`. For sharp rendering on high-DPI sources, size the backing canvas with `devicePixelRatio` and reset the context transform.
- Clear and redraw the full canvas every frame; retain active particles until their own lifetime or fade-out completes.

### ComfyJS callback section

Use the callback pattern shown above. It provides two ways to trigger the animation:

- Add `?preview=1` to the source URL for a one-time local preview.
- Set `TWITCH.enabled` to `true`, then use the configured chat command.

## CONFIG.md structure

Every animation folder must include a `CONFIG.md` with this exact section order:

````md
# Star Shower

A short, clear description of the visual effect.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!star-shower",
};
```

## Animation configuration

| Setting    | Default value      | Description                          |
| ---------- | ------------------ | ------------------------------------ |
| `count`    | `80`               | Number of stars created per trigger. |
| `duration` | `4500`             | Animation duration in milliseconds.  |
| `colors`   | `#ffd54a, #ffffff` | Star color palette.                  |
````

Rules:

- The title must be the animation name in title case.
- Use one short English description below the title.
- The Twitch snippet must reproduce the exact command and field names used in the HTML file.
- The table must include every property in `CONFIG`.
- The **Default value** column must match the actual values in the HTML file.
- Update the description when an effect is additive, uses a randomized origin, or has another behavior that affects how repeated triggers look.

## Demo update

Add the animation to `dist/index.html`:

1. Add an `<option>` inside `#animation`.
2. Its `value` must point to `../src/star-shower/star-shower.html`.
3. Its label must use the title-case animation name: `Star Shower`.

Example:

```html
<option value="../src/star-shower/star-shower.html">Star Shower</option>
```

Do not change the demo iframe logic unless the new animation requires a genuinely different preview mechanism.

## README update

Add one row to the **Included animations** table in `README.md`:

```md
| Star Shower | `!star-shower` | `src/star-shower/star-shower.html` |
```

Keep the table ordered consistently with the demo selector.

## Final checklist

- [ ] The folder name and HTML filename match in lowercase kebab-case.
- [ ] The folder contains exactly one animation HTML file and one `CONFIG.md`.
- [ ] The HTML head order is meta, title, styles, scripts.
- [ ] The title is the filename in title case.
- [ ] The body uses a transparent, full-size animation stage.
- [ ] The script has all four required section dividers.
- [ ] `CONFIG` and `TWITCH` are in the Configuration section.
- [ ] The ComfyJS callback uses `TWITCH.enabled`, `TWITCH.command`, and `ComfyJS.Init(TWITCH.channel)`.
- [ ] `CONFIG.md` documents every setting with its exact default value.
- [ ] Every documented `TWITCH.command` matches the HTML source and the README row.
- [ ] Configured color names are in the shared palette and have a rendering implementation.
- [ ] Repeated triggers have the intended additive or replacement behavior.
- [ ] The animation is included in both `dist/index.html` and `README.md`.
- [ ] Run `npm run format`, validate inline JavaScript syntax, and run `git diff --check` before delivering the animation.
