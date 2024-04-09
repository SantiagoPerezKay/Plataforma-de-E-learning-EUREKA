import ModuleSidebar from '../ModuleSidebar/ModuleSidebar';
import { useState } from 'react'

export default function SidebarCourse() {
    const [isSelected, setIsSelected] = useState(null)
    const array = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"] 

    const handleItemClick = (index) => {
      setIsSelected(index);
    };
    return (
        <>
            <div className="flex flex-col w-[550px] h-[100%] pl-6 shadow-2xl">
                <h2 className="text-xl p-[7px] mt-4 mb-4">Introducción al curso 6</h2>
                {array.map((item, index)=> {
                    return <ModuleSidebar key={index} onClick={()=> handleItemClick(index)} estilos={index == isSelected ? "border-l-4 border-l-blue-700" : ""}/>          
                })}
                <button className='my-8 mx-auto w-max bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed content-center' disabled>Descargar Certificado</button> 
            </div>
        </>
    )
}