////// ACCEDER A PROPIEDADES
const user = {
  name: 'Angela Garcia',
  age: 35,
  city: 'Saltillo'
}

const userName = () => {
  return user.name
}

console.log(userName(process.argv))

//// AGREGAR PROPIEDADES

const newObject = {}

const addProperties = (array) => {
  const property = array[2]
  const value = array[3]
  newObject[property] = `${value}`
  return newObject
}

console.log(addProperties(process.argv))

/////// REVISAR SI EXISTE FUNCION

const newObject = {}

const addProperties = (array) => {
  const property = array[2]
  const value = array[3]
  newObject[property] = `${value}`
  return newObject
}

console.log(addProperties(process.argv))

/* Comparar objetos: Define dos objetos JSON que representen información
 sobre productos (por ejemplo, nombre, precio, cantidad). Escribe una
 función que tome estos dos objetos como parámetros y compare sus
 propiedades para determinar si son iguales o no */

const obj1 = {
  name: 'Angie',
  edad: 35,
  genero: 'femenino'
}

const obj2 = {
  name: 'Diego',
  edad: 10,
  parentezco: 'hijo'
}

const compareObj = (obj1, obj2) => {
  const obj1keys = Object.keys(obj1)
  const obj2keys = Object.keys(obj2)
  obj1keys.includes(obj2keys)
    ? console.log('Los objetos tienen las mismas keys')
    : console.log('Los objetos tienen diferentes keys')
}

compareObj(obj1, obj2)
