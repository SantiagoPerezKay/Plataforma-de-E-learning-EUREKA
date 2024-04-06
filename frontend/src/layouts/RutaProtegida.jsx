import { useEffect, useState } from 'react'
import { Outlet} from "react-router";


function RutaProtegida() {
    const [access,setAccess]= useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('jwt');
        if(token){
            setAccess(true)
        }
    },[])

    return (
        <div>
            {
                access ? <Outlet/> : <h1>Acceso denegado</h1>
            }
        </div>
    )
}

export default RutaProtegida;