import image1 from './img/image1.png'
import image2 from './img/image2.png'
import image3 from './img/image3.png'
import image4 from './img/image4.png'
import image5 from './img/image5.png'
import image6 from './img/image6.png'

function LandingPage(){
    return (
      <>
      <div className="hero h-80 flex flex-col justify-center">
      <h1 className="text-3xl text-center font-bold mb-4">Cursos y aprendizaje en línea en todo el mundo</h1>
      <h2 className="text-2xl text-center font-bold mb-4">Transforma tu vida con nuestros cursos virtuales.</h2>
      <button className="callToAction flex h-12 justify-center items-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto"
      >INGRESA GRATIS
      </button>
      </div>
      <div className="main">
          <div className="row-container flex gap-20 justify-center mb-20">
              <div className="card-container flex flex-col items-center"><img src={image1} width='200' /><h3 className='font-bold text-center'>Curso Nombre</h3><p className='text-sm w-52'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eaque, numquam inventore.</p></div>
              <div className="card-container flex flex-col items-center"><img src={image2} width='200' /><h3 className='font-bold text-center'>Curso Nombre</h3><p className='text-sm w-52'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eaque, numquam inventore.</p></div>
              <div className="card-container flex flex-col items-center"><img src={image3} width='200' /><h3 className='font-bold text-center'>Curso Nombre</h3><p className='text-sm w-52'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eaque, numquam inventore.</p></div>
          </div>    
          <div className="row-container flex gap-20 justify-center mb-20">
              <div className="card-container flex flex-col items-center"><img src={image4} width='200' /><h3 className='font-bold text-center'>Curso Nombre</h3><p className='text-sm w-52'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eaque, numquam inventore.</p></div>
              <div className="card-container flex flex-col items-center"><img src={image5} width='200' /><h3 className='font-bold text-center'>Curso Nombre</h3><p className='text-sm w-52'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eaque, numquam inventore.</p></div>
              <div className="card-container flex flex-col items-center"><img src={image6} width='200' /><h3 className='font-bold text-center'>Curso Nombre</h3><p className='text-sm w-52'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eaque, numquam inventore.</p></div>
          </div>    
      </div>
      </>
    )
  }
  
  export default LandingPage;