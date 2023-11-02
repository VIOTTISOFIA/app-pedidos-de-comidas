// console.log (document.body)



// let nombreUsuario = prompt (" Nombre de usuario")
// let apellidoUsuario = prompt ("Apellido del usuario")
// if ((nombreUsuario != "") && ( apellidoUsuario != "")) {
//     console.log ("Nombre:  " + nombreUsuario  + "Apellido: " + apellidoUsuario) 
// } else {
//         console.log ("todos los campos son obligatorios")
// }

// const nombre = document.querySelector ("nombreUsuario")
// console.log ("nombre")
// const apellido = document.getElementsByTagName ("apellidoUsuario")
// console.log ("apellido")

const titulo = document.querySelector ("h1").textContent = "Welcome to Smart Order"
console.log (titulo)


const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modal-container")




const Options = [
    {id: 1, category:"BURGER",title: "Homestyle Bacon pepper", precio: 1500, img:"./img/burger.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 2, category:"BURGER",title: "Chicken salsa cheese", precio:2000, img:"./img/burger.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 3, category:"BURGER", title: "Cheeseburger", precio:3000, img:"./img/burger.png",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 4, category:"BURGER",title: "Big tasty bacon menu", precio: 3500, img:"./img/burger.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 5, category:"PIZZA", title: "Margherita", precio: 1500, img: "./img/pizza.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 7, category:"PIZZA", title: "Capricciosa", precio:2000, img: "./img/pizza.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 8, category:"PIZZA",title: "Quatro stagione", precio:3000, img: "./img/pizza.png",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 9, category:"PIZZA", title: "Hawaii", precio: 3500, img: "./img/pizza.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 10, category:"ITALIAN", title: "Pane con carne e prezzemolo", precio: 1500, img:"./img/pasta.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 11, category:"ITALIAN", title: "Bruschetta", precio:2000, img:"./img/pasta.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 12, category:"ITALIAN", title: "Carpaccio di bresaola", precio:3000, img:"./img/pasta.png",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 13, category:"ITALIAN", title: "Calzone", precio: 3500, img:"./img/pasta.png", Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", }

];
let carrito = JSON.parse(localStorage.getItem("carrito"))||[];

const $contenedorProductos = document.querySelector("#shopContent")
const BOTONES = ["BURGER","PIZZA","ITALIAN"]

function filterProductos(categoria) {
    // const productosFiltrados = Options.filter((producto)=> producto.category === categoria) FILTER EN UNA SOLA LINEA, RETURN IMPLICITO

    const productosFiltrados = Options.filter ((producto)=>{
        return producto.category === categoria; 
    })

    return productosFiltrados
}

function renderizarProductos (productos){
    $contenedorProductos.innerHTML = "";

    productos.forEach ((producto) => {
        console.log(productos)
    const $div = document.createElement("div")
    $div.classList.add('producto');
    $div.innerHTML = `
        <img src="${producto.img}" alt="${producto.title}>
        <p class="price">${producto.precio} $</p>
        <h6>${producto.Desc}</h6>
        `;
    $contenedorProductos.appendchild($div);
})

    

// productos.forEach ((items) => {
//     let content = document.createElement("div")
// content.className = "card"
//     content.innerHTML = `
//     <img src="${items.img}">
//         <h4>${items.title}</h4>
//         <p class="price">${items.precio} $</p>
//         <h6>${items.Desc}</h6>
//     `;
//     $contenedorProductos.append(content)
// }
//     shopContent.append(content)
    
//     let addOrder = document.createElement ("button")
//     addOrder.innerText = "Add Order"
//     addOrder.className = "Add Order"
//     content.append(addOrder)

    // addOrder.addEventListener("click", () => {
    //     carrito.push({
    //         id:items.id,
    //         img: items.title,
    //         precio: items.precio
    //     })
    //     console.log(carrito)
    //     saveLocal ()
    // })

}
renderizarProductos(Options)


// verCarrito.addEventListener("click",()=>{
//     const modalHeader = document.createElement ("div")
// modalHeader.innerHTML = `
// <h1 class="modal-header-title">Carrito.</h1>
// `
// modalContainer.append(modalHeader)


// const modalHeaderbutton = document.createElement("h1")
// modalHeaderbutton.innerText ="X"
// modalHeaderbutton.className = "modal-header-button"
// modalHeader.append(modalHeaderbutton)

// carrito.forEach( (items) => {
//     let carritoContent = document.createElement("div")
//     carritoContent.className = "modal-content"
//     carritoContent.innerHTML = `
//         <img src="${items.img}">
//         <h4>${items.title}</h4>
//         <p class="price">${items.precio} $</p>
//         <h6>${items.Desc}</h6>
//     `

// modalContainer.append(carritoContent)
// })

// const total = carrito.reduce ((acc, items) => acc + items.precio, 0)

// const totalBuying = document.createElement("div")
// totalBuying.className = "total-content"
// totalBuying.innerHTML = `total a pagar: ${total}$` 

// modalContainer.append(totalBuying)

// })


 // Filter Items

function renderizarBotones (){
    const contenedorBotones = document.querySelector ("#btn-container")
    BOTONES.forEach((categoria)=> {
        const $button = document.createElement ("button")
        $button.classList.add('btn')
        $button.textContent = categoria
        $button.addEventListener("click", ()=>{
            const productosFiltrados = filterProductos(categoria)
            renderizarProductos(productosFiltrados)
        })
        contenedorBotones.appendChild($button)
    })
}

renderizarBotones()



//set Item 

const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito))
}



