// función pura

/** Side Effects
 * 
 * 1. Modificar variables globales
 * 2. Modificar parámetros
 * 3. Solicitudes http
 * 4. Imprimir mensajes en pantalla
 * 5. Manipular el DOM
 * 6 Obtener la hora actual 
 */

function sum (a,b) {
    return a + b;
}

let total = 0

function sumTotal(a) {
    total += a;
    return total;
}
