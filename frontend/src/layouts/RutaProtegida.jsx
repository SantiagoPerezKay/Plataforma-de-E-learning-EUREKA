import { useEffect, useState } from 'react'
import { Outlet} from "react-router";
import { useLocation } from 'react-router-dom';

import { protectRouteByRol } from '../utils/DecodificarToken';

function RutaProtegida() {
    const location = useLocation()
    const [access,setAccess]= useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('jwt');
        if(token){
            setAccess(true)
        }
    },[])

    useEffect(()=>{
        const permitir = protectRouteByRol(location.pathname)
        if(!permitir){
            setAccess(false)
        }
    },[location])

    return (
        <div>
            {
                access ? <Outlet/> : <h1>Acceso denegado</h1>
            }
        </div>
    )
}

export default RutaProtegida;