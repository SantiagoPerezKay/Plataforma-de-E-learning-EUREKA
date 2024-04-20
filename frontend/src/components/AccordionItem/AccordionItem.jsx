import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import IconCheck from '../iconCheck/IconCheck';

import { useSelector } from 'react-redux';

export const AccordionItem = ({title, content, idModule,idCurso}) => {
  

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const contentLocation = location.pathname.split('/')[5]

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='w-full'>
      <div className="max-w-[90%] mx-auto cursor-pointer">
        <div className="p-[5px]" onClick={toggleAccordion}>
          {title}
        </div>
        {isOpen && (
          <div className="flex flex-col list-none text-xl">
            {content?.map(cont =>
                <NavLink key={cont.id} to={`/dashboard/curso/${idCurso}/${idModule}/${cont.id}`}>
                  <div className={`flex items-center hover:bg-[#81c9fa] h-20 ${cont.id == contentLocation? "border-l-4 border-l-[#E09142]" : "border-none"}`}>
                      <div className="h-full w-12 flex justify-center items-center">
                        <IconCheck background={cont.progress.completed ? "#25f4e9" : "#fff"} />
                      </div>
                      <li className='text-[#2d2f31]'>{cont.title}</li>
                  </div>
                </NavLink>
              )}
          </div>
        )}
      </div>

    </div>
    </>
  );
}

export default function AccordionMenu() {
  const [id,setId]=useState(null)
  const informacionCurso = useSelector((state) => state.course.curso);
  useEffect(()=>{
    if(informacionCurso){
      setId(informacionCurso.id)
    }
  },[informacionCurso])


  return (
    <div className='h-screen bg-pictonBlue'>
      {informacionCurso?.modules?.map((item, index) => (
        <AccordionItem title={item.title} content={item.contents} idModule={item.id} idCurso={id}/>
      ))}
    </div>
  );
};