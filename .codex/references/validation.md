# Validation expectations

Run `npm run check` for every source, documentation, or demo change. It runs
Prettier in check mode and checks the repository animation contract.

The automated check verifies source naming, required companion files, HTML
markers for transparency/configuration/preview, unique Twitch commands, and
the presence of every animation in the README and demo picker. It does not
replace visual verification in OBS or a browser.

For visual changes, run `npm start`, open `dist/`, select the changed source,
and use **Play animation** more than once. Check transparency, cleanup, and
resizing at the intended Browser source dimensions.
