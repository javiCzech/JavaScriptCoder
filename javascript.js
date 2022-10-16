class Producto{
    constructor(id,nombre,marca,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.stock = stock
    }
    //Futuramente lo voy a utilizar junto con la minipulacion del DOM para disminuir el stock a medida que se selecciona para comprar un producto.
    restarStock(){
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
}

//Creamos los productos para vender

const producto0 = new Producto(0,"Teclado Gamer", "Logitech",4000,5);
const producto1 = new Producto(1,"Auricular Gamer", "Logitech",5000,4);
const producto2 = new Producto(2,"Mouse inalambrico", "Corsair",6000,6);
const producto3 = new Producto(3,"Mouse Gamer", "RedDragon",3000,3);
const producto4 = new Producto(4,"Monitor Gamer", "Asus",40000,3);
const producto5 = new Producto(5,"Mouse Pad", "Razer",2000,2);

const misProductos = [producto0,producto1, producto2,producto3,producto4,producto5];

let precio = 0;
let acumulador = 0;
let terminar = 0;
let productoElegido;
const conjuntoDeProductos = [];

alert("Bienvenido a Computotal, cadena NRO 1 de ventas de electrodomesticos");


//Switch para elegir la opcion de comprar, Formas de pago o salir.
while (terminar == 0) {
    let opcion = parseInt(prompt("Seleccione: \n1.-Para ingresar al menu de compras \n2.-Para seleccionar metodos de pago \n3.-Para salir"));
    switch (opcion) {
        case 1:
            let continuar = 0;
            while (continuar == 0) {
                ;
                let seleccion = parseInt(prompt("Seleccione 1- Para comprar \n Seleccione 2- para ver el carrito de compras"));
                // Segundo switch para elegir que producto comprar.
                switch (seleccion) {
                    case 1:
                        let mensajeDeProductos = "Estos son nuestros productos a la venta: \n "
                //For of para mostrar la lista de los productos a la venta y elegir mediante prompt
                        for(items of misProductos){
                            mensajeDeProductos += `${items.id} ${items.nombre} ${items.marca} oferta en $${items.precio} Stock: ${items.stock} \n `
                        }

                        const opcionUser = parseInt(prompt(mensajeDeProductos));
                //Utilizacion del metodo find para seleccionar el item a comprar dentro del array de productos        
                        productoElegido = misProductos.find(item => item.id === opcionUser);
                // Metodo push para ingresar los items seleccionados al carrito de compras            
                        conjuntoDeProductos.push(productoElegido);
                // Acumulador de precio total a pagar        
                        precio = precioFinal(productoElegido.precio,precio);

                        break;
                    case 2:
                        //Funcion para mostrar el carrito de compras y el precio total a pagar del carrito mediante un alert.
                        let carrito = "CARRITO DE COMPRAS: \n  \n "
                        for(producto of conjuntoDeProductos){
                            carrito += ` ${producto.nombre} ${producto.marca} $${producto.precio}  \n `
                        }
                        alert(carrito + "\n PrecioTotal: " +  precio);
                        break;
                    default: alert("Opcion invalida");
                        break;
                }
                alert("Usted lleva gastando un total de: $" + precio);
                continuar = prompt("Desea continuar comprando ? seleccione 0 para seguir comprando o seleccione el 3 para salir");
            }
            break;
        case 2:
            precio = formasDePago(precio);
            break;
        case 3:
            terminar = 1;
            break;
        default: alert("Opcion invalida");
            break;
    }
    alert("Gracias por su compra");
}
// Funcion para sumar los precios de los productos y devolver el acumulado para ver el total de la compra.
function precioFinal(productoElegido, acumulador) {
    acumulador +=  productoElegido;
    return acumulador;
}


//Funcion para mostrar el acumulado sin modificar pagando con debito y moficandolo al pagar con tarjeta de credito en mas de 3 cuotas.
function formasDePago(acumulador) {
    alert("Seleccione una forma de pago, teniendo en cuenta que si compra con debito no tendra recargo, de lo contrario abonando con credito tendra 3 cuotas sin interes y si desea hacerlo en mas coutas sera con un %35 de recargo");
    let cort = 0;
    while (cort == 0) {
        let abono = parseInt(prompt("Seleccione 1.- Para abonar con debito\nSeleccione 2.- Para abonar Credito"));

        if (abono == 1) {
            alert("El total a pagar es de: $" + acumulador);
            cort = 1;
        }
        else if (abono == 2) {
            let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desee hacer, si lo hace en 3 no tendra interes alguno de lo contrario el interes sera de una %35"));
            if (cuotas <= 3) {
                let pagar = acumulador / cuotas;
                alert("Usted pagara un total de: $" + acumulador + " En: " + cuotas + " De: $" + pagar + " Cada cuota");
            }
            else {
                acumulador = acumulador + (acumulador * 0.35);
                pagar = acumulador / cuotas;
                alert("Usted pagara un total de: $" + acumulador + " En: " + cuotas + " De: $" + pagar + " Cada cuota");
            }
            cort = 1;
        }
        else {
            alert("Seleccion invalida");
        }
    }
    return acumulador;
}


//Funcion para buscar un producto mediante un input (Futuramente lo voy a utilizar con la minupulacion del DOM en mi proxima entrega)
//Lo deje comentado para que no se ejecute, funciona bien el codigo pero prefieron mostrarlo con el DOM en vez de console.table o alerts.

// let buscar = prompt("Escriba el nombre del producto que quiere comprar");
// const productoBuscado = misProductos.filter((item) => item.nombre.includes(buscar));
// console.table(productoBuscado);

//Funcion para ordenar mi pagina de productos mediante menor a mayor precio o viceversa(Futuramente lo voy a utilizar con la minupulacion del DOM en mi proxima entrega)

misProductos.sort((a,b) => a.precio - b.precio);//ascendente
// console.log(misProductos);
misProductos.sort((a,b) => b.precio - a.precio);//descendente
// console.log(misProductos);



