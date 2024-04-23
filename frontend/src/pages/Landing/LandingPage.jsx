import { useEffect } from "react";

import CursoCard from "../../components/CursoCard/CursoCard";
import Spinner from "../../components/Loading/Spinner"

import CourseCard from "../../components/CourseCard/CourseCard";

import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png";
import image6 from "./img/image6.png";
import hero11 from "./img/hero11.png";
import hero12 from "./img/hero12.png";
import hero13 from "./img/hero13.png";
import hero14 from "./img/hero14.png";
import hero15 from "./img/hero15.png";
import hero16 from "./img/hero16.png";
import hero22 from "./img/hero22.png";
import hero23 from "./img/hero23.png";
import hero24 from "./img/hero24.png";
import cardimg1 from "./img/cardimg-diseno.webp";
import cardimg2 from "./img/cardimg-finanzas.webp";
import cardimg3 from "./img/cardimg-it.webp";
import cardimg4 from "./img/cardimg-marketing.webp";
import cardimg5 from "./img/cardimg-negocios.webp";
import starLine from "./img/star-line.svg";
import starFill from "./img/star-fill.svg";
import { useNavigate } from "react-router-dom";

import useCourse from "../../api/course/index";
import { useState } from "react";

import ElegirElementosRandom from "../../utils/ElegirElementosRandom";

function LandingPage() {
  const navigate = useNavigate();
  const [catalogo,setCatalogo]=useState([])

  const {
    getCatalogCourses
  }=useCourse()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogCourses = await getCatalogCourses();
        const newCatalog = ElegirElementosRandom(catalogCourses,5)
        setCatalogo(newCatalog);

      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  },[]);
    
  const handleClick = () =>{
    if(localStorage.getItem('jwt')){
      navigate("/dashboard/student")
    } else {
      navigate("/register")
    }
  }

  return (
    <>
      <div className="hero h-80 flex justify-center w-full 2xl:w-3/4 2xl:mx-auto overflow-hidden mb-12">
        <div className="hero-left w-100 flex flex-col justify-center pl-8 max-lg:flex-1">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-blue-600">Cursos y aprendizaje en línea </span><br /> en todo el mundo
          </h1>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-blue-600">Transforma tu vida</span> <br /> con nuestros cursos virtuales.
          </h2>
          <button className="callToAction flex h-12 w-40 justify-center items-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleClick}
          >
            INGRESA GRATIS
          </button>
        </div>
        <div className="hero-right hero-transform flex justify-end gap-2 ml-36 2xl:ml-[10vw] relative max-sm:hidden max-lg:flex-1 max-lg:">
          <div className="hero-mask absolute w-full h-full"></div>
          <div className="col-left flex flex-col-reverse gap-2 -mb-20 max-lg:-mb-4">
            <img src={image6} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
            <img src={hero11} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
            <img src={image3} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
            <img src={hero13} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
          </div>
          <div className="col-center flex flex-col-reverse gap-2 -mb-12 max-lg:mb-0">
            <img src={image1} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
            <img src={hero12} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
            <img src={image5} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
            <img src={hero22} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[20dvw]" />
          </div>
          <div className="col-center flex flex-col-reverse gap-2 -mb-12 max-lg:mb-4">
            <img src={hero15} className="w-[15dvw] 2xl:w-[10dvw] max-lg:w-[25dvw]" />
            <img src={hero23} className="w-[15dvw] 2xl:w-[10dvw] max-lg:w-[25dvw]" />
            <img src={hero16} className="w-[15dvw] 2xl:w-[10dvw] max-lg:w-[25dvw]" />
            <img src={hero24} className="w-[15dvw] 2xl:w-[10dvw] max-lg:w-[25dvw]" />
          </div>
          <div className="col-right flex flex-col-reverse gap-4 max-lg:mb-4">
            <img src={image2} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[25dvw]" />
            <img src={hero14} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[25dvw]" />
            <img src={image4} className="w-[12dvw] 2xl:w-[8dvw] max-lg:w-[25dvw]" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="grid px-10 py-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-24 lg:py-10 lg:gap-12">
          {
            Array.isArray(catalogo) &&
            catalogo.length > 0 ?
              catalogo.map((data) => {
                console.log(data)
                return <CourseCard
                  key={data.id}
                  title={data.title}
                  image={data.image}
                />
              })
            :
              <Spinner/>
          }
        </div>
      </div>
    </>
  );
}

export default LandingPage;
