import { useEffect, useState } from "react";
import useCurso from "../../hooks/useCurso";

function Content() {
    const [open,setOpen]=useState(false)
    const [titleContenido,setTitleContenido]=useState('')
    const [urlVideo,setUrlVideo]=useState('')


    const [idModulo,setIdModulo]=useState(null)
    const [tituloModulo,setTitleModulo]=useState('')
    const [contenido,setContenido]=useState([])

    const {
        stateModulos,
        dispatch
    }=useCurso()


    const handleCrearContenido =(e)=>{
        e.preventDefault()

        const data={
            'title':titleContenido,
            'urlVideo':urlVideo
        }

        dispatch({
            type:"agrega-contenido",
            payload:{ 
                moduloId:idModulo, 
                contenido:data
            }
        })

        setContenido([...contenido,data])
        closeVentana()
    }

    const closeVentana =()=>{
        setOpen(false)
        setTitleContenido('')
        setUrlVideo('')
    }

    useEffect(()=>{
        const ruta = window.location.hash.substring(1).split('-')[1]
        setIdModulo(ruta)
    },[])

    useEffect(()=>{
        if(idModulo){
            const moduloIndex = stateModulos.modulos.findIndex(modulo => parseInt(modulo.id )=== parseInt(idModulo));
            if (moduloIndex !== -1) {
                setTitleModulo(stateModulos.modulos[moduloIndex].title)
                setContenido(stateModulos.modulos[moduloIndex].content)
            }
        }
    },[idModulo])

    return (
        <>
            <div className="flex flex-row justify-between flex-wrap mt-2 items-center">
                <h1 className="text-xl font-bold">{`Modulo: ${tituloModulo}`}</h1>
                <button
                    onClick={()=>setOpen(prev => !prev)}
                    className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    CREAR CONTENIDO
                </button>
            </div>

            {
                open && 
                <div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-semibold italic">Titulo</label>
                        <input
                            onChange={(e)=>setTitleContenido(e.target.value)}
                            value={titleContenido}
                            name="title" 
                            type="text" 
                            className="border rounded shadow py-1 px-5 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-semibold italic">Url video</label>
                        <input
                            onChange={(e)=>setUrlVideo(e.target.value)}
                            value={urlVideo}
                            name="title" 
                            type="text" 
                            className="border rounded shadow py-1 px-5 outline-none"
                        />
                    </div>
                    
                    <button
                        onClick={handleCrearContenido}
                        className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        CREAR
                    </button>
                </div>
            }

            <div className="grid grid-cols-1 gap-3 mt-3">
                {
                    contenido?.map((item,index)=>(
                        <div
                            key={index}
                            className="border shadow rounded-md p-5 hover:shadow-lg cursor-pointer"
                        >
                            <p className="font-bold text-xl">{`Titulo: ${item.title}`}</p>
                            <p className="text-lg font-semibold">{`url video : ${item.urlVideo}`}</p>
                        </div>
                    ))
                }
            </div>

        </>

        
    )
}

export default Content;
