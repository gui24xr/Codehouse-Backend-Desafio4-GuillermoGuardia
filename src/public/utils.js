
function addProductCartToContainer(instanciaDom,productName,productPrice,productId) {
    // Crear el contenedor principal
    const contenedorProducto = document.createElement('div');
    contenedorProducto.className =
      'bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative';
  
    // Crear el ícono en la esquina superior derecha
    const iconoContenedor = document.createElement('div');
    iconoContenedor.className =
      'bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4';
  
    const svgIcono = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcono.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgIcono.setAttribute('width', '18px');
    svgIcono.setAttribute('class', 'fill-gray-800 inline-block');
    svgIcono.setAttribute('viewBox', '0 0 64 64');
  
    const pathIcono = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathIcono.setAttribute(
      'd',
      'M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
    );
    pathIcono.setAttribute('data-original', '#000000');
  
    svgIcono.appendChild(pathIcono);
    iconoContenedor.appendChild(svgIcono);
  
    // Crear la sección de la imagen del producto
    const contenedorImagen = document.createElement('div');
    contenedorImagen.className =
      'max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8';
  
    const imagenProducto = document.createElement('img');
    imagenProducto.src = '/images/product1.jpeg'; //'https://readymadeui.com/images/coffee1.webp';
    imagenProducto.className = 'h-full w-full object-contain';
  
    contenedorImagen.appendChild(imagenProducto);
  
    // Crear la sección de texto del producto
    const contenedorTexto = document.createElement('div');
    contenedorTexto.className = 'text-center mt-4';
  
    const tituloProducto = document.createElement('h3');
    tituloProducto.className = 'text-lg font-bold text-gray-800';
    tituloProducto.textContent = productName;
  
    const precioProducto = document.createElement('h4');
    precioProducto.className = 'text-xl text-gray-700 font-bold mt-4';
    precioProducto.textContent = '$'+productPrice;
  
    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.className = "my-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click',()=>{
        console.log('Se clickeo id: ', productId)
        deleteProduct(productId)
        
    })
  
    const idTag = document.createElement('p')
    idTag.className= "text-sm text-gray-500 truncate dark:text-gray-400"
    idTag.innerHTML= 'Producto Id:' + productId + '.'

    contenedorTexto.appendChild(tituloProducto);
    contenedorTexto.appendChild(precioProducto);
    contenedorTexto.appendChild(botonEliminar);
    contenedorTexto.appendChild(idTag)
  
    // Agregar los elementos al contenedor principal
    contenedorProducto.appendChild(iconoContenedor);
    contenedorProducto.appendChild(contenedorImagen);
    contenedorProducto.appendChild(contenedorTexto);
  

   




    // Agregar el contenedor principal al DOM
    instanciaDom.appendChild(contenedorProducto);
  }



  

