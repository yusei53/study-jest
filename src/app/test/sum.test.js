test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("0は存在しない", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);         このように書くと、丸め込み誤差が原因で期待通りに動作しない
  expect(value).toBeCloseTo(0.3); // これならば正しく動く
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

async function fetchData() {
  return "peanut butter"; // 仮想のデータを返す例
}

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    const data = await fetchData();
    expect(data).toBe("peanut butter");
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

// test("the fetch fails with an error", () => {
//   return expect(fetchData()).rejects.toMatch("error");
// });

test("jest.fn()のサンプル", () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn(1, 2, 3);

  // mockFnが2回呼ばれていること
  expect(mockFn).toHaveBeenCalledTimes(2);

  // mockFnの引数に1, 2, 3が渡されていること
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);

  // mockFnの引数に1, 2, 3, 4が渡されていないこと
  expect(mockFn).not.toHaveBeenCalledWith(1, 2, 3, 4);
});
