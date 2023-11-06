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


const form = document.getElementById("form")
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
$contenedorProductos.innerHTML = ' ';

    productos.forEach ((producto) => {
    const $div = document.createElement("div")
        $div.className = "card";
        $div.innerHTML = `
        <img src="${producto.img}">
        <h4>${producto.title}</h4>
        <p class="price">${producto.precio} $</p>
        <h6>${producto.Desc}</h6>
        `;
        $contenedorProductos.appendChild($div);

    let addOrder = document.createElement("button")  
    addOrder.innerText = "Add Order"
    addOrder.className = "Add Order"
    $div.appendChild(addOrder)  

    addOrder.addEventListener("click", () => {
         carrito.push({
            id:producto.id,
            img: producto.img,
            title: producto.title,
            precio: producto.precio,
    
        })
        console.log(carrito)
        saveLocal()
        })
})
verCarrito.addEventListener("click",()=>{
    modalContainer.innerHTML ="",
    modalContainer.style.display = "flex"
const modalHeader = document.createElement ("div")
modalHeader.innerHTML = `
<h1 class="modal-header-title">Carrito.</h1>
`;
modalContainer.appendChild(modalHeader)

const modalHeaderbutton = document.createElement("h1")
modalHeaderbutton.innerText ="X"
modalHeaderbutton.className = "modal-header-button"

modalHeaderbutton.addEventListener("click",() => {
    modalContainer.style.display = "none"
})
modalHeader.append(modalHeaderbutton)

carrito.forEach( (producto) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${producto.img}">
        <h4>${producto.title}</h4>
        <p class="price">${producto.precio} $</p>
    `;

modalContainer.append(carritoContent)
})
const total = carrito.reduce ((acc, producto) => acc + producto.precio, 0)

const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `Total to pay: ${total}$` 
modalContainer.append(totalBuying)
})
}
renderizarProductos(Options)

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

//FORM 

form.addEventListener("submit", function(event){
    event.preventDefault()
    var username = document.getElementById("username").value
    console.log(username)
     var email = document.getElementById("email").value
    console.log(email)
    form.reset ()
})