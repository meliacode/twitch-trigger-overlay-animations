# Twitch Trigger Overlay Animations

A collection of transparent, standalone HTML animations for [OBS Studio](https://obsproject.com/), designed to be triggered by Twitch chat. Each animation can be added as a Browser source and triggered locally for preview or from Twitch chat with a command.

No build step is required for the animations themselves. Each source lives in its own folder, keeps its editable settings in a `CONFIG` object, and includes a matching configuration reference.

## Animations

| Animation               | Twitch command        | Source                                                                                                                 |
| ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Confetti Explosion      | `!confetti-explosion` | [`src/confetti-explosion/confetti-explosion.html`](src/confetti-explosion/confetti-explosion.html)                     |
| Confetti Rain           | `!confetti-rain`      | [`src/confetti-rain/confetti-rain.html`](src/confetti-rain/confetti-rain.html)                                         |
| Fireworks               | `!fireworks`          | [`src/fireworks/fireworks.html`](src/fireworks/fireworks.html)                                                         |
| Gifts Rain              | `!gifts`              | [`src/gifts-rain/gifts-rain.html`](src/gifts-rain/gifts-rain.html)                                                     |
| Meteor Shower           | `!meteor-shower`      | [`src/meteor-shower/meteor-shower.html`](src/meteor-shower/meteor-shower.html)                                         |
| Party Lights Laser      | `!party-laser`        | [`src/party-lights-laser/party-lights-laser.html`](src/party-lights-laser/party-lights-laser.html)                     |
| Party Lights Spotlights | `!party-spotlights`   | [`src/party-lights-spotlights/party-lights-spotlights.html`](src/party-lights-spotlights/party-lights-spotlights.html) |
| Spread Love Rainbow     | `!spreadlove`         | [`src/spread-love-rainbow/spread-love-rainbow.html`](src/spread-love-rainbow/spread-love-rainbow.html)                 |
| Swarm of Butterflies    | `!butterflies`        | [`src/swarm-of-butterflies/swarm-of-butterflies.html`](src/swarm-of-butterflies/swarm-of-butterflies.html)             |

## Get started

1. Choose an animation above and add its HTML file to OBS as a Browser source.
2. Edit its `TWITCH` object to enable the matching chat command, if wanted.
3. Adjust values in its `CONFIG` object; its folder's `CONFIG.md` explains every option.

Read [GUIDE.md](GUIDE.md) for the OBS setup walkthrough. Read [INSTRUCTION.md](INSTRUCTION.md) to create an animation and add it to the demo.

## Preview locally

Open [`dist/index.html`](dist/index.html) in a browser and select an animation. **Play animation** triggers it in the preview frame without Twitch. The same source can be previewed once by adding `?preview=1` to its URL.

For a local web server, install the development dependency and run:

```bash
npm install
npm start
```

Then open the URL printed by the server and navigate to `dist/`. The animation files use CDN scripts, so the preview and OBS Browser source need internet access for those libraries and for Twitch chat support.

## Repository layout

```text
src/
  <animation-id>/
    <animation-id>.html  Standalone OBS Browser source
    CONFIG.md            Settings reference for that animation
dist/
  index.html             Local animation picker and preview
  demo.css               Demo styles
GUIDE.md                 Install an animation in OBS
INSTRUCTION.md           Add an animation to the repository
```

## Contributing

Keep animations standalone, transparent, and safe to trigger repeatedly. Before submitting a new one, follow [INSTRUCTION.md](INSTRUCTION.md), update the demo, and run:

```bash
npm run format
```
