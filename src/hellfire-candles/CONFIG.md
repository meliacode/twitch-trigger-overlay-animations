# Hellfire Candles

Four floating candles hover close together in the centre of the screen. Their wax melts slowly into drips that run down the sides, and now and then a drop falls from underneath. From time to time the flames roar up into hellfire, with licking tongues of fire, rising embers, and a dark red glow from below, as if the gates of hell had opened. Then they calm back down to a gentle flicker.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!hellfire",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

`!hellfire` sets the candles ablaze for `duration` milliseconds. Using it again while they burn extends the flare. It does not stack a second one.

## Animation configuration

| Setting          | Default value                        | Description                                                                                                                                                     |
| ---------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoCycle`      | `true`                               | `true` makes the flames flare up automatically after `delay`. `false` keeps them calm until `!hellfire` (or `?preview=1`) is used.                              |
| `delay`          | `25000`                              | Calm time between two automatic flares, in milliseconds. Counted from the moment the flames have settled again.                                                 |
| `duration`       | `1000`                               | Time the hellfire stays at full strength, in milliseconds, for automatic flares and `!hellfire`. With the rise and fall, a whole burst lasts about 2.5 seconds. |
| `candleCount`    | `4`                                  | Number of floating candles in the central group.                                                                                                                |
| `candleScale`    | `1`                                  | Size multiplier for the candles. The base size follows the smallest side of the Browser source.                                                                 |
| `hellGlow`       | `true`                               | `true` adds a dark red glow that rises from below the candles while they burn.                                                                                  |
| `embers`         | `true`                               | `true` makes embers rise from the flames. There are a few while calm and many during hellfire.                                                                  |
| `waxColor`       | `"#efe4cc"`                          | Candle wax colour. Accepts any valid CSS colour.                                                                                                                |
| `flameColor`     | `"#ffb53d"`                          | Outer colour of a calm flame. Accepts any valid CSS colour.                                                                                                     |
| `flameCoreColor` | `"#fff3c4"`                          | Bright inner core of the flames. Accepts any valid CSS colour.                                                                                                  |
| `hellfireColors` | `#ff3a0a, #ff7b00, #c80000, #ffb300` | Hellfire palette used for the flames, fire tongues, embers, and glow. Accepts one to four valid CSS colours. The last colour repeats if fewer are given.        |

## LOCAL_CONFIG

These values tune the grouping, motion, flare, and wax. They are intentionally
kept out of streamer-facing configuration.

| Setting           | Default value | Effect on the animation                                                                    |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------ |
| `fadeInDuration`  | `1200`        | Fade-in time in milliseconds when the Browser source loads.                                |
| `sizeRatio`       | `0.13`        | Base candle size as a fraction of the smallest side of the Browser source.                 |
| `groupX`          | `0.5`         | Horizontal centre of the candle group, as a fraction of the width.                         |
| `groupY`          | `0.58`        | Vertical position of the candle group, as a fraction of the height.                        |
| `candleSpacing`   | `0.62`        | Horizontal distance between neighbouring candles, relative to the base size.               |
| `verticalOffset`  | `0.22`        | Maximum height difference between neighbouring candles, relative to the base size.         |
| `minHeightFactor` | `0.85`        | Shortest candle body, relative to the base size.                                           |
| `maxHeightFactor` | `1.3`         | Tallest candle body, relative to the base size.                                            |
| `minDepth`        | `0.75`        | Scale of the furthest candles. Further candles are also slightly darker.                   |
| `maxDepth`        | `1.1`         | Scale of the nearest candles.                                                              |
| `floatAmplitude`  | `0.07`        | Vertical floating distance, relative to the base size.                                     |
| `minFloatSpeed`   | `0.55`        | Slowest floating speed in radians per second.                                              |
| `maxFloatSpeed`   | `0.95`        | Fastest floating speed in radians per second.                                              |
| `tiltAngle`       | `3`           | Maximum side-to-side tilt of a candle, in degrees.                                         |
| `riseDuration`    | `500`         | Time in milliseconds for a flame to grow into hellfire.                                    |
| `fallDuration`    | `900`         | Time in milliseconds for hellfire to calm back down.                                       |
| `flareStagger`    | `90`          | Delay in milliseconds between candles igniting, from the lowest candle to the highest one. |
| `flareHeight`     | `4`           | Extra flame height during hellfire (`4` = five times the calm height).                     |
| `flareWidth`      | `0.9`         | Extra flame width during hellfire (`0.9` = 90% wider).                                     |
| `flareTremble`    | `0.012`       | Gentle trembling of the candles during hellfire, relative to the base size.                |
| `flickerStrength` | `0.12`        | Calm candle flicker strength.                                                              |
| `dripsPerCandle`  | `3`           | Wax drips running down each candle at the same time.                                       |
| `minDripTime`     | `7`           | Shortest time in seconds for a drip to reach its full length.                              |
| `maxDripTime`     | `15`          | Longest time in seconds for a drip to reach its full length.                               |
| `dripHoldTime`    | `3`           | Average time in seconds a full drip stays before melting back into the candle.             |
| `dripFadeTime`    | `4`           | Time in seconds for a drip to melt back into the candle.                                   |
| `meltBoost`       | `2.5`         | Extra drip speed during hellfire (`2.5` = 3.5 times faster).                               |
| `dropChance`      | `0.45`        | Chance that a finished drip releases a wax drop from underneath the candle.                |
| `dropGravity`     | `3`           | Wax drop gravity, relative to the base size per second squared.                            |
| `emberIdleRate`   | `0.25`        | Embers per second from each calm flame.                                                    |
| `emberFlareRate`  | `30`          | Extra embers per second from each flame at full hellfire.                                  |
| `emberMinLife`    | `1.2`         | Minimum ember lifetime in seconds.                                                         |
| `emberMaxLife`    | `2.6`         | Maximum ember lifetime in seconds.                                                         |
| `maxEmbers`       | `500`         | Maximum number of embers on screen at once.                                                |
