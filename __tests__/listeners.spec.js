import applyListeners from "../src/js/listeners";

describe("Listeners", () => {
  test("Should be a function", () => {
    expect(typeof applyListeners).toBe("function");
  });
  test("Should throw an error if listener is not a function", () => {
    expect(() => {
      applyListeners(["not a function"], { message: "yay!" }, [
        "not a function"
      ]);
    }).toThrow("Listener must be a function!");
  });
  test("Should call listeners", () => {
    const myMockListener = jest.fn();
    applyListeners([myMockListener], {}, { prop: "my prop" });
    expect(myMockListener.mock.calls.length).toBe(1);
    expect(myMockListener.mock.calls[0][0]).toEqual({});
    expect(myMockListener.mock.calls[0][1]).toEqual({ prop: "my prop" });
  });
});
