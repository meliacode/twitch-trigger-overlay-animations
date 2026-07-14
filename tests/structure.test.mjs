import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const animations = ['send-love', 'party-lights', 'fireworks', 'swarm-of-butterflies', 'confetti'];
for (const animation of animations) {
  test(`${animation} is a standalone OBS source`, async () => {
    const html = await readFile(`src/${animation}/index.html`, 'utf8');
    assert.match(html, /<!doctype html>/i);
    assert.match(html, /<head>/i);
    assert.match(html, /<body>/i);
    assert.match(html, /Configuration/);
    assert.match(html, /ComfyJS/);
  });
}
