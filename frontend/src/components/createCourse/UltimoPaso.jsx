import Spinner from '../Loading/Spinner'
import checkIcon from '../../assets/svgs/check.svg'

import useCurso from '../../hooks/useCurso'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function UltimoPaso() {
    const {
        crearCurso
    }=useCurso()

    const [submit,setSubmit]=useState(false)

    useEffect(()=>{
        const submitCurso = async ()=>{
            try {
                const rta = await crearCurso()
                setSubmit(true)
                console.log(rta)
            } catch (error) {
                console.log(error)
            }
        }
        submitCurso()
    },[])


    return (
        <div className="w-[90%] mx-auto border shadow rounded-md py-5 px-5">
            {
                submit ? 
                    <div className='flex flex-col justify-center gap-4'>
                        <h1 className="text-2xl font-bold italic text-center">Curso creado con éxito</h1>
                        <div className='mx-auto'>
                            <img src={checkIcon} alt="check" className='w-[4rem]' />
                        </div>
                        <Link
                            to={'/dashboard/profesor/mis-cursos'}
                        >
                            <p className='text-xl font-semibold italic text-center underline'>Ir al dashboard</p>
                        </Link>
                    </div> 
                :
                    <div className='flex flex-col justify-center gap-8'>
                        <h1 className="text-2xl font-bold italic text-center">Creando tu curso....</h1>
                        <div className='mx-auto'>
                            <Spinner/>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UltimoPaso
