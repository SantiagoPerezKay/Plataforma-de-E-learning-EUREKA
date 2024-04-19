import { useEffect, useState } from 'react'
import { Outlet} from "react-router";
import { useLocation } from 'react-router-dom';

import useProfesor from '../api/profesor';

import {getPayload} from '../utils/DecodificarToken'

const RUTAS_BY_ROL = {
    'ROLE_STUDENT':['student','curso'],
    'ROLE_TEACHER':['profesor']
}

function RutaProtegida() {

    const {
        verifyProfesor
    }=useProfesor()

    const location = useLocation()
    const [access,setAccess]= useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('jwt');
        if(token){
            setAccess(true)
        }
    },[])

    useEffect(()=>{
        const protectRuta =  async ()=>{
            const permitir = await protectRouteByRol(location.pathname)
            if(!permitir){
                setAccess(false)
            }
        }
        protectRuta()
    },[location])

    async function protectRouteByRol(ruta){

        let validate

        try {
            const {data} = await verifyProfesor()
            validate = data.verified
        }catch(error) {
            console.log(error.message)
            validate = false
        }

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

    return (
        <div>
            {
                access ? <Outlet/> : <h1>Acceso denegado</h1>
            }
        </div>
    )
}

export default RutaProtegida;