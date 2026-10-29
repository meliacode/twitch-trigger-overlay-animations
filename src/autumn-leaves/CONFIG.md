# Autumn Leaves

An autumn leaf shower carried by the wind across the screen on a diagonal path.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!autumn-leaves",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting    | Default value                                 | Description                                                                                               |
| ---------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `count`    | `150`                                         | Number of leaves released per trigger.                                                                    |
| `duration` | `8000`                                        | Base time in milliseconds for a leaf to cross the source. Each leaf varies slightly around this duration. |
| `colors`   | `#b84020, #d76522, #e59a2d, #9e3524, #c77a1d` | Leaf colours. Accepts one or more valid CSS colour values.                                                |

## ADVANCED_CONFIG

These values tune the leaf motion and scale. They are intentionally kept out
of streamer-facing configuration.

| Setting     | Default value | Effect on the animation                                        |
| ----------- | ------------- | -------------------------------------------------------------- |
| `spread`    | `1000`        | Maximum stagger delay in milliseconds before a leaf appears.   |
| `windAngle` | `78`          | Wind direction in degrees for the gently diagonal travel path. |
| `windDrift` | `120`         | Additional horizontal wind travel in pixels.                   |
| `sway`      | `32`          | Maximum side-to-side flutter amplitude in pixels.              |
| `minSize`   | `18`          | Minimum leaf width in pixels.                                  |
| `maxSize`   | `48`          | Maximum leaf width in pixels.                                  |
