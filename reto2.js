// /////////// reto 2

// // numeros primos

const numeroPrimo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return console.log('No es primo')
    if (num % i !== 0) return console.log('Es primo')
  }
}

numeroPrimo(5)

// ///////// Area de triangulo

const triangleArea = (a, b) => {
  const result = (a * b) / 2
  return result
}

console.log(triangleArea(5, 10))
