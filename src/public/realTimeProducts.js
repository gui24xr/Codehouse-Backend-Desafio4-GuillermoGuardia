

const socket = io()

//socket.emit('evento1','Server estas ahi?')

//Recibo la lista de productos x socket y construyo la lista con el dom.
socket.on('eventProducts',(data)=>{

    //Agregamos los elementos al dom en nuestra div grid donde van los productos y tiene id='containerproducts'
    //Pero antes limpiamos el container xq como esto escucha constantemente va a agregar cada vez que escuche.
    const containerProducts = document.getElementById('containerproducts')

    //Con esto limpio
    if (containerProducts) {
        // Elimina todos los nodos hijos
        while (containerProducts.firstChild) {
          containerProducts.removeChild(containerProducts.firstChild);
        }
      } else {
        console.error('El elemento con el ID especificado no existe.');
      }

    //Recorro el array y x cada elemento agrego el product Al container
    data.forEach(item =>addProductCartToContainer(containerProducts, item.title, item.price, item.productID))
 })


 function deleteProduct(productId){
    //Al ejecutarse esta funcion a travez del boton hacemos socket.emit  enviamos el id a eliminar-
    //Entonces el server escucha y hace lo necesario para eliminar ese id.
    console.log('Se apreto ', productId) 
    socket.emit('deleteProduct',productId)
}

//Agrego evento al boton enviar del form.
document.getElementById('btnEnviar').addEventListener('click',()=>{
  addProduct()
})

function addProduct(){
  console.log('Funciona boton.')
  const productObject = {
    title : document.getElementById('input-title').value,
    description : document.getElementById('input-description').value,
    code : document.getElementById('input-code').value,
    price : document.getElementById('input-price').value,
    stock : document.getElementById('input-stock').value,
    status : document.getElementById('input-status').value,
    thumbnails: []//Provisorio 
  }
  //Envio el mensaje al server.
  socket.emit('addProduct',productObject)
}