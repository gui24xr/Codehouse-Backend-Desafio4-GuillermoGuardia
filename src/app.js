
import express  from "express";
import exphbs from 'express-handlebars'
import {Server} from 'socket.io'

// Importacion de rutas.
import {router as routerViews} from './routes/views.router.js'
import {router as routerTest} from './routes/testspages.router.js'
import {router as routerCarts } from './routes/carts.router.js'
import {router as routerProducts} from './routes/products.router.js'

import cors from "cors"
import bodyParser from 'body-parser'

//crecion de instancia de express.
const PUERTO = 8080
const app = express()

//Configuracion handlebars
//handlebars configuration.
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
app.set("views","./src/views")


//Configuracion carpeta public
app.use(express.static('./src/public'));

//Middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Especifica el dominio de tu aplicación web
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Especifica los métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });



//Routes : le decimos a la app de express que debe usar las rutas de los router
app.use('/',routerViews)
app.use('/',routerTest)
app.use('/',routerCarts) 
app.use('/',routerProducts)

//Creo una referencia y pongo el server a escuchar en puerto 8080.
const httpServer = app.listen(PUERTO,()=>{
    console.log(`Escuchando en puerto ${PUERTO}`)
})

export const io = new Server(httpServer)
