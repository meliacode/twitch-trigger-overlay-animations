# Sakura Petal Storm

A wind-blown flurry of cherry-blossom petals crosses the transparent overlay from upper left to lower right. Each trigger adds another gust safely, so the effect can build during an active stream moment.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!sakura-storm",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting        | Default value                        | Description                                                                           |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------------------- |
| `petalCount`   | `120`                                | Number of petals created by each gust.                                                |
| `duration`     | `7200`                               | Time for a gust to remain active, in milliseconds.                                    |
| `windSpeed`    | `460`                                | Average horizontal wind speed in CSS pixels per second.                               |
| `fallSpeed`    | `155`                                | Average downward drift in CSS pixels per second.                                      |
| `gustStrength` | `150`                                | Maximum side-to-side wind variation in CSS pixels per second.                         |
| `petalSize`    | `[12, 25]`                           | Minimum and maximum petal size in CSS pixels.                                         |
| `colors`       | `#ffd6e5, #ffb8d2, #fff0f6, #f59aba` | Petal colours, in any valid CSS colour format. Keep at least one colour in the array. |
