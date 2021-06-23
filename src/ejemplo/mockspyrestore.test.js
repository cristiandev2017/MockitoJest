import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});

//Resta
test("calls math.subtract", () => {
  const subtractMock = jest.spyOn(math, "subtract");
  // calls the original implementation
  subtractMock.mockImplementation(() => "mock");
  expect(app.doSubtract(2,2)).toEqual("mock");
  //restore the original implementation
  subtractMock.mockRestore();
  expect(app.doSubtract(2,2)).toEqual(0);
});

//Multiplicación
test("calls math.multiply", () => {
  const multiplyMock = jest.spyOn(math, "multiply");
  // calls the original implementation
  multiplyMock.mockImplementation(()=>"mock")
  expect(app.doMultiply(1, 2)).toEqual("mock");
  // and the spy stores the calls to add
  multiplyMock.mockRestore();
  expect(app.doMultiply(1,2)).toEqual(2);
});

//Multiplicación
test("calls math.divide", () => {
  const divideMock = jest.spyOn(math, "divide");
  // calls the original implementation
  divideMock.mockImplementation(()=>"mock")
  expect(app.doDivide(2, 2)).toEqual("mock");
  // and the spy stores the calls to add
  divideMock.mockRestore();
  expect(app.doDivide(2,2)).toEqual(1);
});



