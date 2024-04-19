function validarDatos(objeto) {
    for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            if (objeto[clave] === '') {
                return false; // Si encuentra una clave con valor vacío, retorna false
            }
        }
    }
    return true; // Si todas las claves tienen valores diferentes de '', retorna true
}

export default validarDatos