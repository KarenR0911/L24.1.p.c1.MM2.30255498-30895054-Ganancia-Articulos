/*Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se 
desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de 
artículos con precio superior a 65$ 
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10, 
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70), 
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)  */

import Articulo from "./Articulo.js";
import Tienda from "./Tienda.js";

let art1= new Articulo("888", 10, 15);
let art2= new Articulo("777", 20, 25);
let art3= new Articulo("999", 15, 25);
let art4= new Articulo("666", 25, 35);
let art5= new Articulo("111", 50, 70);
let art6= new Articulo("333", 40, 50);
let art7= new Articulo("444", 80, 100);
let art8= new Articulo("222", 5, 10);

let tienda= new Tienda();

tienda.procersaArticulo(art1);
tienda.procersaArticulo(art2);
tienda.procersaArticulo(art3);
tienda.procersaArticulo(art4);
tienda.procersaArticulo(art5);
tienda.procersaArticulo(art6);
tienda.procersaArticulo(art7);
tienda.procersaArticulo(art8);

let salida= document.getElementById("Salida")
salida.innerHTML= `A contunuación se mostrarán los resultados: <br><br>`
salida.innerHTML+= `Promedio de los precios de venta: ${tienda.calcPromedio()}`
salida.innerHTML+= `<br>Cantidad de artículos con precio superior a 65$: ${tienda.devolverContArticulo()}`