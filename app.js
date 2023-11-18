// console.log (document.body)


const form = document.getElementById("form")
const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById ("cantidadCarrito")






let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const $contenedorProductos = document.querySelector("#shopContent")
const BOTONES = ["BURGER","PIZZA","ITALIAN"]


const getProductos = async () => {
const response = await fetch("data.json")
    const data = await response.json ()
    console.log(data)

function filterProductos(categoria) {
    // const productosFiltrados = Options.filter((producto)=> producto.category === categoria) FILTER EN UNA SOLA LINEA, RETURN IMPLICITO

    const productosFiltrados = data.filter ((producto)=>{
        return producto.category === categoria; 
    })

    return productosFiltrados
}


function renderizarProductos (data){
$contenedorProductos.innerHTML = ' ';

    data.forEach ((producto) => {
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
    addOrder.className = "AddOrder"
    $div.appendChild(addOrder)  

    addOrder.addEventListener("click", () => {
        const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id)

        if (repeat) {
            carrito.map((prod)=> {
                if (prod.id === producto.id) {
                    prod.quantity++
                }
            })
        }else {
        carrito.push({
            id:producto.id,
            img: producto.img,
            title: producto.title,
            precio: producto.precio,
            quantity: producto.quantity
    
        })
        }
        console.log(carrito)
        carritoCounter ()
        })
    })
}
renderizarProductos(data)


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
}
getProductos()



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