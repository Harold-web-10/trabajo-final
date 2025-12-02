import test from "node:test";
import assert from "node:assert/strict";
import { suma } from "../src/app.js"; // importa tu función

test("suma de 2 + 3 es 5", () => {
  assert.strictEqual(suma(2, 3), 5);
});
