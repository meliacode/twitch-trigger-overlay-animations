# Cyber Glitch Screen

A rapid cyberpunk screen-distortion burst with chromatic RGB slices, scanlines, and a corrupted-signal message.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!cyber-glitch",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between triggers. `userCooldown` limits each user to one trigger every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting          | Default value           | Description                                                 |
| ---------------- | ----------------------- | ----------------------------------------------------------- |
| `duration`       | `1300`                  | Total burst duration in milliseconds.                       |
| `sliceCount`     | `19`                    | Number of horizontal distortion slices created per trigger. |
| `minSliceHeight` | `3`                     | Minimum slice height in pixels.                             |
| `maxSliceHeight` | `42`                    | Maximum slice height in pixels.                             |
| `cyanColor`      | `"#00f6ff"`             | Cyan RGB channel and glow colour. Accepts any CSS colour.   |
| `pinkColor`      | `"#ff2bd6"`             | Pink RGB channel and glow colour. Accepts any CSS colour.   |
| `flashColor`     | `"#e9fbff"`             | Initial screen-flash colour. Accepts any CSS colour.        |
| `message`        | `"SIGNAL // CORRUPTED"` | Brief central cyberbug message.                             |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
