"use strict";

test("object assignment", function () {
  var data = {
    one: 1
  };
  data["two"] = 2;
  expect(data).toEqual({
    one: 1,
    two: 2
  });
});
test("0は存在しない", function () {
  for (var a = 1; a < 10; a++) {
    for (var b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test("null", function () {
  var n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
test("two plus two", function () {
  var value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
test("adding floating point numbers", function () {
  var value = 0.1 + 0.2; //expect(value).toBe(0.3);         このように書くと、丸め込み誤差が原因で期待通りに動作しない

  expect(value).toBeCloseTo(0.3); // これならば正しく動く
});
test("there is no I in team", function () {
  expect("team").not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', function () {
  expect("Christoph").toMatch(/stop/);
});
var shoppingList = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];
test("the shopping list has milk on it", function () {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", function () {
  expect(function () {
    return compileAndroidCode();
  }).toThrow();
  expect(function () {
    return compileAndroidCode();
  }).toThrow(Error); // You can also use a string that must be contained in the error message or a regexp

  expect(function () {
    return compileAndroidCode();
  }).toThrow("you are using the wrong JDK");
  expect(function () {
    return compileAndroidCode();
  }).toThrow(/JDK/); // Or you can match an exact error message using a regexp like below
  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails

  expect(function () {
    return compileAndroidCode();
  }).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

function fetchData() {
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", "peanut butter");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

test("the data is peanut butter", function () {
  return fetchData().then(function (data) {
    expect(data).toBe("peanut butter");
  });
});
test("the data is peanut butter", function _callee() {
  var data;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchData());

        case 2:
          data = _context2.sent;
          expect(data).toBe("peanut butter");

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
test("the fetch fails with an error", function _callee2() {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          expect.assertions(1);
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(fetchData());

        case 4:
          data = _context3.sent;
          expect(data).toBe("peanut butter");
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          expect(_context3.t0).toMatch("error");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
test("the data is peanut butter", function () {
  return expect(fetchData()).resolves.toBe("peanut butter");
}); // test("the fetch fails with an error", () => {
//   return expect(fetchData()).rejects.toMatch("error");
// });

test("jest.fn()のサンプル", function () {
  var mockFn = jest.fn();
  mockFn();
  mockFn(1, 2, 3); // mockFnが2回呼ばれていること

  expect(mockFn).toHaveBeenCalledTimes(2); // mockFnの引数に1, 2, 3が渡されていること

  expect(mockFn).toHaveBeenCalledWith(1, 2, 3); // mockFnの引数に1, 2, 3, 4が渡されていないこと

  expect(mockFn).not.toHaveBeenCalledWith(1, 2, 3, 4);
});