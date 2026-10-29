# Starry Sky

A transparent canopy of twinkling stars that fades in, shines overhead, and gently fades away.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!starry-sky",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting         | Default value | Description                                                                                                                                    |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `starCount`     | `180`         | Number of stars shown for each trigger.                                                                                                        |
| `shineStrength` | `1`           | Multiplier for each star's glow and sparkle rays. Use values above `1` for a stronger shine or values between `0` and `1` for a gentler shine. |
| `duration`      | `9000`        | Total effect duration in milliseconds, including the fade in and fade out.                                                                     |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
