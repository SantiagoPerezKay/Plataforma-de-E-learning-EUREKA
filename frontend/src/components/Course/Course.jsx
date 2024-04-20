import arrowLeft from './svg/arrowLeft.svg'
import arrowRight from './svg/arrowRight.svg'
import { useLocation, useParams } from 'react-router-dom'
import svgDocument from './svg/svgDocument.svg'
import { NavLink } from 'react-router-dom'
import axios from "axios";

import { modifyProgressById } from '../../redux/slices/course/courseSlice'

import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux';


import { useEffect, useState } from 'react'


export default function Course() {
    const dispatch = useDispatch()

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
    },[location])

    console.log(ID_MODULO,ID_CONTENIDO)



    const enviarDatos = async (idProgress) => {
        const URL_PROGRESS = 'https://s14-11-m-java.onrender.com/api/v1/progresses'
        const RUTA = `${URL_PROGRESS}/${idProgress}`
        const token = localStorage.getItem("jwt");

        const config = {
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`,
            },
          };

         await axios.patch(RUTA, idProgress, config)
            .then(response => {
                console.log(response.data);

                dispatch(modifyProgressById({ 
                moduloId:ID_MODULO, 
                contentId:ID_CONTENIDO 
                }))
            })
            .catch(error => {
              console.error(error);
            });
        };


    return (
        <>  
            <div className="w-full">
                <div className="w-full h-full mx-auto">
                    {/* VIDEO */}
                    <iframe className="w-5/6 mx-auto lg:h-96 md:h-56 h-52" src={infoContenido.urlVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    
                    {/* BOTONES DE AVANZAR Y RETROCEDER */}
                    <div className='flex justify-around text-xl my-6'>
                        <buton className={"cursor-pointer flex justify-center items-center px-3 h-[40px] rounded-[10px] text-base bg-transparent hover:bg-internationalKleinBlue hover:text-white border border-internationalKleinBlue hover:border-transparent text-internationalKleinBlue"} onClick={() => enviarDatos(infoContenido.progress.id)}>Marcar como completo</buton>
                        <NavLink className='flex' to={`${urlSlice}${urlContent - 1}`}>
                            <span className='flex justify-center items-center  gap-2 w-[150px] h-[40px] font-semibold bg-internationalKleinBlue hover:bg-[#496ce0] rounded-[10px] text-base text-white'>
                                <img className='w-[20px] h-[20px]' src={arrowLeft}/>
                                Anterior
                            </span>
                        </NavLink>
                        <NavLink className='flex' to={`${urlSlice}${urlContent + 1}`}>
                            <span className='flex justify-center items-center gap-2 w-[150px] h-[40px] font-semibold bg-internationalKleinBlue hover:bg-[#496ce0] rounded-[10px] text-base text-white'>
                                Siguiente
                                <img className='w-[20px] h-[20px]' src={arrowRight}/>
                            </span>
                        </NavLink>
                    </div>

                    <h1 className="text-5xl text-center my-10 tracking-[0.7px] font-bold text-swamp">{infoContenido.title}</h1>
                    <p className="text-base max-w-[80%] mx-auto text-swamp font-normal mb-5">{infoContenido.description}</p>
                    
                    {
                        infoContenido.urlPdf !== null &&
                        <a className='flex items-center my-10 gap-4 max-w-[80%] mx-auto' href={infoContenido.urlPdf} target='_blank'>
                            <img className='w-[53px] h-[60px] cursor-pointer' src={svgDocument}/>
                            <label className='text-2xl text-swamp cursor-pointer hover:border-b-2 hover:text-gray-600 font-bold hover:border-b-gray-600'>Descargar contenido del curso</label>
                        </a>
                    }
                </div>
            </div>
        </>
    )
}