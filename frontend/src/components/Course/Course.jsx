import arrowLeft from './svg/arrowLeft.svg'
import arrowRight from './svg/arrowRight.svg'
import { useParams } from 'react-router-dom'
import svgDocument from './svg/svgDocument.svg'
import data from './data.json'
import { NavLink } from 'react-router-dom'

import useCourse from '../../api/course'
import { useEffect, useState } from 'react'

export default function Course() {
    const { courseById } = useCourse();
    const [ courseData, setCourseData ] = useState([])
    const params = useParams();
    /* const lengthModules = parseInt((data[0].modules[params.moduloid].contents).length) - 1; */

    useEffect(() => {
        const fetchData = async () => {
          try {
            const idCourses = await courseById(0);
            setCourseData(idCourses);

          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>  
            {console.log(courseData)}
            <div className="w-full">
                <div className="w-full h-full mx-auto">
                    <iframe className="w-full lg:h-96 md:h-56 h-52" src={data[0].modules[params.moduloid].contents[params.contentid].urlVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {/* <div className='flex justify-around text-xl my-6'>
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
                    </div> */}
                    <h1 className="text-[1.7rem] tracking-[0.7px] font-bold text-[#2d2f31]">{data[0].modules[params.moduloid].contents[params.contentid].title}</h1>
                    <p className="text-[1.1rem] text-[#2d2f31] font-normal">{data[0].modules[params.moduloid].contents[params.contentid].description}</p>
                    <a className='flex items-center my-10' href={data[0].modules[params.moduloid].contents[params.contentid].urlPdf} target='_blank'>
                        <img className='w-10' src={svgDocument}/>
                        <label className='text-lg cursor-pointer hover:border-b-2 hover:border-b-gray-600'>Descargar contenido del curso</label>
                    </a>
                </div>
            </div>
        </>
    )
}