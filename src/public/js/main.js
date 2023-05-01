// La carpeta publica es el cliente 
const socket = io()
console.log('hola')

socket.on('mensaje', (info) => {
  console.log(info)
})

const formProduct = document.getElementById('formNewProduct')

formProduct.addEventListener('submit', (e) => {
  e.preventDefault()
  const productIterator = new FormData(e.target)
  const product = Object.fromEntries(productIterator)
  console.log(product)
  socket.emit('NewProduct', { product }) 
})


// socket.emit() => Enviar eventos 
// socket.on() => Escuchar eventos 