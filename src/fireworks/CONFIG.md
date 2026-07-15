# Fireworks

Colorful particle explosions burst above the stream.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!fireworks",
};
```

## Animation configuration

| Setting             | Default value | Description                                       |
| ------------------- | ------------- | ------------------------------------------------- |
| `rocketCount`       | `25`          | Number of rockets launched per trigger.           |
| `launchDelay`       | `150`         | Time between new rocket launches in milliseconds. |
| `particlesPerBurst` | `180`         | Number of particles created by each explosion.    |
