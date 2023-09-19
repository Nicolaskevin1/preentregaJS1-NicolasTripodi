/*
    -Basicamente, consiste en preguntar al usuario que tipo de moneda desea
    -Si desea vendernos o comprarnos 
    -Que cantidad desea 
    -Se le brindara el valor exacto en pesos de la moneda y de la cantidad que desea
*/
function saludar(){
    alert("¡Hola tutor!");
}
saludar();
/*
let moneda = (prompt("¿Que tipo de moneda quieres comprar?"));
let compraVenta = (prompt("¿Quieres comprar o vender?"));
let cantidad = +(prompt("¿Que cantidad deseas?"));

if (moneda === "Dolar Blue" || moneda === "Dolar blue" || moneda === "dolar blue" || moneda === "dolarblue" || moneda === "DolarBlue")
if (compraVenta === "Comprar" || compraVenta === "comprar" || compraVenta === "Compra" || compraVenta === "compra") {
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 730);
}else if(compraVenta === "Venta" || compraVenta === "venta" || compraVenta === "Vender" || compraVenta === "vender"){
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 740);
}
if (moneda === "Euro" || moneda === "euro" || moneda === "Euros" || moneda === "euros") 
if (compraVenta === "Comprar" || compraVenta === "comprar" || compraVenta === "Compra" || compraVenta === "compra") {
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 800);
}else if(compraVenta === "Venta" || compraVenta === "venta" || compraVenta === "Vender" || compraVenta === "vender"){
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 815);
}
if (moneda === "Peso Chileno" || moneda === "Peso chileno" || moneda === "peso chileno" || moneda === "PesoChileno" || moneda === "Pesochileno" || moneda === "pesochileno") 
if (compraVenta === "Comprar" || compraVenta === "comprar" || compraVenta === "Compra" || compraVenta === "compra") {
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 0.40);
}else if(compraVenta === "Venta" || compraVenta === "venta" || compraVenta === "Vender" || compraVenta === "vender"){
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 0.45);
}
if (moneda === "Real" || moneda === "real") 
if (compraVenta === "Comprar" || compraVenta === "comprar" || compraVenta === "Compra" || compraVenta === "compra") {
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 69);
}else if(compraVenta === "Venta" || compraVenta === "venta" || compraVenta === "Vender" || compraVenta === "vender"){
    alert("La" + " " + compraVenta + " " +"en pesos del" + " " + moneda + " " + "es" + " " + "$" + cantidad * 72);
}
*/


/*
{
    alert("El valor en pesos del" + " " + moneda + " " +"es" + " " + "$" + cantidad * 740);
}
*/

/*

Probamos otro metodo 

*/
 /*let moneda = (prompt("¿Que tipo de moneda quieres comprar?"));
let cantidad = +(prompt("¿Que cantidad deseas?"));

const monedas = [
    { id: 1, moneda: "Dolar", precio: "$740" },
    { id: 2, moneda: "Euro", precio: "$815" },
    { id: 3, moneda: "Real", precio: "$72" },
    { id: 4, moneda: "Peso Chileno", precio: "$0.45" },
]
for (const moneda of monedas){
    console.log(moneda)
}
*/

function moneda(tipo, precio){
    this.tipo = tipo.toUpperCase();
    this.precio = parseFloat(precio);
    this.cantidad = function(){
        this.precio = this.precio ;
    }
}

const monedas = [];
monedas.push(new moneda("Dolar", "740"));
monedas.push(new moneda("Euro", "815"));
monedas.push(new moneda("Peso Chileno", "0.45"));
monedas.push(new moneda("Real", "72"));
console.log(monedas)
for (const moneda of monedas){
    moneda.cantidad();
    console.log('moneda = ' + moneda.tipo + ' precio = ' + moneda.precio)
}

let compra = (prompt("¿Que tipo de moneda quieres comprar?"));
let Cantidad = +(prompt("¿Que cantidad quieres comprar?"));
if (compra === "dolar" || compra === "Dolar" || compra === "DOLAR")
alert("Tu compra de Dolares" + " " + "en pesos es" + " " + Cantidad * this.precio );



