const test = require("node:test");
const assert = require("node:assert");

const { validateMileage } = require("../src/mileage");

test("accepts valid mileage", () => {
    assert.strictEqual(validateMileage(15000), true);
});

test("rejects negative mileage", () => {
    assert.throws(
        () => validateMileage(-100),
        /Mileage cannot be negative/
    );
});