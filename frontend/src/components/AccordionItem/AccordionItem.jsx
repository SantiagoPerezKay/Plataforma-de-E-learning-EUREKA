import svgCheck from './svgCheck.svg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import IconCheck from '../iconCheck/IconCheck';

export const AccordionItem = ({title, content, idModule,idCurso}) => {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const contentLocation = location.pathname.split('/')[5]

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="w-full  bg-white cursor-pointer">
      <div className="p-[5px]" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && (
        <div className="flex flex-col list-none text-xl">
          {content?.map(cont =>
              <NavLink key={cont.id} to={`/dashboard/curso/${idCurso}/${idModule}/${cont.id}`}>
                <div className={`flex items-center hover:bg-[#f1f1f1] h-20 ${cont.id == contentLocation? "border-l-4 border-l-blue-700" : "border-none"}`}>
                    <div className="h-full w-12 flex justify-center items-center">
                      <IconCheck background={cont.progress.completed? "#03bb85" : "#fff"} />
                    </div>
                    <li className='text-[#2d2f31]'>{cont.title}</li>
                </div>
              </NavLink>
            )}
        </div>
      )}
    </div>

     {/*  {onClick, estilos, titleModule, shortDescription, viewTime} */}
      {/* <div className={`flex w-full  bg-white cursor-pointer hover:bg-[#f1f1f1] ${estilos}`} onClick={onClick}>
        <div className="h-full w-12 flex justify-center items-center">
          <img className="h-6" src={svgCheck} alt="icono de check" />
        </div>

        <div className="flex flex-col justify-center p-[5px]">
          <h2 className="text-base font-bold text-[#2d2f31]">{titleModule}</h2>
          <p className="font-normal text-[#2d2f31] text-base">{shortDescription}</p>
          <label className="text-[#6b6b6b] text-base">{viewTime} min</label>
        </div>
      </div>
 */}
    </>
  );
}

export default function AccordionMenu({ items }) {
  const ID = items.id
  return (
    <div>
      {items.modules?.map((item, index) => (
        <NavLink key={item.id} to={`/dashboard/curso/${ID}/${item.id}`}>
          <AccordionItem title={item.title} content={item.contents} idModule={item.id} idCurso={ID}/>
        </NavLink>
      ))}
    </div>
  );
};