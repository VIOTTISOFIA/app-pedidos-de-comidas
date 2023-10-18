let nombreUsuario = prompt (" Nombre de usuario")
let apellidoUsuario = prompt ("Apellido del usuario")
if ((nombreUsuario != "") && ( apellidoUsuario != "")) {
    console.log ("Nombre:  " + nombreUsuario  + "Apellido: " + apellidoUsuario) 
} else {
        console.log ("todos los campos son obligatorios")
}

// const nombre = document.querySelector ("nombreUsuario")
// console.log ("nombre")
// const apellido = document.getElementsByTagName ("apellidoUsuario")
// console.log ("apellido")

const title = document.querySelector ("h1").textContent = "Welcome to Smart Order"
console.log (title)


const burgerList = [
    {id: 1, title: "Homestyle Bacon pepper", precio: 1500, imagen: "img/fast-food (1).png", Desc:"Desc:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 2, title: "Chicken salsa cheese", precio:2000, imagen: "", Desc:"Desc:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 3, title: "Cheeseburger", precio:3000, imagen:"",Desc:"Desc:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 4, title: "Big tasty bacon menu", precio: 3500, imagen: "", Desc:"Desc:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", }

];
// console.log (burgerList)

// for (let c of burgerList ) {
//     let contenedor = document.createElement ("div")
// contenedor.innerHTML =  `
// <h4>Burger:${c.title}</h4>
// <h5>Precio:${c.precio}</h5>
// <p>Description: ${c.Desc}</p>
// <button class= "btn btn-primary"> Add order </button>
// `
// document.body.appendChild(contenedor)
// }


const burgerList2 = [
    {id: 5, title: "Big tasty bacon menu", precio:3500, imagen: ""},
    {id: 6, title: "Double big tasty bacon", precio:4000, imagen:""},
    {id: 7, title: "Quarter pounder menu", precio: 5000, imgen:""}
];

//CONCATENACION 

const newlist = burgerList.concat(burgerList2);

console.log (newlist)

//FILTER

let resultado = burgerList.filter ((p)=> p.precio <= 2500)
console.log(resultado)

//REDUCE

const carrito = [
    {id: 3, title: "Cheeseburger", precio:3000, imagen:"",Desc:"Desc:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 4, title: "Big tasty bacon menu", precio: 3500, imagen: "", Desc:"Desc:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 6, title: "Double big tasty bacon", precio:4000, imagen:""},
    {id: 7, title: "Quarter pounder menu", precio: 5000, imgen:""}
]
const total = carrito.reduce((accumulador, carrito) => accumulador + carrito.precio,0);
console.log (total)

//PUSH 
const newBurger = [{id: 8, title: "Basic burger ,menu", precio: 3500, imgen:""}]
carrito.push (newBurger)
console.log (carrito)




const productos = ["burger", "soda", "fries"]
productos.push ("mayo")
console.log (productos)

// JOIN
console.log (productos.join(" / "));
// // crear un algoritmo con un condicional 

// let medioPago1 = "efectivo"
// let medioPago2 = "financiado"

// let medioPago = prompt ("Como desea abonar?")

// if ((medioPago == "efectivo") || (medioPago == "financiado")){
// console.log ("El pago se efectua: "+ medioPago) 
// } else {
// console.log ("Forma de pago incorrecta")
// }




// crear un algoritmo utilizando un ciclo

// let orden = prompt ("Que deseas ordenar?")
// let burgerPrecio = [2000, 2500, 3000]
// switch (orden) {
// case "original burger":
// console.log (`Vas a ordenar ${orden} el monto total de tu orden es de ${burgerPrecio[0]}`)
//     break; 
//     case "bacon cheeseburger":
//         console.log (`Vas a ordenar ${orden} el monto total de tu orden es de ${burgerPrecio[1]}`)
//     break;
//     case "the big cheeseburger":
//         console.log (`Vas a ordenar ${orden} el monto total de tu orden es de ${burgerPrecio[2]}`)
//     break;
//     default:
//         console.log ("Vas a elegir otra alternativa")
//         break;
// }
//  //FOR-bucle

// let cantidad = parseInt (prompt ("Ingrese una cantidad"))
// for (let i=1; i<=10; i++) {
//     let resultado = cantidad * i
// console.log (`${cantidad} x ${i}= ${resultado}`)
// }













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


// 



// //OBJECT CONSTRUCTOR

// function Producto (nombre, precio ) {
//     this.nombre = nombre
//     this.precio =precio
// }

// const producto2 = new Producto ("Teclado", 1000)
// const producto3 = new Producto ("Mouse", 500)

// console.log(producto2)

// // EJEMPLO CON OBJETO 

// class cliente {
//     constructor (nombre, acceso) {
//         this.nombre = nombre
//         this.acceso = acceso
//         //metodo -> acciones del objeto
//         this.tomarOrden = function () {
//             console.log ("Hola"+ " " + this.nombre," que vas a ordenar?")
//         }
//     }
// }
// // Instanciar 
// const matias = new cliente ("matias", "aceptado")
// matias.tomarOrden ()


//ARRAY 

//Ejemplos para cargar datos y almacenarlos en un array - al ppio recibo un array vacio 

// const listaNombres = []
// let cantidad = 5 

// do {
//     let entrada = prompt("Ingrese un nombre")
//     listaNombres.push (entrada)
//     console.log (listaNombres.length) 
// } while (listaNombres.length != cantidad);

// // para agregar o concatener mas valores 

// const nuevaLista = listaNombres.concat (["martin", "carlos", "betty"])


// console.log(nuevaLista) 



// para ver los productos que tengo en el carrito , ver el detalle
// FOR OF (recorre una lista de objetos)

// const list = [
//     {id: 1, burgertype: "Homestyle Bacon pepper", precio: 1500, imagen: ""},
//     {id: 2, burgertype: "Chicken salsa cheese", precio:2000, imagen: ""},
//     {id: 3, burgertype: "Cheeseburger", precio:3000, imagen:""},
//     {id: 4, burgertype: "Big tasty bacon menu", precio: 3500, imagen: ""}

// ];

// const list2 = [
//     {id: 5, burgertype: "Big tasty bacon menu", precio:3500, imagen: ""},
//     {id: 6, burgertype: "Double big tasty bacon", precio:4000, imagen:""},
//     {id: 7, burgertype: "Quarter pounder menu", precio: 5000, imgen:""}
// ];
// // for (const burger of list) {  
// //     console.log (burger.burgertype) 
// // } 

// // for (let i=0; i < 4; i ++ ) {
// //     console.log (list [i]);
// // }

// const newlist = list.concat(list2);

// console.log (newlist)