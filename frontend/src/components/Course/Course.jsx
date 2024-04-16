import arrowLeft from './svg/arrowLeft.svg'
import arrowRight from './svg/arrowRight.svg'
import { useLocation, useParams } from 'react-router-dom'
import svgDocument from './svg/svgDocument.svg'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux';


import { useEffect, useState } from 'react'


export default function Course() {

    const informacionCurso = useSelector((state) => state.course.curso);

    const [infoContenido,setInfoContenido]=useState([])
    const [infoModulo,setInfoModulo] = useState([])

    const params = useParams();
    
    const location = useLocation()

    const urlSlice = location.pathname.slice(0,-1)
    const urlContent = parseInt(location.pathname.split('/')[5])

    const ID_MODULO = params.moduloid
    const ID_CONTENIDO = params.contentid

    useEffect(()=>{
        if(informacionCurso){
            const infoModulo = informacionCurso.modules?.filter( modulo => parseInt(modulo.id) === parseInt(ID_MODULO))
            setInfoModulo(infoModulo[0])
            const contentFiltered = infoModulo[0].contents.filter(contenido => parseInt(contenido.id) === parseInt(ID_CONTENIDO))
            setInfoContenido(contentFiltered[0])
        }
    })


    console.log(infoContenido)




    return (
        <>  
            <div className="w-full">
                <div className="w-full h-full mx-auto">
                    {/* VIDEO */}
                    <iframe className="w-full lg:h-96 md:h-56 h-52" src={infoContenido.urlVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    
                    {/* BOTONES DE AVANZAR Y RETROCEDER */}
                    <div className='flex justify-around text-xl my-6'>
                        <NavLink className='flex hover:text-blue-700' to={`${urlSlice}${urlContent - 1}`}>
                            <span className='flex'>
                                <img className='w-6' src={arrowLeft}/>
                                Anterior
                            </span>
                        </NavLink>
                        <NavLink className='flex hover:text-blue-700' to={`${urlSlice}${urlContent + 1}`}>
                            <span className='flex'>
                                <img className='w-6' src={arrowRight}/>
                                Siguiente
                            </span>
                        </NavLink>
                    </div>

                    <h1 className="text-[1.7rem] tracking-[0.7px] font-bold text-[#2d2f31]">{infoContenido.title}</h1>
                    <p className="text-[1.1rem] text-[#2d2f31] font-normal">{infoContenido.description}</p>
                    <a className='flex items-center my-10' href={infoContenido.urlPdf} target='_blank'>
                        <img className='w-10' src={svgDocument}/>
                        <label className='text-lg cursor-pointer hover:border-b-2 hover:border-b-gray-600'>Descargar contenido del curso</label>
                    </a>
                </div>
            </div>
        </>
    )
}