# Torrential Rain

Dense, wind-driven rain falls across the transparent overlay. Optional fog banks and lightning add a small storm atmosphere.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!torrential-rain",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting     | Default value | Description                                                                    |
| ----------- | ------------- | ------------------------------------------------------------------------------ |
| `rainCount` | `280`         | Number of rain streaks created for each trigger.                               |
| `duration`  | `7500`        | How long each rain storm remains visible, in milliseconds.                     |
| `showFog`   | `true`        | Set to `true` to show the subtle low fog, or `false` to hide it.               |
| `showStorm` | `true`        | Set to `true` to show intermittent lightning flashes, or `false` to hide them. |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
