

const pintarCarrito = () => {
    modalContainer.innerHTML ="",
    modalContainer.style.display = "flex"
const modalHeader = document.createElement ("div")
modalHeader.innerHTML = `
<h1 class="modal-header-title">Carrito.</h1>
`;
modalContainer.append(modalHeader)

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
        <p>Cantidad: ${producto.quantity}</p>
    `;

    modalContainer.append(carritoContent);
    console.log(carrito.length)

let cancel = document.createElement("span")
    cancel.innerText = "❌"
    cancel.className = "delete-product"
    carritoContent.appendChild(cancel)

cancel.addEventListener("click", cancelProducto)
// button Alert Sweet 
    cancel.addEventListener("click", (cancelProducto)=> {
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Item was successfully deleted",
  showConfirmButton: false,
  timer: 1500
});
    })
})







const total = carrito.reduce ((acc, producto) => acc + producto.precio, 0)

const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `Total to pay: ${total}$` 
modalContainer.append(totalBuying)
}
verCarrito.addEventListener("click", pintarCarrito)

const cancelProducto = () => {
    const foundId = carrito.find((element) => element.id)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId

})
    carritoCounter()
    pintarCarrito()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length
}

