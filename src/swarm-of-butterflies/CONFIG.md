# Swarm of Butterflies

A colorful swarm of butterflies flies across the screen.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!butterflies",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between animations. `userCooldown` prevents the same person from using this command more than once every 5 seconds. Both values are in milliseconds.

## Animation configuration

| Setting    | Default value                                                          | Description                                                                                                                              |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `count`    | `200`                                                                  | Number of butterflies released per trigger.                                                                                              |
| `maxDelay` | `5`                                                                    | Maximum stagger delay before a butterfly begins to fly, in seconds.                                                                      |
| `colors`   | `white, red, pink, purple, blueDark, blueLight, green, yellow, orange` | Named wing-color palette. Choose one or more of: `white`, `red`, `pink`, `purple`, `blueDark`, `blueLight`, `green`, `yellow`, `orange`. |

## LOCAL_CONFIG

No internal tuning values are currently exposed for this animation.
