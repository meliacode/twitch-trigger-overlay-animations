# OBS HTML Animations

A small collection of standalone browser-source animations for OBS. Every animation is a single HTML file with no build step.

## Included animations

| Animation               | Chat command          | Source file                                                |
| ----------------------- | --------------------- | ---------------------------------------------------------- |
| Confetti Explosion      | `!confetti-explosion` | `src/confetti-explosion/confetti-explosion.html`           |
| Confetti Rain           | `!confetti-rain`      | `src/confetti-rain/confetti-rain.html`                     |
| Fireworks               | `!fireworks`          | `src/fireworks/fireworks.html`                             |
| Gifts Rain              | `!gifts`              | `src/gifts-rain/gifts-rain.html`                           |
| Meteor Shower           | `!meteor-shower`      | `src/meteor-shower/meteor-shower.html`                     |
| Party Lights Laser      | `!party-laser`        | `src/party-lights-laser/party-lights-laser.html`           |
| Party Lights Spotlights | `!party-spotlights`   | `src/party-lights-spotlights/party-lights-spotlights.html` |
| Spread Love Rainbow     | `!spreadlove`         | `src/spread-love-rainbow/spread-love-rainbow.html`         |
| Swarm of Butterflies    | `!butterflies`        | `src/swarm-of-butterflies/swarm-of-butterflies.html`       |

## Add an animation to OBS

1. In OBS, add a **Browser** source.
2. Enable **Local file** and select the animation HTML file whose name matches its folder.
3. Set its width and height to your canvas size (for example, 1920 × 1080).
4. Keep **Shutdown source when not visible** disabled if you want the Twitch connection to remain active.
5. Set the source background to transparent by leaving OBS's custom CSS empty.

Each animation listens for its command through [ComfyJS](https://github.com/instafluff/ComfyJS). Open the animation HTML file and edit the `TWITCH` object in the **Twitch trigger** section:

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!confetti-explosion",
};
```

Use the channel name without `#`. Do not place your Twitch login or OAuth token in these files: ComfyJS can listen to public chat without them.

## Testing an animation

Open `dist/index.html` in a browser and select an animation. The **Play animation** button starts it locally; it does not send anything to Twitch.

You can also append `?preview=1` to an animation URL to play it immediately once, which is convenient when configuring an OBS source.

## Customization

Every source contains a **Configuration** section at the bottom of its HTML file. It controls item counts, duration, delay, colors, and similar values. The matching `CONFIG.md` describes the available options.

## Twitch rewards

Channel-point rewards do not arrive as normal chat commands. Configure your Twitch bot or automation tool to send the matching command in chat when a reward is redeemed, or have it call the source through a local browser-control workflow. This library intentionally keeps the browser sources simple and token-free.

## Project structure

```
src/
  <animation>/<animation>.html  Standalone OBS browser source
  <animation>/CONFIG.md     Animation-specific settings
dist/
  index.html                Local animation picker
  demo.css                  Demo styling
```
