// // declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

    //de la parte 13 HOMEWORK

const fromDollarToYen  = function(valueInDolar){
    let valueInYen = valueInDolar * 127.9;
    return valueInYen;
}

const fromYenToPound  = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}



// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };