# Spread Love Rainbow

A rainbow-colored heart burst spreads from a random position within the center of the screen. Each trigger adds another burst to the existing animation.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!spreadlove",
};
```

## Animation configuration

| Setting           | Default value                                                          | Description                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`           | `200`                                                                  | Number of hearts created per trigger.                                                                                                             |
| `duration`        | `5000`                                                                 | Maximum animation duration in milliseconds.                                                                                                       |
| `minSize`         | `10`                                                                   | Smallest heart size in pixels.                                                                                                                    |
| `maxSize`         | `40`                                                                   | Largest heart size in pixels.                                                                                                                     |
| `speedMultiplier` | `3`                                                                    | Movement-speed multiplier. Use values above `1` for faster hearts and below `1` for slower hearts.                                                |
| `originSpread`    | `0.3`                                                                  | Width and height of the randomized center zone, expressed as a fraction of the canvas. `0.3` limits burst origins to the middle 30% of each axis. |
| `colors`          | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Heart palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`.                     |
