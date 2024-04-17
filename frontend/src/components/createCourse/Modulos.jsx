import { useState } from "react"

import useCurso from "../../hooks/useCurso"

function Modulos() {

    const {
        stateModulos,
        dispatch
    }=useCurso()

    const [open,setOpen]=useState(false)
    const [nombreModulo,setNombreModulo]=useState('')

    const handleCrearModulo = ()=>{
        const data = {
            'id':stateModulos.modulos.length + 1,
            'title':nombreModulo,
            'content':[]
        }

        dispatch({
            type:"agrega-modulo",
            payload:data
        })

        closeCrearModulo()
    }

    const closeCrearModulo =()=>{
        setOpen(false)
        setNombreModulo('')
    }

    const ContenidoByModule =(id)=>{
        const urlSinHash = window.location.href.split('#')[0];
        window.location.href = `${urlSinHash}#content-${id}`
    }


    return (
        <div className="w-full">
            <button
                onClick={()=>setOpen(prev => !prev)}
                className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                CREAR MODULO
            </button>

            {
                open && 
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-semibold italic">Titulo del modulo</label>
                    <input
                        onChange={(e)=>setNombreModulo(e.target.value)}
                        value={nombreModulo}
                        name="title" 
                        type="text" 
                        className="border rounded shadow py-1 px-5 outline-none"
                    />
                    <button
                        onClick={handleCrearModulo}
                        className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        CREAR
                    </button>
                </div>
            }

            <div className="grid grid-cols-2 gap-3 mt-3">
                {
                    stateModulos.modulos?.map((item)=>(
                        <div
                            key={item.id}
                            onClick={()=>ContenidoByModule(item.id)} 
                            className="border shadow rounded-md p-5 hover:shadow-lg cursor-pointer"
                        >
                            <p className="text-center font-bold text-xl">{`Modulo ${item.id}`}</p>
                            <p className="text-lg font-semibold">{`Nombre: ${item.title}`}</p>
                            <p className="text.lg font-semibold">{`Contenido: ${item.content.length}`}</p>
                        </div>
                    ))
                }
            </div>
        
        </div>
    )
}

export default Modulos
