import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import Modulos from "./Modulos"
import Content from "./Content"

function CrearModulos({
    setStep
}){
    const location = useLocation()
    const [ruta,setRuta]=useState('')

    useEffect(()=>{
        const ruta = window.location.hash.substring(1)
        setRuta(ruta)
    },[location])

    return (
        <div className="w-[90%] mx-auto border shadow rounded-md py-5 px-5">
        <h1 className="text-2xl font-bold italic text-center">Crear módulos y contenido</h1>
        {
            ruta.includes('modulo') && <Modulos/>
        }
        {
            ruta.includes('content') && <Content/>
        }
        </div>
    )
}

export default CrearModulos
