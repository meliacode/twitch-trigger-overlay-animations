# Gifts Rain

A colorful shower of animated gift boxes falls across the screen.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!gifts",
};
```

## Animation configuration

| Setting           | Default value                                                          | Description                                                                                                                      |
| ----------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `count`           | `200`                                                                  | Number of gifts released per trigger.                                                                                            |
| `minSize`         | `15`                                                                   | Smallest gift size in pixels.                                                                                                    |
| `maxSize`         | `40`                                                                   | Largest gift size in pixels.                                                                                                     |
| `speedMultiplier` | `1.2`                                                                  | Falling-speed multiplier. Use values above `1` for faster gifts and below `1` for slower gifts.                                  |
| `colors`          | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Gift-box palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`. |
