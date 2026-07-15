# Install an animation in OBS

This guide adds one animation from this repository as a transparent OBS Browser source and, optionally, enables its Twitch chat trigger.

## 1. Choose and customize an animation

1. In `src/`, open the folder for the animation you want.
2. Open the HTML file with the same name as its folder.
3. Edit the `CONFIG` and `TWITCH` object in the script section of the file. The folder's `CONFIG.md` lists the available settings and defaults.

Keep the HTML file together with its folder. The Browser source loads third-party scripts from CDNs, so OBS must be able to access the internet.

## 2. Add the Browser source

1. In OBS, choose **Sources** → **+** → **Browser**.
2. Create a new source and give it a descriptive name, such as `Confetti Explosion`.
3. Enable **Local file** and select the animation's HTML file, for example `src/confetti-explosion/confetti-explosion.html`.
4. Set **Width** and **Height** to the size of the scene or canvas where the overlay will appear, such as `1920` × `1080`.
5. Leave **Custom CSS** empty. The source is already transparent.
6. If the animation should stay connected to Twitch while its scene is hidden, disable **Shutdown source when not visible**.
7. Click **OK**, then position the source in the scene as needed.

The overlay is transparent; only the animation is visible over sources beneath it.

## 3. Test the animation

Use either of these approaches:

- Open `dist/index.html`, select the animation, and click **Play animation**.
- In OBS, temporarily append `?preview=1` to a URL-based source to trigger it once. For a local-file source, use the demo for this one-time preview, then restore the source to the HTML file.

The demo is a local preview only. It does not send Twitch chat commands.

## 4. Enable a Twitch command (optional)

Each animation has this object in its HTML file:

```js
const TWITCH = {
  enabled: false,
  channel: "your_twitch_channel",
  command: "!confetti-explosion",
};
```

Set `enabled` to `true`, replace `channel` with the channel name without `@`, and keep or change `command`.
Restart or refresh the OBS Browser source after saving.

```js
const TWITCH = {
  enabled: true,
  channel: "meliacode",
  command: "!celebrate",
};
```

The command is case-insensitive. It must start with `!` and should be unique among the Browser sources connected to the same channel. These sources use ComfyJS to listen to public chat; do not put a Twitch password, OAuth token, or other secret in the HTML file.

## 5. Use channel-point rewards

Channel-point redemptions are not normal chat commands. Configure a bot or automation you trust to post the animation's command in chat when the reward is redeemed. Keep credentials in that bot or automation tool, never in the animation source.

## Troubleshooting

| Problem                                     | Check                                                                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Nothing appears                             | Confirm the Browser source is above the sources it should overlay and its dimensions match the scene.                      |
| The effect is opaque                        | Clear OBS **Custom CSS** and use the supplied HTML file unchanged outside its `CONFIG` and `TWITCH` objects.               |
| A chat command does nothing                 | Confirm `enabled: true`, the channel has no `@`, the command matches exactly, and refresh the Browser source after saving. |
| The animation or Twitch trigger cannot load | Confirm OBS can reach the internet; the sources load ComfyJS and some effect libraries from CDNs.                          |
