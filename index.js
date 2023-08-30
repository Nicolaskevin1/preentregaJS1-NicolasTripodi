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

/*
{
    alert("El valor en pesos del" + " " + moneda + " " +"es" + " " + "$" + cantidad * 740);
}
*/