import imgGithub from './img/github.svg'
import imgLinkedin from './img/linkedin.svg'
import imgWeb from './img/web.svg'

const EquipoCard = ({ foto, nombre, rol, github, linkedin, web = "", pais}) => {

    const openLink = (link) => {
        window.open(link, '_blank');
      };

    const nombres = nombre.split(' ')
  return (
    <div className="flex flex-col align-middle group">
        <img src={foto} alt={nombre} className="lg:grayscale lg:hover:grayscale-0 transition-all duration-300" />
        <p className="text-center group-hover:text-2xl group-hover:font-semibold group-hover:text-blue-900 group-hover:transition-all">{nombres[0]}</p>
        <p className="text-xs text-center group-hover:font-semibold group-hover:text-blue-900 group-hover:transition-all">{pais}</p>
        <p className="text-xs text-center group-hover:font-semibold group-hover:text-blue-900 group-hover:transition-all">{rol}</p>
        <div className='flex justify-center'>
          <img onClick={()=>openLink(github)} src={imgGithub} alt="Link to github" width='20' className='mx-3 my-2 cursor-pointer group-hover:scale-125 group-hover:transition-all' />
          <img onClick={()=>openLink(linkedin)} src={imgLinkedin} alt="Link to linkedin" width='20' className='mx-3 my-2 cursor-pointer group-hover:scale-125 group-hover:transition-all' />
          {web && <img onClick={()=>openLink(web)} src={imgWeb} alt="Link to web" width='20' className='mx-3 my-2 cursor-pointer group-hover:scale-125 group-hover:transition-all' />}
        </div>
    </div>
  )
}

export default EquipoCard