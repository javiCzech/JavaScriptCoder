
let cantidad = 0;
let precio = 0;
let acumulador = 0;
let teclado = 2000;
let mouse = 1500;
let mousepad = 1000;
let monitor = 10000;
let terminar = 0;

alert("Bienvenido a Computotal, cadena NRO 1 de ventas de electrodomesticos");
//Switch para elegir la opcion de comprar, Formas de pago o salir.
while (terminar == 0) {
    let opcion = parseInt(prompt("Seleccione: \n1.-Para comprar \n2.-Para seleccionar metodos de pago \n3.-Para salir"));
    switch (opcion) {
        case 1:
            let continuar = 0;
            while (continuar == 0) {
                let Seleccion = parseInt(prompt("Seleccione 1.-Para Comprar teclado logitech por $2000\nSeleccione 2.-Para comprar mouse logitech por $1500\nSeleccione 3.-Para comprar mousePad logitech por $1000\nSeleccione 4.-Para comprar monitor MSI gamer por $10000"));
// Segundo switch para elegir que producto comprar y cuantos productos de cada uno comprar.
                switch (Seleccion) {
                    case 1:
                        cantidad = parseInt(prompt("Cuantos Teclados logitech quiere comprar?"));
                        console.log(cantidad);
                        total = teclado * cantidad;
                        console.log(total);
                        precio = SumaProductos(total, precio);
                        console.log(precio);
                        break;
                    case 2:
                        cantidad = parseInt(prompt("Cuantos Mouse Logitech quiere comprar?"))
                        console.log(cantidad);
                        total = mouse * cantidad;
                        console.log(total);
                        precio = SumaProductos(total, precio);
                        console.log(precio);
                        break;
                    case 3:
                        cantidad = parseInt(prompt("Cuantos MousePad Genius quiere comprar?"))
                        console.log(cantidad);
                        total = mousepad * cantidad;
                        console.log(total);
                        precio = SumaProductos(total, precio);
                        console.log(precio);
                        break;
                    case 4:
                        cantidad = parseInt(prompt("Cuantos Monitor Samsung quiere comprar?"))
                        console.log(cantidad);
                        total = monitor * cantidad;
                        console.log(total);
                        precio = SumaProductos(total, precio);
                        console.log(precio);
                        break;
                    default: alert("Opcion invalida");
                        break;
                }
                alert("Usted lleva gastando un total de: $" + precio);
                continuar = prompt("Desea continuar comprando ? seleccione 0 para seguir comprando o seleccione el 1 para salir");
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
//Funcion para sumar los precios de los productos y devolver el acumulado para ver el total de la compra.
function SumaProductos(precio, acumulador) {
    acumulador = acumulador + precio;
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







