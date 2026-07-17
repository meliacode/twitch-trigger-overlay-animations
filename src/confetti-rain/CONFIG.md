# Confetti Rain

A burst of colorful confetti falls over the stream.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!confetti-rain",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting    | Default value                                                          | Description                                                                                                                      |
| ---------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `count`    | `180`                                                                  | Number of confetti pieces per trigger.                                                                                           |
| `duration` | `4200`                                                                 | Fall duration in milliseconds.                                                                                                   |
| `delay`    | `13`                                                                   | Time between pieces in milliseconds.                                                                                             |
| `colors`   | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Confetti palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`. |
