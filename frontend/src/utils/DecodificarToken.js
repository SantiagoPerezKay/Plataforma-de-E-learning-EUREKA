const RUTAS_BY_ROL = {
    'ROLE_STUDENT':['student','curso'],
    'ROLE_TEACHER':['profesor']
}

const validate = true

function getPayload(token){
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
}

//respuesta esperada funcion getPayload
/* {
    role: { authority: 'ROLE_STUDENT/ROLE_TEACHER' },
    sub: 'correo@ejemplo.com',
    iat: 1712165428,
    exp: 1712169028
} */



function redirectLoginByRol(token){
    const data = getPayload(token)
    const role = data.role.authority

    if(role.includes('STUDENT')){
        return "/dashboard/student";
    }else if(role.includes('TEACHER')){
        if(validate){
            return "/dashboard/profesor";
        }
        return "/dashboard/validate-profesor";
    }else{
        return "/"
    }
}

function protectRouteByRol(ruta){
    const token = localStorage.getItem('jwt')
    const data = getPayload(token)
    const role = data.role.authority
    const rutas = RUTAS_BY_ROL[role]

    if(ruta.includes('validate-profesor')){
        if(validate){
            return false
        }
        return true
    }

    if(role.includes('TEACHER')){
        if(!validate){
            return false
        }
    }

    const permitido = rutas.some(rutaPermitida => ruta.includes(rutaPermitida));
    return permitido
}


export {
    redirectLoginByRol,
    protectRouteByRol
}