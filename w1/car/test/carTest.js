const chai = require("chai"); // 1
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js"); // 2

describe("#shouldBuyCar()", function () {
  // 3

  it("should return false if it's a hatchback", function () {
    // 4
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true color=pink", function () {
    const car = {
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true color=pink and !hatchback", function () {
    const car = {
      type: !"hatchback",
      color: "pink",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true if mileage 6L/100km and <= 5k", function () {
    const car = {
      price: 5000,
      litresPer100km: 6,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true if mileage 11L/100km and <= 5k", function () {
    const car = {
      price: 5000,
      litresPer100km: 11,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false if mileage 6L/100km and > 5k", function () {
    const car = {
      price: 6000,
      litresPer100km: 6,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if mileage 12L/100km and > 5k", function () {
    const car = {
      litresPer100km: 12,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if no car details ", function () {
    const car = {};

    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return undefined if no car", function () {
    var car;

    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });
});
