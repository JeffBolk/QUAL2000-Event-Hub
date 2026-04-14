// Jeffrey Bolk
// 2026-04-14
// Event Hub Testing

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  createPasswordHash,
  getMonthStart,
  getMonthValue,
  getNextMonthValue,
  getPreviousMonthValue,
  isPastEvent,
  normalizeSeatCount,
  passwordMatches,
} = require("../appHelpers");

test.describe("Event Hub Testing", () => {
  test("Password Encryption", () => {
    // Testing password creation
    const pw = "Hello123";
    const cryptPw = createPasswordHash(pw);
    assert.notDeepStrictEqual(pw, cryptPw);

    // Testing password match
    assert.deepStrictEqual(passwordMatches(pw, cryptPw), true);
  });
  test("Month Functions", () => {
    // Testing get month
    const date = new Date("April 4, 2026 12:00:00");
    assert.deepStrictEqual(getMonthValue(date), "2026-04");
    assert.deepStrictEqual(getNextMonthValue(date), "2026-05");
    assert.deepStrictEqual(getPreviousMonthValue(date), "2026-03");

    // Testing get month start
    assert.deepStrictEqual(
      getMonthStart(date),
      new Date("April 1, 2026 00:00:00 UTC"),
    );

    const newDate = new Date(`${getNextMonthValue(new Date())}-01T00:00:00z`); // Relative next month
    // Test is past event
    assert.deepStrictEqual(isPastEvent(date), true);
    assert.deepStrictEqual(isPastEvent(newDate), false);
  });
  test("Number Range Seat Count", () => {
    // Testing string and integer seat count within range
    assert.deepStrictEqual(normalizeSeatCount(1), 1);
    assert.deepStrictEqual(normalizeSeatCount("10"), 10);
    assert.deepStrictEqual(normalizeSeatCount(0), null);
    assert.deepStrictEqual(normalizeSeatCount("11"), null);
  });
});

module.exports = { test };
