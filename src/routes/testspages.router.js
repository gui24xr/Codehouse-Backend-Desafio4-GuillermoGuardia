import path from 'path'
import express from 'express'

export const router = express.Router()


/* estas rutas pertenecen al test de la app */
router.get('/welcome',(req,res)=>{
    const welcomePageFile = path.join(process.cwd(),'test','welcome.html');
    console.log('ruta: ', welcomePageFile)
     res.sendFile(welcomePageFile);
    
})

router.get('/test',(req,res)=>{
    const htmlPath = path.join(process.cwd(), 'test', 'mytest.html');
    res.sendFile(htmlPath);
})

