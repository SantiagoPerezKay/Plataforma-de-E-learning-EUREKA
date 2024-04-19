import useProfesor from "../api/profesor";

const {
    verifyProfesor
}=useProfesor()

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

const validateProfesor = async()=>{
    let validate

    try {
        const {data} = await verifyProfesor()
        validate = data.verified
    }catch(error) {
        console.log(error.message)
        validate = false
    }

    if(validate === true){
        return "/dashboard/profesor";
    }else{
        return "/dashboard/validate-profesor"; 
    }


}


async function redirectLoginByRol(token){
    const data = getPayload(token)
    const role = data.role.authority

    if(role.includes('STUDENT')){
        return "/dashboard/student";
    }else if(role.includes('TEACHER')){
        const ruta =  await validateProfesor()
        return ruta
    }else{
        return "/"
    }
}



export {
    redirectLoginByRol,
    validateProfesor,
    getPayload
}