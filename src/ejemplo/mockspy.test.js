import * as app from "./app";
import * as math from "./math";
//Suma
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);
  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

//Resta
test("calls math.subtract", () => {
  const subtractMock = jest.spyOn(math, "subtract");
  // calls the original implementation
  expect(app.doSubtract(2,1)).toEqual(-1);
  // and the spy stores the calls to add
  expect(subtractMock).toHaveBeenCalledWith(2, 1);
});

//Multiplicación
test("calls math.multiply", () => {
  const multiplyMock = jest.spyOn(math, "multiply");
  // calls the original implementation
  expect(app.doMultiply(1, 2)).toEqual(2);
  // and the spy stores the calls to add
  expect(multiplyMock).toHaveBeenCalledWith(1, 2);
});

//División
test("calls math.divide", () => {
  const divideMock = jest.spyOn(math, "divide");
  // calls the original implementation
  expect(app.doDivide(2,2)).toEqual(1);
  // and the spy stores the calls to add
  expect(divideMock).toHaveBeenCalledWith(2, 2);
});


