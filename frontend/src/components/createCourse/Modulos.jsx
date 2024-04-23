import { useState } from "react"

import useCurso from "../../hooks/useCurso"

import Alertas from "../Alertas/Alertas"

function Modulos({
    setStep
}){

    const {
        stateModulos,
        dispatch
    }=useCurso()

    const [open,setOpen]=useState(false)
    const [nombreModulo,setNombreModulo]=useState('')

    const [alerta,setAlerta]=useState({
        state:false,
        msg:''
    })

    const handleCrearModulo = ()=>{
        if(nombreModulo === ''){
            setAlerta({
                state:true,
                msg:'todos los campos son obligatorios'
            })
            setTimeout(() => {
                setAlerta({
                    state:false,
                    msg:''
                })
            }, 4000);
            return
        }

        const data = {
            'position':(stateModulos.modules.length + 1)-1,
            'title':nombreModulo,
            'contents':[]
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
            <div className="flex md:flex-row flex-col justify-between">
                <button
                    onClick={()=>setOpen(true)}
                    className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    CREAR MODULO
                </button>
                <button
                    onClick={()=>setStep(prev => prev + 1)}
                    className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    CREAR CURSO
                </button>

            </div>

            {
                open && 
                <Alertas err={alerta} size={'md'}>
                    <div className="bg-white flex flex-col gap-2 border-2 px-5 py-2 rounded-lg shadow-md mt-2">
                        <label className="text-xl font-bold italic flex flex-row">
                                <p>Titulo del modulo</p>
                                <span className="text-red-500 ml-2">*</span>
                        </label>
                        <input
                            onChange={(e)=>setNombreModulo(e.target.value)}
                            value={nombreModulo}
                            name="title" 
                            type="text" 
                            className="border-2 bg-slate-200 border-gray-500 rounded-xl shadow py-1 px-5 outline-none"
                        />
                        <div className="flex md:flex-row flex-col">
                            <button
                                onClick={handleCrearModulo}
                                className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                CREAR
                            </button>
                            <button
                                onClick={()=>setOpen(false)}
                                className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                CANCELAR
                            </button>

                        </div>
                    </div>
                </Alertas>
            }

            {
                stateModulos.modules.length === 0 && <h1 className="text-2xl font-bold italic text-center">Agrega un modulo</h1>
            }

            {
                stateModulos.modules.length !== 0 &&
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3 px-5 py-3">
                    {
                        stateModulos.modules?.map((item)=>(
                            <div
                                key={item.position}
                                onClick={()=>ContenidoByModule(item.position)} 
                                className="border bg-white shadow-lg rounded-md p-5 hover:shadow-xl cursor-pointer"
                            >
                                <p className="text-center font-bold text-xl">{`Modulo ${item.position + 1}`}</p>
                                <p className="text-lg font-semibold">{`Nombre: ${item.title}`}</p>
                                <p className="text.lg font-semibold">{`Contenido: ${item.contents.length}`}</p>
                            </div>
                        ))
                    }
                </div> 
            }
            
        
        </div>
    )
}

export default Modulos
