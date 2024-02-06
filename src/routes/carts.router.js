import express from 'express'
import { cartsManager } from '../controllers/carts-manager.js'
//Importo la instancia que maneja productos que esta activa ya.
import { productManager } from './products.router.js'

//Manejo de los recursos de mi servidor
const PATHFILECARTS = './src/models/carrito.json'
const myCartsManager = new cartsManager(PATHFILECARTS)

//Creo mi instancia de objeto Router
export const router = express.Router()


router.get('/api/carts/:cid',(req,res)=>{
    
   const {cid} = req.params
    //Pido el carro al manager y como se que devuelve undefined si no lo encuentra.
    if (myCartsManager.existCart(cid)){
        const products = myCartsManager.getProducsFromCart(cid)
        res.json({'Carro ID':cid,'Lista de productos':products})
    }
    else{
        res.send(`No existe el carro id ${cid}`)
    }
        
   

})

router.post('/api/carts',async (req,res)=>{
    //Obtengo la response del cliente con lo cual creare el carrito
    try{
        const clientRequestBody = req.body
        //console.log('Recibido: ',clientRequestBody)
        const createdCartId = await myCartsManager.createCart()
        res.json({'Carro creado id:':createdCartId})
        }
    catch(error){
        console.log('Error al crear carrito !.', error)
        res.status(500).json({error: 'Error del servidor'})
    }
})


router.post('/api/carts/:cid/products/:pid',async(req,res)=>{
    /*
    Me pide agregar el producto de pid al cart de cartId
    */
    try{
        const {cid:cartId,pid:productId} = req.params
        //Obtengo el productos.
        //const productToAdd = await productManager.getProductById(productId)
        //Agrego el producto en cantidad 1
        await myCartsManager.addProductInCart(cartId,productId,1)
        
        res.send('taca')
    }
    catch{
        console.log('Error al ingresar el producto carrito !.', error)
        res.status(500).json({error: 'Error del servidor'})
    }
})
