import AccordionMenu from '../AccordionItem/AccordionItem';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import datos from '../Course/data.json'

export default function SidebarCourse() {
    const data = datos[0].modules;
    
    /* const [isSelected, setIsSelected] = useState(null)

    const handleItemClick = (index) => {
      setIsSelected(index);
    }; */
    return (
        <>
            <AccordionMenu items={data}/>
            {/* <div className="w-full flex flex-col">
                <h2 className="text-xl p-[7px] mt-4 mb-4 font-bold">{datos[0].titleCourse}</h2>
                {datos[0].contenido.map((item, index)=> {
                    return <NavLink key={item.idModule} to={`/dashboard/curso/5/${index}`}><ModuleSidebar titleModule={item.titleModule} shortDescription={item.shortDescription} viewTime={item.viewTime} onClick={()=> handleItemClick(index)} estilos={index == isSelected ? "border-l-4 border-l-blue-700" : ""}/></NavLink>       
                })}
                <button className='my-8 text-base mx-auto w-max bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed content-center' disabled>Descargar Certificado</button> 
            </div> */}
        </>
    )
}