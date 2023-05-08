import { Router } from 'express'
import { ProductManager } from '../productManager.js'

const realTimeRouters = Router()

const myProductManager = new ProductManager('./products.txt')

realTimeRouters.get('/', async (req, res) => {
  req.io.on('connection', (socket) => {
    console.log('Client connected')

    socket.on('newProduct', async (product) => {
      const products = await myProductManager.getProducts()

      myProductManager.addProduct(product)

      products

      req.io.emit('products', products)
    })
  })
  res.render('realTimeProducts')
})

export default realTimeRouters