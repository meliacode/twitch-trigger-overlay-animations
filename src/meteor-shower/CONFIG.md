# Meteor Shower

A colorful shower of glowing meteors streaks diagonally across the transparent overlay.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!meteor-shower",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting           | Default value                                                                    | Description                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `count`           | `18`                                                                             | Number of meteors created per trigger.                                                                                            |
| `launchDelay`     | `240`                                                                            | Delay between meteor launches in milliseconds.                                                                                    |
| `speedMultiplier` | `1`                                                                              | Meteor speed multiplier. Use values above `1` for faster meteors and values below `1` for slower meteors.                         |
| `trailLength`     | `220`                                                                            | Approximate visible trail length in pixels.                                                                                       |
| `arcHeight`       | `260`                                                                            | Height of the left-to-right semicircular path in pixels. Individual meteors vary slightly around this value.                      |
| `meteorSize`      | `1.5`                                                                            | Base radius of each meteor head in pixels.                                                                                        |
| `colors`          | `white, red, pink, purple, blueDark, blueLight, blueDark, green, yellow, orange` | Meteor palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, or `orange`. |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
