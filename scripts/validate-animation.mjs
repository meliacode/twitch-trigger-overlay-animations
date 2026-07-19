import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const failures = [];

function fail(message) {
  failures.push(message);
}

const entries = await readdir(sourceRoot, { withFileTypes: true });
const animationIds = entries
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const commands = new Map();

for (const id of animationIds) {
  const directory = path.join(sourceRoot, id);
  const htmlPath = path.join(directory, `${id}.html`);
  const configPath = path.join(directory, "CONFIG.md");

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    fail(`src/${id}: identifier must be lowercase kebab-case.`);
  }

  for (const file of [htmlPath, configPath]) {
    try {
      await stat(file);
    } catch {
      fail(`${path.relative(root, file)} is required.`);
    }
  }

  let html;
  let config;
  try {
    [html, config] = await Promise.all([
      readFile(htmlPath, "utf8"),
      readFile(configPath, "utf8"),
    ]);
  } catch {
    continue;
  }

  const requiredHtmlMarkers = [
    [/<!doctype html>/i, "a complete HTML document"],
    [/background:\s*transparent/i, "a transparent background"],
    [/pointer-events:\s*none/i, "a pointer-inert animation stage"],
    [/const\s+CONFIG\s*=/, "a CONFIG object"],
    [/const\s+TWITCH\s*=/, "a TWITCH object"],
    [/location\.search\.includes\(\s*["']preview["']\s*\)/, "preview support"],
  ];

  for (const [pattern, description] of requiredHtmlMarkers) {
    if (!pattern.test(html)) fail(`src/${id}: missing ${description}.`);
  }

  const commandMatch = html.match(/command:\s*["'](![^"']+)["']/);
  if (!commandMatch) {
    fail(
      `src/${id}: TWITCH.command must be a quoted command beginning with !.`,
    );
  } else {
    const command = commandMatch[1].toLowerCase();
    if (commands.has(command)) {
      fail(
        `src/${id}: command ${command} duplicates src/${commands.get(command)}.`,
      );
    } else {
      commands.set(command, id);
    }
    if (!config.includes(commandMatch[1])) {
      fail(`src/${id}/CONFIG.md: Twitch command must match the HTML source.`);
    }
  }

  for (const heading of [
    "## Twitch configuration",
    "## Animation configuration",
  ]) {
    if (!config.includes(heading))
      fail(`src/${id}/CONFIG.md: missing ${heading}.`);
  }
}

const [demo, readme] = await Promise.all([
  readFile(path.join(root, "dist/index.html"), "utf8"),
  readFile(path.join(root, "README.md"), "utf8"),
]);
const demoPaths = [
  ...demo.matchAll(/value="\.\.\/src\/([^"/]+)\/\1\.html"/g),
].map((match) => match[1]);

if (new Set(demoPaths).size !== demoPaths.length) {
  fail("dist/index.html: an animation appears more than once in the picker.");
}

for (const id of animationIds) {
  if (!demoPaths.includes(id)) fail(`dist/index.html: missing ${id} option.`);
  const sourcePath = `src/${id}/${id}.html`;
  if (!readme.includes(sourcePath)) fail(`README.md: missing ${sourcePath}.`);
}

for (const id of demoPaths) {
  if (!animationIds.includes(id))
    fail(`dist/index.html: ${id} has no source folder.`);
}

const labels = [
  ...demo.matchAll(
    /<option[^>]*value="\.\.\/src\/[^"/]+\/[^"/]+\.html"[^>]*>\s*([^<]+?)\s*<\/option>/gs,
  ),
].map((match) => match[1].trim());
const sortedLabels = [...labels].sort((left, right) =>
  left.localeCompare(right),
);
if (labels.join("\n") !== sortedLabels.join("\n")) {
  fail(
    "dist/index.html: animation options must be alphabetical by visible label.",
  );
}

if (failures.length) {
  console.error("Animation contract check failed:\n");
  for (const message of failures) console.error(`- ${message}`);
  process.exitCode = 1;
} else {
  console.log(
    `Animation contract check passed for ${animationIds.length} animations.`,
  );
}
