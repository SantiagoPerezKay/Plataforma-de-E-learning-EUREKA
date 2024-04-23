import { useState } from "react";
import useProfesor from "../../api/profesor";

import Spinner from '../Loading/Spinner'

function SubirArchivo({
    callback,
    stateImage,
    label,
    setUrlImg,
    required = false
}) {
    const [subtmit,setSubmit]=useState(false)
    const [loading,setLoading]=useState(false)

    const {
        subirImagen
    }=useProfesor()

    const uploadImagen = async (e)=>{
        e.preventDefault()
        if(stateImage){
            const formData = new FormData();
            formData.append('file',stateImage)
            setLoading(true)
            try {
                const {url} = await subirImagen(formData)
                console.log(url)
                setUrlImg(url)
                callback(null)
                setSubmit(true)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }else{
            console.log('debe cargar una imagen')
        }
    }

    return (
        <>
            <label className="text-xl font-bold italic flex flex-row">
                    <p>{label}</p>
                    {
                        required && <span className="text-red-500 ml-2">*</span>
                    }
            </label>
            <div className="flex flex-row flex-wrap justify-between items-center">
                <input
                    onChange={(e)=>callback(e.target.files[0])}
                    name="image" 
                    type="file"
                    accept="image/png, image/jpeg, application/pdf, .doc, .docx" 
                />
                {
                    subtmit ? 
                    <button
                        className="mt-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-700"
                    >
                        CARGADO
                    </button>:
                    <button
                        onClick={uploadImagen}
                        className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        {
                            loading ? <Spinner/> : <p>CARGAR</p>
                        }
                    </button>
                    
                }
            
            </div>        
        </>
    )
}

export default SubirArchivo
