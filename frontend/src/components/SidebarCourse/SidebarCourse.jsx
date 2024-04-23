import { useEffect, useState } from 'react';
import AccordionMenu from '../AccordionItem/AccordionItem';


import { useLocation } from 'react-router-dom';

import useCourse from '../../api/course';

import { useDispatch } from "react-redux";
import { setCourse } from '../../redux/slices/course/courseSlice';

export default function SidebarCourse() {
    const dispatch = useDispatch()
    const [data,setData]=useState([])
    const location = useLocation()

    const [dataLoaded, setDataLoaded] = useState(false);

    const idProgress = 1


    const {
        courseById
    }=useCourse()

    const [idCurso,setIdCurso]=useState(null)


    useEffect(()=>{
        if(location){
            const id = location.pathname.split('/')[3]
            setIdCurso(id)
        }
    },[location])

    useEffect(()=>{
        if(idCurso){
            const getInformacionCurso = async ()=>{
                try {
                    const cursoInformacion = await courseById(idCurso)
                    setData(cursoInformacion)
                    dispatch(setCourse(cursoInformacion))

                    setDataLoaded(true);
                } catch (error) {
                    console.log(error)
                }
            }
            getInformacionCurso()
        }
    },[idCurso])

    return (
        <>  
            {dataLoaded? (
            <AccordionMenu items={data}/>
            ) : (
                <div className='bg-pictonBlue h-screen flex flex-col items-center'>
                    <h1>Cargando contenido del curso...</h1>
                    <div class="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-black" />
                </div>
            ) }
        </>
    )
}
