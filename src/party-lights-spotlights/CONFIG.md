# Party Lights Spotlights

Soft, top-mounted colored gradient beams and a gentle flash create a short party moment on stream.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!party-spotlights",
};
```

## Animation configuration

| Setting    | Default value                                                          | Description                                                                                                                  |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `beams`    | `9`                                                                    | Number of top-mounted moving spotlights.                                                                                     |
| `duration` | `7000`                                                                 | Total effect duration in milliseconds.                                                                                       |
| `delay`    | `90`                                                                   | Delay between beam creation in milliseconds.                                                                                 |
| `colors`   | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Beam palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`. |
