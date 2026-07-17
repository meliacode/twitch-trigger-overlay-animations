# Party Lights Spotlights

Soft, top-mounted colored gradient beams and a gentle flash create a short party moment on stream.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!party-spotlights",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting    | Default value                                                          | Description                                                                                                                  |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `beams`    | `9`                                                                    | Number of top-mounted moving spotlights.                                                                                     |
| `duration` | `7000`                                                                 | Total effect duration in milliseconds.                                                                                       |
| `colors`   | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Beam palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`. |
