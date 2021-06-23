import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  //Se crea una constante donde se almacenara la operacion sumar del archivo js math(Este tiene la operacion)
  const originalAdd = math.add;
  //Le dice a Jest cual es la funcion que va a ejecutar en este caso es la misma math.add
  math.add = jest.fn(originalAdd);
  //Verifico que al ejecutar el doAdd con los parametros enviados se traiga el 3 que es el toEqual
  expect(app.doAdd(1, 2)).toEqual(3);
  /*La funcion toHaveBeenCalledWith lo que hace es asegurarse de que la funcion simulada tenga los mismos argumentos
  y en el mismo orden, si se cambia sacara error en el test, en este caso al llamar a add*/
  expect(math.add).toHaveBeenCalledWith(1, 2);
  /* Lo que hace es que se simula un comportamiento diferente y se retorna otro valor al inicial, hace como cambiar la funcion add original 
  y ya no retorna 3 como el anterior sino el "mock"*/
  math.add.mockImplementation(() => "mock");
  //Hago la validacion del test
  expect(app.doAdd(1, 2)).toEqual("mock");
  //Vuelvo y verifico el orden de llamado de los parametros
  expect(math.add).toHaveBeenCalledWith(1, 2);
  //Lo restauro a como estaba inicialmente
  math.add = originalAdd;
  //Como se restaura ya retornara lo que estaba inicialmente que es 3
  expect(app.doAdd(1, 2)).toEqual(3);
});