import svgCheck from './svgCheck.svg'
import data from '../Course/data.json'

export default function ModuleSidebar({onClick, estilos, titleModule, shortDescription, viewTime}) {

  return (
    <>

      <div className={`flex w-full  bg-white cursor-pointer hover:bg-[#f1f1f1] ${estilos}`} onClick={onClick}>
        <div className="h-full w-12 flex justify-center items-center">
          <img className="h-6" src={svgCheck} alt="icono de check" />
        </div>

        <div className="flex flex-col justify-center p-[5px]">
          <h2 className="text-base font-bold text-[#2d2f31]">{titleModule}</h2>
          <p className="font-normal text-[#2d2f31] text-base">{shortDescription}</p>
          <label className="text-[#6b6b6b] text-base">{viewTime} min</label>
        </div>
      </div>

    </>
  );
}