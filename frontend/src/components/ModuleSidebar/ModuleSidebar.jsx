import svgCheck from './svgCheck.svg'

export default function ModuleSidebar({onClick, estilos}) {

  return (
    <>
      <a href='#'>
      <div className={`flex w-full h-[4.5rem] bg-white cursor-pointer hover:bg-[#f1f1f1] ${estilos}`} onClick={onClick}>
        <div className="h-full w-12 flex justify-center items-center">
          <img className="h-6" src={svgCheck} alt="icono de check" />
        </div>

        <div className="flex flex-col justify-center p-[5px]">
          <h2 className="text-base font-bold text-[#2d2f31]">Titulo de este modulo</h2>
          <p className="font-normal text-[#2d2f31]">Descripcion de este modulo</p>
          <label className="text-[#6b6b6b]">10 min</label>
        </div>
      </div>
      </a>
    </>
  );
}