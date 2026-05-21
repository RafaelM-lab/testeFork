function multiplicar(numero){

    return console.log('O dobro com FOREACH', (numero * 2))
}
const numeros = [1,2,3,4]

numeros.forEach(multiplicar)


const dobro = numeros.map( num =>  `O dobro com MAP ${num * 2}`)
console.log(dobro)