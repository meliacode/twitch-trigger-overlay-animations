# Create an animation

Use this guide to add a standalone OBS Browser-source animation under `src/` and expose it in the local demo.

## Required files and names

Choose a lowercase, kebab-case identifier, for example `star-shower`. The folder and HTML filename must be identical:

```text
src/
  star-shower/
    star-shower.html
    CONFIG.md
```

Rules:

- Use only lowercase letters, numbers, and hyphens in the identifier.
- Do not use `index.html` for an animation source.
- Keep exactly one source HTML file and one `CONFIG.md` in each animation folder.
- Use the identifier in URLs and paths, and title case only for visible labels and document titles.

## HTML source requirements

The source must be a complete, self-contained HTML document. It may load a small external library when needed, but it must not depend on project build tooling, shared JavaScript, or assets outside its own source file.

Use a transparent full-page stage and prevent it from receiving pointer input:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Star Shower</title>
    <style>
      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: transparent;
      }

      #shower-canvas {
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/comfy.js@latest/dist/comfy.min.js"></script>
  </head>
  <body>
    <canvas id="shower-canvas"></canvas>
    <script>
      // Animation code.
    </script>
  </body>
</html>
```

Use a `canvas` or DOM elements, whichever suits the effect. Make the effect responsive to the Browser source size; canvas sources should resize their backing store and account for `devicePixelRatio`. Remove generated elements and finished particles so repeated triggers do not leak memory. A second trigger should add to the current effect unless replacing it is an intentional part of the design.

## Configuration and Twitch trigger

Place `CONFIG` and `TWITCH` together near the start of the source script, before runtime state and animation functions:

```js
const CONFIG = {
  count: 80,
  duration: 4500,
  colors: ["white", "blueLight"],
};

const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!star-shower",
};
```

`CONFIG` contains every setting a user is expected to edit: counts, dimensions, durations, delays, speed multipliers, and colors. Use clear camelCase property names and document the unit in `CONFIG.md` when it is not obvious. Keep the default configuration valid; color arrays must not be empty.

`TWITCH` is required for chat-triggered sources:

- Start with `enabled: false` and `channel: "your_twitch_channel"`.
- Give the source a unique `!` command. Prefer one derived from the folder name, unless a short project command is clearer.
- Never commit a channel login, OAuth token, password, or other secret.
- Include one-time local preview support with `?preview=1`.

Use this callback pattern, replacing `play` with the animation's trigger function if needed:

```js
if (location.search.includes("preview")) triggerShower();

if (TWITCH.enabled) {
  ComfyJS.onCommand = (_, command) => {
    if (`!${command}`.toLowerCase() === TWITCH.command.toLowerCase())
      triggerShower();
  };
  ComfyJS.Init(TWITCH.channel);
}
```

## `CONFIG.md`

Create `src/star-shower/CONFIG.md` beside the source. Its title and Twitch snippet must match the animation exactly. List every `CONFIG` property and its actual default value.

````md
# Star Shower

A short description of the effect.

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
| `duration` | `4500`             | Effect duration in milliseconds.     |
| `colors`   | `white, blueLight` | Available star colors.               |
````

If the source uses named colors, document every supported name. If it accepts CSS colors directly, say so in the setting description.

## Add the animation to the demo

The demo is manually maintained in `dist/index.html`. Add an option to the `<select id="animation">`, using a path relative to `dist/index.html` and a title-case label:

```html
<option value="../src/star-shower/star-shower.html">Star Shower</option>
```

Keep the list alphabetical by visible label. Do not change the iframe source or the preview script; the **Play animation** button adds the `preview` query parameter for you.

## Final checks

1. Open `dist/index.html`, select the new animation, and use **Play animation**.
2. Confirm it overlays transparently, resizes correctly, and can trigger repeatedly.
3. Check that the Twitch command in `CONFIG.md` and the source are identical.
4. Confirm every `CONFIG` property is documented with the correct default.
5. Format the Markdown, source, and demo:

   ```bash
   npm run format
   ```
