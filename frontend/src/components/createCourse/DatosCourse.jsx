import { useEffect,useState } from "react"

import useCourse from "../../api/course"
import useCurso from "../../hooks/useCurso"

import validarDatos from "../../utils/ValidarDatos"

import SubirArchivo from "../SubirArchivo/SubirArchivo"

import Alertas from "../Alertas/Alertas"

function DatosCourse({
    setStep
}){
    const [alert,setAlert]=useState({
        state:false,
        msg:''
    })
    const [categorias,setCategorias]=useState([])
    const [fileImagen,setFileImagen]=useState(null)
    const [urlImg,setUrlImg]=useState(null)
    const [data,setData]=useState({
        'title':'',
        'description':'',
        'categoryId':'',
        'image':''
    })

    const {
        setInformacionCurso
    }=useCurso()

    const {
        getCategorias
    }=useCourse()

    const onChangeForm = (e)=>{
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const dataCurso ={
            ...data,
            'categoryId':parseInt(data.categoryId)
        }

        const validate = validarDatos(dataCurso)

        if(!validate){
            setAlert({
                state:true,
                msg:'todos los campos son obligatorios'
            })

            setTimeout(() => {
                setAlert({
                    state:false,
                    msg:''
                })
            }, 4000);
            return
        }

        setInformacionCurso(dataCurso)
        setStep(prev => prev+1 )
        window.location.hash = '#modulo';
    }

    useEffect(()=>{
        const categorias = async ()=>{
            try {
                const rta = await getCategorias()
                setCategorias(rta)
            } catch (error) {
                console.log(error)
            }
        }
        categorias()
    },[])

    useEffect(()=>{
        if(urlImg){
            setData({
                ...data,
                'image':urlImg
            })
        }
    },[fileImagen])

    return (
        <div className="lg:w-[70%] w-full mx-auto border-2 border-gray-400 shadow-xl rounded-lg py-5 px-5 bg-slate-200">
            <h1 className="text-2xl font-bold italic text-center">Crea tu curso</h1>
            <Alertas err={alert} size={'md'}>
                <form
                    onSubmit={handleSubmit}
                    className="py-2 flex flex-col gap-2"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-bold italic flex flex-row">
                            <p>Titulo del curso</p>
                            <span className="text-red-500 ml-2">*</span>
                        </label>
                        <input
                            onChange={onChangeForm}
                            name="title" 
                            type="text" 
                            className="border-2 border-gray-500 rounded-xl shadow py-1 px-5 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-bold italic flex flex-row">
                            <p>Descripción del curso</p>
                            <span className="text-red-500 ml-2">*</span>
                        </label>
                        <textarea
                            onChange={onChangeForm}
                            name="description" 
                            type="text" 
                            className="border-2 border-gray-500 rounded-xl  shadow py-1 px-5 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-bold italic flex flex-row">
                            <p>Categoria</p>
                            <span className="text-red-500 ml-2">*</span>
                        </label>
                        <select
                            onChange={onChangeForm}
                            name="categoryId" 
                            className="outline-none border-2 border-gray-500 rounded-xl py-1 px-5"
                        >
                            <option value=''>Elegir categoria</option>
                            {
                                categorias?.map(item =>{
                                    return <option key={item.id}  value={parseInt(item.id)}>{item.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <SubirArchivo
                            setUrlImg={setUrlImg}
                            callback={setFileImagen}
                            stateImage={fileImagen}
                            label={'Imagen del curso'}
                            required={true}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 border hover:shadow-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        CREAR MODULOS
                    </button>
                </form>
            </Alertas>
        </div>
    )
}

export default DatosCourse