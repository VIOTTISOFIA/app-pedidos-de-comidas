let nombreUsuario = prompt (" nombre de usuario")
let apellidoUsuario = prompt ("apellido del usuario")
if ((nombreUsuario != "") && ( apellidoUsuario != "")) {
    console.log ("Nombre:  " + nombreUsuario  + "Apellido: " + apellidoUsuario) 
} else {
    console.log ("todos los campos son obligatorios")
}


// crear un algoritmo con un condicional 

let medioPago1 = ("efectivo")
let medioPago2 = ("financiado")

let medioPago = prompt ("Como desea abonar?")

if ((medioPago == "efectivo") || (medioPago == "financiado")){
console.log ("El pago se efectua: "+ medioPago) 
} else {
console.log ("Forma de pago incorrecta")
}




 // crear un algoritmo utilizando un ciclo

let orden = prompt ("Que deseas ordenar?")
let burgerPrecio = [2000, 2500, 3000]
switch (orden) {
    case "original burger":
console.log (`Vas a ordenar ${orden} el monto total de tu orden es de ${burgerPrecio[0]}`)
    break; 
    case "bacon cheeseburger":
        console.log (`Vas a ordenar ${orden} el monto total de tu orden es de ${burgerPrecio[1]}`)
    break;
    case "the big cheeseburger":
        console.log (`Vas a ordenar ${orden} el monto total de tu orden es de ${burgerPrecio[2]}`)
    break;
    default:
        console.log ("Vas a elegir otra alternativa")
        break;
}
 //FOR-bucle

let cantidad = parseInt (prompt ("Ingrese una cantidad"))
for (let i=1; i<=10; i++) {
    let resultado = cantidad * i
    console.log (`${cantidad} x $ {i} = ${resultado}`)
}








// console.log("pedidos lomitos fast")

// let apellido = prompt("por favor ingrese su apellido")
// let nombre = prompt ("ahora ingrese su nombre")
// let edad = prompt ("cual es tu edad ?")
// let ano_actual = prompt ("2023")
// let jubilacion = prompt ("60")

// let calculo = + jubilacion - + edad;
// let jubilo = + ano_actual - calculo;



// let primerNombre= "coder"

// console.log (primerNombre+ " " +apellido)

// alert (primerNombre + apellido)

// let primerValor= parseInt(prompt ("Ingrese el primer valor"))
// let segundoValor= parseInt (prompt ("Ingrese el segundo valor"))

// alert (primerValor + segundoValor)

// let numero1= 10
// let numero2= 50

// console.log (numero1 + numero2)


// let calificacion = prompt (" cual fue tu calificacion?")
// if (calificacion >=8 ) {
//     console.log ("calificacion sobresaliente")
// } else if (calificacion >= 7 ){
//     console.log ("examen aprobado")
// } else {
//     console.log ("debes recursar")
// }



// let contrasenia = "1234"
// let contraseniaIngresada = prompt (" ingrese su contrasena")
// if (contraseniaIngresada == contrasenia ) {
//     console.log ("Bienvenido")
// } else {
//     console.log ("Acceso denegado")
// }

// let nombreUsuario = prompt (" nombre de usuario")
// let apellidoUsuario = prompt ("apellido del usuario")
// if ((nombreUsuario != "") && ( apellidoUsuario != "")) {
//     console.log ("Nombre: " + nombreUsuario + "Apellido: " + apellidoUsuario) 
// } else {
//     console.log ("todos los campos son obligatorios")
// }

// let ingresesuorden1 = "hamburguesa simple" 
// let ingresesuorden2 = "hamburgesa premium"
// let cantidad1 = parseInt(prompt("1"))
// let cantidad2 = parseInt(prompt("2"))
// let cantidad3 = parseInt(prompt("3"))
// let cantidad4 = parseInt(prompt("4"))
// let ingresesuorden= prompt ("Ingrese su orden")
// let cantidad = parseInt (prompt ("Ingrese cantidad"))
// if (ingresesuorden == "hamburguesa simple" || ingresesuorden == "hamburguesa premium") {
//    console.log ("su pedido" + ingresesuorden)
// } else {
//     alert ("orden incorrecta")
// }


// if ((orden != "") && (cantidad != "")) {
//     console.log ("orden: "+ ingresesuorden + "cantidad: " + ingresecantidad)
// } else {
//     console.log ("todos los campos son obligatorios")
// }
