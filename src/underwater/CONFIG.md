# Underwater

Places the configured portion of the transparent overlay underwater, with a moving surface and rising bubbles.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!underwater",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting                | Default value               | Description                                                                                                                                  |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `effectDuration`       | `8000`                      | Total time the effect remains fully visible, in milliseconds. The effect ends immediately afterwards.                                        |
| `waterLevel`           | `20`                        | Waterline position, measured from the top of the screen as a percentage. `0` fills the whole screen; `100` puts the waterline at the bottom. |
| `waterColorTop`        | `"rgba(44, 164, 215, 0.2)"` | Water colour at the surface. Accepts any valid CSS colour.                                                                                   |
| `waterColorBottom`     | `"rgba(22, 94, 184, 1)"`    | Water colour at the bottom of the screen. Accepts any valid CSS colour.                                                                      |
| `surfaceWaveAmplitude` | `5`                         | Height of the surface movement, in pixels. Use `0` for a flat surface.                                                                       |
| `surfaceWaveSpeed`     | `0.002`                     | Speed of the surface movement. Use `0` for a still surface.                                                                                  |
| `bubbleCount`          | `50`                        | Number of bubbles created for each trigger. Set to `0` to hide bubbles.                                                                      |
| `bubbleColor`          | `"#ffffff"`                 | Bubble colour in six-digit hexadecimal notation. The script renders bubbles and their highlights at 50% opacity.                             |
| `bubbleMinRadius`      | `2`                         | Minimum bubble radius, in pixels.                                                                                                            |
| `bubbleMaxRadius`      | `9`                         | Maximum bubble radius, in pixels. Must be at least `bubbleMinRadius`.                                                                        |
| `bubbleMinSpeed`       | `18`                        | Minimum upward bubble speed, in pixels per second.                                                                                           |
| `bubbleMaxSpeed`       | `62`                        | Maximum upward bubble speed, in pixels per second. Must be at least `bubbleMinSpeed`.                                                        |
| `bubbleSway`           | `0.8`                       | Maximum side-to-side bubble drift, in pixels per frame. Use `0` for straight movement.                                                       |
