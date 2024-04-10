import image1 from './img/image1.png'
import image2 from './img/image2.png'
import image3 from './img/image3.png'
import image4 from './img/image4.png'
import image5 from './img/image5.png'
import image6 from './img/image6.png'
import cardimg1 from './img/cardimg-diseno.webp'
import cardimg2 from './img/cardimg-finanzas.webp'
import cardimg3 from './img/cardimg-it.webp'
import cardimg4 from './img/cardimg-marketing.webp'
import cardimg5 from './img/cardimg-negocios.webp'
import starLine from './img/star-line.svg'
import starFill from './img/star-fill.svg'
function LandingPage(){
    return (
      <>
      <div className="hero h-80 flex flex-col justify-center w-full">
      <h1 className="text-3xl text-center font-bold mb-4">Cursos y aprendizaje en línea en todo el mundo</h1>
      <h2 className="text-2xl text-center font-bold mb-4">Transforma tu vida con nuestros cursos virtuales.</h2>
      <button className="callToAction flex h-12 justify-center items-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto"
      >INGRESA GRATIS
      </button>
      </div>
      <div className="main">
          <div className="row-container flex flex-wrap gap-y-8 justify-between max-lg:justify-evenly mb-20 lg:w-[1024px] lg:mx-auto">
              <div className="card-container flex flex-col items-center w-72 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden max-lg:mx-auto"><img src={cardimg5} className='w-full'/><div className='stars flex my-2'><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starLine} width='32' /></div><h3 className='font-bold text-center'>Negocios</h3><p className='text-sm w-72 px-8'>Estos cursos están diseñados para proporcionarte una base sólida en diferentes aspectos del mundo empresarial.</p><button className='bg-blue-300 font-bold text-sm rounded-2xl my-4 px-4 py-2 border border-blue400 shadow-md shadow-slate-400'>Inscríbete</button></div>
              <div className="card-container flex flex-col items-center w-72 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden max-lg:mx-auto"><img src={cardimg2} className='w-full'/><div className='stars flex my-2'><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starLine} width='32' /></div><h3 className='font-bold text-center'>Finanzas</h3><p className='text-sm w-72 px-8'>Estos cursos te proporcionarán una base sólida de los conceptos y herramientas fundamentales en el campo de las finanzas.</p><button className='bg-blue-300 font-bold text-sm rounded-2xl my-4 px-4 py-2 border border-blue400 shadow-md shadow-slate-400'>Inscríbete</button></div>
              <div className="card-container flex flex-col items-center w-72 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden max-lg:mx-auto"><img src={cardimg3} className='w-full'/><div className='stars flex my-2'><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starLine} width='32' /></div><h3 className='font-bold text-center'>IT</h3><p className='text-sm w-72 px-8'>Te proporcionarán bases en diferentes áreas de la tecnología de la información, de la programación y el desarrollo web hasta la ciencia de datos.</p><button className='bg-blue-300 font-bold text-sm rounded-2xl my-4 px-4 py-2 border border-blue400 shadow-md shadow-slate-400'>Inscríbete</button></div>
              <div className="card-container flex flex-col items-center w-72 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden max-lg:mx-auto"><img src={cardimg4} className='w-full'/><div className='stars flex my-2'><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starLine} width='32' /></div><h3 className='font-bold text-center'>Marketing</h3><p className='text-sm w-72 px-8'>Compenderás los conceptos y las herramientas fundamentales, desde el marketing digital hasta el marketing de contenidos.</p><button className='bg-blue-300 font-bold text-sm rounded-2xl my-4 px-4 py-2 border border-blue400 shadow-md shadow-slate-400'>Inscríbete</button></div>
              <div className="card-container flex flex-col items-center w-72 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden max-lg:mx-auto"><img src={cardimg1} className='w-full'/><div className='stars flex my-2'><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starFill} width='32' /><img src={starLine} width='32' /></div><h3 className='font-bold text-center'>Diseño</h3><p className='text-sm w-72 px-8'>Obtendrás una base desde el diseño gráfico a la experiencia de usuario, donde desarrollarás tus habilidades teóricas y prácticas.</p><button className='bg-blue-300 font-bold text-sm rounded-2xl my-4 px-4 py-2 border border-blue400 shadow-md shadow-slate-400'>Inscríbete</button></div>
              <div className='w-72 max-sm:hidden'></div>
          </div>    
      </div>
      </>
    )
  }
  
  export default LandingPage;