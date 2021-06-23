import * as app from "./app";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();

//Suma
test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

//Resta
test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

//Multiplicacion
test("calls math.multiply", () => {
  app.doMultiply(1, 2);
  expect(math.multiply).toHaveBeenCalledWith(1, 2);
});

//División
test("calls math.divide", () => {
  app.doDivide(1, 2);
  expect(math.divide).toHaveBeenCalledWith(1, 2);
});

