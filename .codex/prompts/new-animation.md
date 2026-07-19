# New animation

Use `$create-obs-overlay` to create a new animation named `<animation-id>`.

Effect: `<describe the visual effect and its intended stream moment>`.

Constraints:

- keep it a standalone transparent OBS Browser source;
- use the Twitch command `<command>`;
- expose all user-tunable values through `CONFIG`;
- retain the four commented script sections and add a brief purpose comment
  above every named function;
- create the matching `CONFIG.md`, add the README row, and add the alphabetical
  demo option;
- run `npm run check` and report visual checks that still need a browser/OBS.
