import arrowLeft from './svg/arrowLeft.svg'
import arrowRight from './svg/arrowRight.svg'
import homeIcon from './svg/home.svg'
import { useLocation, useParams, useNavigate,Link } from 'react-router-dom'
import svgDocument from './svg/svgDocument.svg'
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
    const [complete,setComplete]=useState(false)

    const navigate = useNavigate();
    const params = useParams();
    
    const location = useLocation()

    const urlSlice = location.pathname.slice(0,-1)
    // const urlContent = parseInt(location.pathname.split('/')[5])

    const ID_MODULO = params.moduloid
    const ID_CONTENIDO = params.contentid

    useEffect(()=>{
        if(informacionCurso){
            const infoModulo = informacionCurso.modules?.filter( modulo => parseInt(modulo.id) === parseInt(ID_MODULO))
            setInfoModulo(infoModulo[0])
            const contentFiltered = infoModulo[0].contents.filter(contenido => parseInt(contenido.id) === parseInt(ID_CONTENIDO))
            setInfoContenido(contentFiltered[0])
        }
        setComplete(false)
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

                setComplete(true)
            })
            .catch(error => {
              console.error(error);
            });
    };

    //ARMAR LA RUTA DEL CURSO
    const urlRoot=`/dashboard/curso/${informacionCurso?.id}/`

    //GENERAR LA RUTA DE CADA MODULO Y DE CADA CONTENIDO (urlContent)
    const [urlContent, setUrlContent] = useState([]);
    function generarContents(origen) {
        // let contents = 0
        let urlContent2 = []
        setUrlContent([])
        origen?.modules.forEach((modulo) => {
        //   ESTO ES POR SI SE AGREGA CONTENIDO EN EL TITULO DEL MODULO
          modulo.contents.forEach((contenido) => {
            urlContent2.push(`${modulo.id}/${contenido.id}`);
          });
        });
        setUrlContent(urlContent2)
    }
    
    //FUNCION ENCONTRAR INDICE (indexContent)
    const findUrlContent = () => {
        const texto = location.pathname;
        const presentContent = texto.replace(urlRoot, '');
        const indexContent = urlContent.indexOf(presentContent);
 
        return indexContent;
    }
    //FUNCION CONTENIDO ANTERIOR
    const urlAnterior = () => {
        let indexContent = findUrlContent()
        if (indexContent == 0) return
        indexContent --
        const url = urlRoot + urlContent[indexContent]
        navigate(url)
    }

    //FUNCION CONTENIDO SIGUIENTE
    const urlSiguiente = () => {
        let indexContent = findUrlContent()
        if ((indexContent + 1) == urlContent.length) return
        indexContent ++
        const url = urlRoot + urlContent[indexContent]
        navigate(url)
    }
    //GENERA LA RUTA DE CONTENIDOS CUANDO SE ABRE POR PRIMERA VEZ
    useEffect(() => {
      generarContents(informacionCurso)
    }, [])
    

    return (
        <>  
            <div className="w-full mt-5">
                <div className="w-full h-full mx-auto">
                    {/* VIDEO */}
                    <div>
                        <Link to={'/dashboard/student'}>
                            <span className='w-[13rem] flex flex-row gap-5 py-1 px-3 cursor-pointer border rounded-md mb-5 shadow-md hover:shadow-lg bg-white'>
                                <img src={homeIcon} alt="home icon" />
                                <p className='font-semibold italic'>Dashboard</p>
                            </span>
                        </Link>
                        <iframe className="w-5/6 mx-auto lg:h-96 md:h-56 h-52 rounded-xl" src={infoContenido.urlVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    
                    {/* BOTONES DE AVANZAR Y RETROCEDER */}
                    <div className='flex md:flex-row flex-col gap-4 w-full justify-center md:justify-around text-xl my-6'>
                        <button 
                            className={`${(infoContenido?.progress?.completed) || complete ? 'bg-green-600 text-white border font-bold border-transparent tracking-wider' :'bg-transparent font-bold hover:bg-green-600 hover:text-white border border-green-600 hover:border-transparent text-green-600' } cursor-pointer flex justify-center items-center px-3 h-[40px] rounded-[10px] text-base`} 
                            onClick={() => enviarDatos(infoContenido.progress.id)}
                        >
                            <p>{`${(infoContenido?.progress?.completed || complete) ? 'Completado' :'Marcar como completo'}`}</p>
                        </button>
                        <div className='flex flex-row justify-between md:gap-5'>
                            <div className='flex' onClick={urlAnterior}>
                                <span className='flex justify-center items-center  gap-2 w-[150px] h-[40px] font-semibold bg-internationalKleinBlue hover:bg-[#496ce0] rounded-[10px] text-base text-white'>
                                    <img className='w-[20px] h-[20px]' src={arrowLeft}/>
                                    Anterior
                                </span>
                            </div>
                            <div className='flex' onClick={urlSiguiente}>
                                <span className='flex justify-center items-center gap-2 w-[150px] h-[40px] font-semibold bg-internationalKleinBlue hover:bg-[#496ce0] rounded-[10px] text-base text-white'>
                                    Siguiente
                                    <img className='w-[20px] h-[20px]' src={arrowRight}/>
                                </span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl text-center my-10 tracking-[0.7px] font-bold text-swamp">{infoContenido.title}</h1>
                    <p className="text-xl  max-w-[80%] mx-auto text-swamp font-normal mb-5">{infoContenido.description}</p>
                    
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