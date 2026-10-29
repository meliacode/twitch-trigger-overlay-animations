# Evil Pumpkin

A cute carved pumpkin floats among magic sparkles, then smoothly morphs into an evil jack-o'-lantern with slanted eyes, slit pupils, and a fanged grin before turning cute again. The pumpkin stays on screen: it can cycle on its own, be turned evil from chat, or both.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!evil",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

`!evil` turns the pumpkin evil for `duration` milliseconds. Using it again while the pumpkin is evil restarts that time instead of stacking a second pumpkin.

## Animation configuration

| Setting              | Default value                        | Description                                                                                                                              |
| -------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `autoCycle`          | `true`                               | `true` repeats the cute → evil → cute cycle forever. `false` keeps the pumpkin cute until `!evil` (or `?preview=1`) is used.             |
| `cuteDelay`          | `12000`                              | Time the cute face stays before turning evil in automatic cycles, in milliseconds. Counted from the moment the face is fully cute again. |
| `duration`           | `8000`                               | Time the evil face stays once fully transformed, in milliseconds, for both automatic cycles and `!evil`.                                 |
| `pumpkinScale`       | `1`                                  | Size multiplier for the pumpkin. The base size follows the smallest side of the Browser source.                                          |
| `particleCount`      | `70`                                 | Number of magic particles floating behind the pumpkin. Set to `0` to hide them.                                                          |
| `pumpkinColor`       | `"#ff8c1a"`                          | Pumpkin skin colour. It darkens slightly when evil. Accepts any valid CSS colour.                                                        |
| `stemColor`          | `"#5f7d2a"`                          | Stem, leaf, and vine colour. Accepts any valid CSS colour.                                                                               |
| `cuteGlowColor`      | `"#ffd46b"`                          | Candle glow inside the carved face while cute. Accepts any valid CSS colour.                                                             |
| `evilGlowColor`      | `"#ff3d1f"`                          | Candle glow inside the carved face while evil. Accepts any valid CSS colour.                                                             |
| `cuteParticleColors` | `#ffb347, #ff9a1f, #ffc46b, #ff7f11` | Orange magic particle colours while cute. Accepts one or more valid CSS colours.                                                         |
| `evilParticleColors` | `#ff2d2d, #d4001a, #ff4d3d, #b3001b` | Red magic particle colours while evil. Each particle blends from a cute colour to an evil colour. Accepts one or more valid CSS colours. |

## LOCAL_CONFIG

These values tune the motion, morphing, and geometry. They are intentionally
kept out of streamer-facing configuration.

| Setting             | Default value | Effect on the animation                                                                   |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------- |
| `morphDuration`     | `1600`        | Time in milliseconds for the face to morph from cute to evil, and from evil back to cute. |
| `fadeInDuration`    | `900`         | Fade-in time in milliseconds when the Browser source loads.                               |
| `sizeRatio`         | `0.28`        | Pumpkin radius as a fraction of the smallest side of the Browser source.                  |
| `floatAmplitude`    | `0.07`        | Vertical floating distance, as a fraction of the pumpkin radius.                          |
| `floatSpeed`        | `1.4`         | Floating speed in radians per second.                                                     |
| `evilFloatBoost`    | `0.35`        | Extra floating speed while evil (`0.35` = 35% faster).                                    |
| `tiltAngle`         | `4`           | Maximum side-to-side tilt in degrees.                                                     |
| `morphPulse`        | `0.06`        | Extra scale applied midway through a transformation (`0.06` = 6% larger).                 |
| `breathing`         | `0.015`       | Gentle squash-and-stretch amount while floating.                                          |
| `flickerStrength`   | `0.22`        | Candle flicker strength; the flicker is strongest when evil.                              |
| `particleSpread`    | `2.1`         | Maximum particle spawn distance from the pumpkin centre, in pumpkin radii.                |
| `particleMinSpeed`  | `0.08`        | Minimum upward particle speed, in pumpkin radii per second.                               |
| `particleMaxSpeed`  | `0.22`        | Maximum upward particle speed, in pumpkin radii per second.                               |
| `particleMinLife`   | `2.5`         | Minimum particle lifetime in seconds before it is recycled.                               |
| `particleMaxLife`   | `5.5`         | Maximum particle lifetime in seconds before it is recycled.                               |
| `particleMinSize`   | `1.8`         | Minimum particle core size in pixels.                                                     |
| `particleMaxSize`   | `4.2`         | Maximum particle core size in pixels.                                                     |
| `evilParticleBoost` | `0.8`         | Extra particle rising speed while evil (`0.8` = 80% faster).                              |
| `eyeSamples`        | `96`          | Outline points per eye; both moods share them so the shapes morph smoothly.               |
| `mouthSamples`      | `81`          | Outline points per mouth edge; both moods share them so the teeth grow in smoothly.       |
