import arrowLeft from './svg/arrowLeft.svg'
import arrowRight from './svg/arrowRight.svg'
import { useParams } from 'react-router-dom'
import svgDocument from './svg/svgDocument.svg'
import data from './data.json'
import { NavLink } from 'react-router-dom'

export default function Course() {
    const params = useParams();
    const lengthModules = parseInt((data[0].contenido).length) - 1;
    return (
        <>
            <div className="w-full">
                <div className="w-[90%] my-0 mx-auto">
                    <iframe className="w-full mt-[22px]" width="740" height="460" src={data[0].contenido[params.moduloid].contenidoModule.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div className='flex justify-around text-xl my-6'>
                        <NavLink className='flex hover:text-blue-700' to={`/dashboard/curso/5/${(params.moduloid > 0)? parseInt(params.moduloid) - 1 : params.moduloid}`}>
                            <span className='flex'>
                                <img className='w-6' src={arrowLeft}/>
                                Anterior
                            </span>
                        </NavLink>
                        <NavLink className='flex hover:text-blue-700' to={`/dashboard/curso/5/${(params.moduloid < lengthModules)? parseInt(params.moduloid) +1 : params.moduloid}`}>
                            <span className='flex'>
                                <img className='w-6' src={arrowRight}/>
                                Siguiente
                            </span>
                        </NavLink>
                    </div>
                    <h1 className="text-[1.7rem] tracking-[0.7px] font-bold text-[#2d2f31]">{data[0].contenido[params.moduloid].contenidoModule.titleVideo}</h1>
                    <p className="text-[1.1rem] text-[#2d2f31] font-normal">{data[0].contenido[params.moduloid].contenidoModule.descriptionVideo}</p>
                    <a className='flex items-center my-10' href={data[0].contenido[params.moduloid].contenidoModule.urlPdf} target='_blank'>
                        <img className='w-10' src={svgDocument}/>
                        <label className='text-lg cursor-pointer hover:border-b-2 hover:border-b-gray-600'>Descargar contenido del curso</label>
                    </a>
                </div>
            </div>
        </>
    )
}