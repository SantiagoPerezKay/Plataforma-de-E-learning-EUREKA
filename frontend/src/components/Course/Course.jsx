import video from './Video/videoprueba.mp4'
import arrowLeft from './svg/arrowLeft.svg'
import arrowRight from './svg/arrowRight.svg'

export default function Course() {
    return (
        <>
            <div className="w-full">
                <div className="w-[90%] my-0 mx-auto">
                    <video className="w-full mt-[22px]" src={video} height="460" width="740" controls></video>
                    <div className='flex justify-around text-xl my-6'>
                        <a href='#' className='flex hover:text-blue-700'>
                            <span className='flex'>
                                <img className='w-6' src={arrowLeft}/>
                                Anterior
                            </span>
                        </a>
                        <a href='#' className='flex hover:text-blue-700'>
                            <span className='flex '>
                                Siguiente
                                <img className='w-6' src={arrowRight}/>
                            </span>
                        </a>
                    </div>
                    <h1 className="text-[1.7rem] tracking-[0.7px] font-bold text-[#2d2f31]">Introducción al Titulo del video 6</h1>
                    <p className="text-[1.1rem] text-[#2d2f31] font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, cum minima! Perspiciatis temporibus ab nobis modi doloremque autem rerum soluta eum eius? Distinctio, qui est tempore officia cumque quam dicta.</p>
                </div>
            </div>
        </>
    )
}