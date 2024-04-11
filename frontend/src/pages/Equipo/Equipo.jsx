import EquipoCard from './EquipoCard'
import { equipo } from './helper'

const Equipo = () => {
  return (
    <div className='mb-12'>
        <p className='font-bold text-center mb-4'>Equipo S14-11-M-JAVA en No Country</p>
        <div className='flex flex-wrap justify-center gap-4 xl:w-[1024px] xl:mx-auto'>
          {equipo.map(member => (
            <div key={member.nombre} className='w-52'>
              <EquipoCard
                key={member.nombre}
                foto={member.foto}
                nombre={member.nombre}
                rol={member.rol}
                linkedin={member.linkedin}
                pais={member.pais}
              />
            </div>
          ))}
        </div>
    </div>

  )
}

export default Equipo