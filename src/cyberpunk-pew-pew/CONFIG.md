# Cyberpunk Pew Pew

A fast arcade-style cyberpunk volley: neon laser bolts fly in from both sides, then burst into glowing impact rings and pixel sparks.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!pewpew",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting        | Default value               | Description                                                                  |
| -------------- | --------------------------- | ---------------------------------------------------------------------------- |
| `boltCount`    | `7`                         | Laser bolts created by each trigger.                                         |
| `duration`     | `1800`                      | Minimum effect lifetime in milliseconds; impact sparks may continue briefly. |
| `boltSpeed`    | `1.15`                      | Bolt speed multiplier. Values above `1` travel faster.                       |
| `boltWidth`    | `4`                         | Width of each laser bolt in pixels.                                          |
| `colors`       | `#00f6ff, #ff2bd6, #b7ff00` | Cycling bolt colors. Use any non-empty list of CSS color values.             |
| `sparkCount`   | `13`                        | Pixel sparks released at each impact.                                        |
| `impactRadius` | `62`                        | Maximum radius of each glowing impact ring in pixels.                        |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
