# Party Lights Laser

Pink, cyan, green, purple, yellow, and orange spotlights and lasers create a full-screen party effect.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!party-laser",
};
```

## Animation configuration

| Setting        | Default value | Description                                     |
| -------------- | ------------- | ----------------------------------------------- |
| `duration`     | `10000`       | Total party effect duration in milliseconds.    |
| `fadeDuration` | `1000`        | Duration of the final fade-out in milliseconds. |
