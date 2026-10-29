# Confetti Explosion

A high-energy confetti cannon burst from the center and both lower corners.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!confetti-explosion",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting           | Default value | Description                                  |
| ----------------- | ------------- | -------------------------------------------- |
| `centerParticles` | `300`         | Number of particles in the center burst.     |
| `sideParticles`   | `250`         | Number of particles in each corner cannon.   |
| `spread`          | `120`         | Angle spread of the center burst in degrees. |
| `velocity`        | `50`          | Starting speed of confetti particles.        |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
