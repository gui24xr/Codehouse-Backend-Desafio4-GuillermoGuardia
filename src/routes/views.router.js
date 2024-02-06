import express from 'express'
//importo la instancia ya creada.
import { productManager } from './products.router.js'
import { io } from '../app.js'
export const router = express.Router()



router.get('/', async (req,res)=>{
    try{
        const products = await productManager.getProducts()
        res.render('home',{productsList:products})
    }
    catch(error){
        console.log('erorr')
    }
  
})
 
/*
router.get('/realtimeproducts',(req,res)=>{

    try{
                 
        io.on("connection", async (socket)=>{

             //Con este evento envio la lista de productos.
             socket.emit('eventProducts',await productManager.getProducts())

            //Con este on escucho que producto eliminar.
            socket.on('deleteProduct',async (data)=>{
                //Elimino los productos
                await productManager.deleteProduct(data)
                //Envio la lista actualizada reutilizando el eventProducts
                socket.emit('eventProducts',await productManager.getProducts())
            })

            socket.on('addProduct',async (data)=>{
                try{
                    console.log(data)
                    await productManager.AddProduct(data)
                    //Envio la lista actualizada reutilizando el eventProducts
                socket.emit('eventProducts',await productManager.getProducts())

                }
                catch(error){
                    console.log(error)
                }
                
            })





        })
        
    }
    catch(error){
        console.log(error)
    }


    
})

*/




router.get('/realtimeproducts',(req,res)=>{

    //Me conecto------------------------------------
    io.on("connection", async (socket)=>{
        //Envio los productos
        //Con este evento envio la lista de productos.
        socket.emit('eventProducts',await productManager.getProducts())

        //Cuando escuche deleteProducts.
        socket.on('deleteProduct',async(data)=>{
            await productManager.deleteProduct(data) //Borra
            socket.emit('eventProducts',await productManager.getProducts()) //manda lista

        })

        socket.on('addProduct',async(data)=>{
            await productManager.AddProduct(data) //agrega prudcto
            socket.emit('eventProducts',await productManager.getProducts()) //manda lista

        })


    })

    
    res.render("realTimeProducts")
})