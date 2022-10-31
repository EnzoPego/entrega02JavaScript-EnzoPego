const productos = [
    { nombre : 'Teclado' , precio : 150 },
    { nombre : 'Mouse' , precio : 50 },
    { nombre : 'Monitor' , precio : 350 },
]


let carrito = []




let respuestaUsuario = prompt('Hola, desea comprar algun producto? \n Responda con Si o No')



while (respuestaUsuario != 'si' && respuestaUsuario != 'no' ){
    alert('Por favor ingresar SI o NO')
    respuestaUsuario = prompt('Desea realizar una compra?').toLocaleLowerCase()
}



if( respuestaUsuario == 'si'){
    alert('Esta es nuestra lista de productos')
    let todosLosProductos = productos.map((producto)=> `\n${producto.nombre} $${producto.precio}`)
    alert(todosLosProductos.join())
    
}else if (respuestaUsuario == 'no') {
    alert('Gracias por venir, hasta pronto!')
}

while ( respuestaUsuario != 'no') {
    let producto = prompt('Agregue un producto a su carrito').toLocaleLowerCase()
    let precio = 0

    if( producto == 'teclado' || producto == 'mouse' || producto == 'monitor'){
        
        switch ( producto) {
            case 'teclado':
                precio = 150
                break
            case 'mouse':
                precio = 50
                break    
            case 'monitor':
                precio = 350 
                break   
        }
        let unidades = parseInt(prompt('Cuantas unidades quiere llevar?'))
        carrito.push({ producto, unidades, precio })

    } else {
        alert('Producto no disponible')
    }

    respuestaUsuario = prompt('Desea agregar mas productos?').toLocaleLowerCase()

    while ( respuestaUsuario == 'no') {
        alert('Gracias por su compra')
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
    
}

const total = carrito.reduce((acumulador, elemento) => + acumulador + elemento.precio * elemento.unidades ,0)
alert(`El total a pagar por sus productos es: $${total}`)