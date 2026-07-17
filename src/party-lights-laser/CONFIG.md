# Party Lights Laser

Pink, cyan, green, purple, yellow, and orange spotlights and lasers create a full-screen party effect.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!party-laser",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting        | Default value | Description                                     |
| -------------- | ------------- | ----------------------------------------------- |
| `duration`     | `10000`       | Total party effect duration in milliseconds.    |
| `fadeDuration` | `1000`        | Duration of the final fade-out in milliseconds. |
