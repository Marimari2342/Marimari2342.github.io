/*  Ejercicios 1,2 Gobstones
    Ejercicios 3,4,5 JavaScrips

    EJERCICIO 1: Crea el programa que decore la torta en la forma
    solicitada. El cabezal comienza en el extremo suroeste y no 
    importa donde termina.

    Program {
        Poner(Verde)
        IrAlBorde(Norte)
        Poner(Verde)
        IrAlBorde(Este)
        Poner(Verde)
        IrAlBorde(Sur)
        Poner(Verde)
    }

    EJERCICIO 2: Definí el procedimiento DibujarBandera que reciba
    dos colores y arme una bandera a partir de ellos. El cabezal 
    comienza en el extremo suroeste y no importa donde termina.

    procedure DibujarBandera(color1,color2){
        repeat(3){
            Poner(color1)
            Mover(Este)
        }
        Poner(color1)
        Mover(Norte)
        repeat(3){
            Poner(color2)
            Mover(Oeste)
        }
        Poner(color2)
        Mover(Norte)
        repeat(3){
            Poner(color1)
            Mover(Este)
        }
        Poner(color1)
    }

    EJERCICIO 3: Definí una función PerteneceAColoresPrimarios que
    recibe un color y nos dice si es un color primario o no.
*/

function PerteneceAColoresPrimarios(color) {
    return (color=="azul"||color=="amarillo"||color=="rojo");
}

console.log(PerteneceAColoresPrimarios("rojo"));
console.log(PerteneceAColoresPrimarios("verde"));

/*  EJERCICIO 4: Definir la función obtenerClima que reciba una
    temperatura y nos diga si esta fresco (en caso de que la
    temperatura sea menor a 10) o caluroso.
*/

function obtenerClima(temp) {
    if (temp<10){
        return "está fresco";
    }
    else {
        return "está caluroso"
    }
}

console.log(obtenerClima(9));
console.log(obtenerClima(14));

/*  EJERCICIO 5: Un vivero quiere saber que plantas puede trasplantar.
Para ello nos pidio una función que a partir de las alturas de las
plantas nos diga cuales tienen más de 20cm. Definí la función 
aTransplantar.
*/

let alturaPlanta=[10,30,18,20,21];

function aTransplantar(alturaPlanta) {
    let plantasAltas = []
    for (let altura of alturaPlanta) {
        if (altura > 20) {
            //agregar (plantasAltas,altura);
            plantasAltas.push(altura);
        }
    }
    return plantasAltas;
}

console.log(aTransplantar(alturaPlanta));

/*EJERCICIO 6: Definí la función resumenDeInformacion que permita obtener
un resumen de la información registrada. Ejemplo: "Luca Maggio tuvo como
fecha de último viaje el 15/11/2021 y realizó en total cuatro viajes."
 */

let luca = {nombre:"Luca Maggio", 
            destinos: ["Neuquén", "Salta", "Mendoza", "Córdoba"],
            fechaUltimoViaje: "15/11/2021"}
let margarita = {nombre: "Margarita Lopez",
                 destinos: ["Jujuy", "Tucumán"],
                 fechaUltimoViaje: "19/09/2021"}

function resumenDeInformacion(persona) {
    let cantViajes = 0
    for (let lugar of persona.destinos) {
        cantViajes = cantViajes+1;
// también puedo calcular la cantidad de viajes
// usando longitud(persona.destinos)
    }
    return (persona.nombre +" tuvo como fecha de último viaje el "+ 
    persona.fechaUltimoViaje +" y realizó en total "+ cantViajes +" viajes.");
}

console.log(resumenDeInformacion(luca));
console.log(resumenDeInformacion(margarita));

