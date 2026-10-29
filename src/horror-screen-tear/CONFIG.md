# Horror Screen Tear

A horror-film screen tear: a jagged rip splits the stream, two pale hands push their fingers through and pull the opening apart, glowing eyes watch from the darkness, then the tear snaps shut.

The source plays no sound. To add a scream, trigger an audio source from the same `!screen` command elsewhere (for example in OBS or a bot) and use `appearDelay` to line the visuals up with it.

## Twitch configuration

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!screen",
  globalCooldown: 500,
  userCooldown: 5000,
};
```

`globalCooldown` waits 0.5 seconds between triggers. `userCooldown` limits each user to one trigger every 5 seconds. Both values are in milliseconds.

A new trigger replaces the current tear: after `appearDelay`, a fresh tear starts from the beginning.

## Animation configuration

The effect is timed by phases instead of a single `duration`. With the defaults, the tear is visible for 7.6 seconds (`openDuration + holdDuration + closeDuration`).

| Setting         | Default value | Description                                                                                       |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------- |
| `appearDelay`   | `0`           | Wait in milliseconds between the trigger and the first crack. Use it to sync with a scream sound. |
| `openDuration`  | `2200`        | Time in milliseconds from the first crack until the hands have pulled the tear fully open.        |
| `holdDuration`  | `4500`        | Time in milliseconds the tear stays wide open on screen.                                          |
| `closeDuration` | `900`         | Time in milliseconds for the hands to withdraw and the tear to snap shut.                         |
| `openWidth`     | `34`          | Maximum opening width at the hands, as a percentage of the source width.                          |
| `showHands`     | `true`        | Shows the fingers gripping and pulling the edges.                                                 |
| `showEyes`      | `true`        | Shows two glowing eyes inside the opening.                                                        |
| `screenShake`   | `true`        | Shakes the tear while it rips, stretches, and snaps shut.                                         |
| `vignette`      | `true`        | Darkens the edges of the stream while the tear is open.                                           |
| `skinColor`     | `"#bdb6a6"`   | Finger skin colour. Accepts any CSS colour.                                                       |
| `nailColor`     | `"#2b1e18"`   | Fingernail colour. Accepts any CSS colour.                                                        |
| `voidColor`     | `"#050000"`   | Colour of the darkness behind the screen. Accepts any CSS colour.                                 |
| `glowColor`     | `"#7a0000"`   | Faint glow deep inside the opening. Accepts any CSS colour.                                       |
| `rimColor`      | `"#e6dfd2"`   | Colour of the torn edges and falling fragments. Accepts any CSS colour.                           |
| `eyeColor`      | `"#ff2a12"`   | Colour and glow of the eyes. Accepts any CSS colour.                                              |

## LOCAL_CONFIG

These values tune the tear shape and motion. Pixel values are designed for a 1920×1080 source and scale with its size.

| Setting         | Default value | Effect on the animation                                                     |
| --------------- | ------------- | --------------------------------------------------------------------------- |
| `ripShare`      | `0.22`        | Share of `openDuration` spent ripping the crack from top to bottom.         |
| `emergeShare`   | `0.25`        | Share of `openDuration` spent pushing the fingers through the crack.        |
| `edgePoints`    | `72`          | Number of points along the tear; more points make a finer jagged edge.      |
| `crackJag`      | `18`          | Maximum zigzag of the tear line in pixels.                                  |
| `fiberJag`      | `7`           | Extra ragged roughness of each torn edge in pixels.                         |
| `crackWidth`    | `5`           | Width of the thin crack in pixels before the hands pull it open.            |
| `crackBranches` | `10`          | Number of thin cracks spreading away from the tear.                         |
| `fingerCount`   | `4`           | Fingers per hand.                                                           |
| `fingerWidth`   | `30`          | Finger thickness in pixels.                                                 |
| `fingerLength`  | `170`         | Length in pixels of the longest finger.                                     |
| `fingerSpacing` | `1.08`        | Vertical spacing between fingers, as a multiple of `fingerWidth`.           |
| `fingerCurl`    | `0.16`        | Bend in radians at each finger joint.                                       |
| `tremble`       | `1.2`         | Finger trembling amplitude in pixels.                                       |
| `shakeStrength` | `9`           | Maximum screen-shake offset in pixels.                                      |
| `debrisCount`   | `70`          | Maximum number of screen fragments released per tear.                       |
| `gravity`       | `0.35`        | Downward acceleration of the falling fragments.                             |
| `blinkAt`       | `0.55`        | Point during `holdDuration` (from `0` to `1`) at which the eyes blink once. |
