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

    const validate = false

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


export {
    redirectLoginByRol
}