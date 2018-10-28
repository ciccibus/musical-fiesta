import logger from "../src/js/logger";
describe("Logger", () => {
  test("Should be a function", () => {
    expect(typeof logger).toBe("function");
  });
  test("", () => {
    jest.spyOn(global.console, "log");
    logger({}, { prop: "my prop" });
    expect(console.log.mock.calls.length).toBe(2);
  });
});
