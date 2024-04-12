function ElegirElementosRandom(lista, cantidad) {
    let elementosSeleccionados = [];
    const copiaLista = lista.slice(); // Creamos una copia de la lista original
    
    // Iteramos hasta que hayamos seleccionado la cantidad deseada de elementos
    while (elementosSeleccionados.length < cantidad) {
        // Generamos un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * copiaLista.length);
        
        // Añadimos el elemento correspondiente al índice aleatorio a la lista de elementos seleccionados
        elementosSeleccionados.push(copiaLista.splice(indiceAleatorio, 1)[0]);
    }
    
    return elementosSeleccionados;
}


export default ElegirElementosRandom;