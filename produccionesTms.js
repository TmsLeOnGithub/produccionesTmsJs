//OBJETOS

function Servicio (codigo,nombre,precio){
    this.codigo=codigo;
    this.nombre= nombre;
    this.precio= precio;
};

let servicio1= new Servicio (1,"Fotografia", 800);
let servicio2= new Servicio (2, "Video", 1200);
let servicio3= new Servicio (3,"drone",3000);

let servicios = [servicio1,servicio2,servicio3]; //array

console.log(servicios);

//CALCULAR COSTO DE SERVICIOS SELECCIONADOS

function calcularSubtotal (precioProducto, cantidadHoras){
    return (precioProducto * cantidadHoras);
 }

 function getPrecioProducto(productoDeseado) {

    const servicio = servicios.find(servicio => servicio.codigo === productoDeseado);

    if(servicio){
        return servicio.precio;
    }else  {
        alert("El codigo ingresado es inválido");
        solicitarCodigoProducto();
    }
}

//----------------------------------------------------------------------------------

function calcularPresupuesto() {
    let productoDeseado = parseInt(prompt("CODIGO 1 - FOTOS, CODIGO 2 - VIDEO, CODIGO 3 - DRONE"));
    let precioProducto = getPrecioProducto(productoDeseado);
    let cantidadHoras = parseInt(prompt("Ingrese cantidad de horas para el servicio elegido"));
    let subtotal = calcularSubtotal(precioProducto, cantidadHoras);
    return subtotal;
}


let total = 0;

let finalizado;

while(finalizado != "NO") {
    alert("A continuación ingrese el código del producto deseado");
    let subtotal = calcularPresupuesto();
    total = total + subtotal;

    finalizado = prompt("¿Desea sumar más servicios?").toUpperCase();
}


//cupon descuento

    let cuponDescuento= "KMP19Y22"
    let cuponIngresado=prompt("INGRESE CUPON DE DESCUENTO    (KMP19Y22)");
    if(cuponIngresado == cuponDescuento){
        total = total- 300    
        alert("se aplico el cupon de descuento")
    }

alert("el presupuesto total es: " + total);

//CUOTAS

let cuotas = parseInt(prompt("¿En cuantas cuotas queres pagar: 1,3,6,o 12?"))
if(cuotas===1||cuotas===3||cuotas===6||cuotas||12){
    let precioCuotas = total / cuotas
    alert("Serian " + cuotas + "cuotas de " + precioCuotas)
} else {
        alert ("Solo tenemos 1,3,6 y 12 cuotas")
}
    