// filterBtns.forEach((btn)=> {
//     btn.addEventListener ("click", (e) => {
//         // const Options = e.currentTarget.dataset.id
//         const OptionsCategory = Options.filter((items) => { 
//         if (OptionsCategory.category === category)
//         console.log(OptionsCategory)
        
//     {
// return OptionsCategory;
// }
//     })
// else if (category === "ALL") {
//     (Options)
// } else {
// (OptionsCategory)
// } 
// })
// })



        // const OptionsCategory = Options.filter((bur)=> {
        //     if (BURGER.category === "BURGER") {
        //         console.log(burger)
        //     } else if (PIZZA.category === "PIZZA") {
        //         console.log(pizza)
        //     } else (ITALIAN.category === "ITALIAN") {
        //         console.log(italian)
        //     }
        // })

        // opcion de Luis

//         const OptionsCategory = Options.filter((BURGER)=> {
//         BURGER.category ="BURGER"
// })
//             console.log(OptionsCategory)

        
            
        

        // const OptionsCategory2 = Options.filter((bur)=> 
        // PIZZA.category === "PIZZA" {
        //     console.log(pizza)
        // })

        // const OptionsCategory3 = Options.filter((bur)=> 
        // ITALIAN.category === "ITALIAN" {
        //     console.log(italian)







// function displayOptionsItems (OptionsItems) {
//     let displayOptions = OptionsItems.map(function (item) {

//     return `<article class="OptionsItem">
//     <img src=${item.img} class="photo" alt=${item.title}>
//         <div class="contenedor">
//                             <header>
//                                 <h4>${item.title}</h4>
//                                 <h5>${item.precio} </h5>
//                                 <h6>${item.Desc}</h6>
//                                 <h6>${item.imagen}</h6
                            
//                             </header>
                            
// </article>`
    
    
// })
//     // displayOptions = displayOptions.join("");
//     // sectioncenter.innerHTML = displayOptions
//     }

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


//EVENTO 

// // const contenedor = document.querySelector (".burger")
// // contenedor.addEventListener("mouseenter",()=> {console.log ("mouse dentro del container")})

// // console.log (contenedor)


// // const boton = document.querySelector ("#boton")
// // boton.addEventListener ("click", ()=> {alert ("me diste click")})

// // const nombreinput = document.querySelector ("#name")

// // nombreinput.addEventListener ("keydown", ()=> {console.log ("Escribiendo")})
// // console.log (nombreinput)}
