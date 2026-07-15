# Swarm of Butterflies

A colorful swarm of butterflies flies across the screen.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!butterflies",
};
```

## Animation configuration

| Setting    | Default value                                                          | Description                                                                                                                              |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `count`    | `200`                                                                  | Number of butterflies released per trigger.                                                                                              |
| `maxDelay` | `5`                                                                    | Maximum stagger delay before a butterfly begins to fly, in seconds.                                                                      |
| `colors`   | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Named wing-color palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`. |
