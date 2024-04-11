const EquipoCard = ({ foto, nombre, rol, linkedin, pais}) => {

    const openLink = (link) => {
        window.open(link, '_blank');
      };

    const nombres = nombre.split(' ')
  return (
    <div className="flex flex-col align-middle">
        <img src={foto} alt={nombre} className="lg:grayscale lg:hover:grayscale-0 transition-all duration-300" />
        <p className="text-center">{nombres[0]}</p>
        <p className="text-xs text-center">{rol}</p>
        <p className="text-xs text-center">{pais}</p>
        <button onClick={()=>openLink(linkedin)}>LinkedIn</button>
    </div>
  )
}

export default EquipoCard