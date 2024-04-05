import { useForm } from "react-hook-form";

const Footer = () => {
      // paramétros del UseForm
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit ((data)=> {
        console.log(data)
      })
    return (
        <div className="footer flex flex-wrap justify-around items-center my-4 border-t border-gray-300 pt-8 w-full overflow-hidden">
            <div className="footer-logo py-4 px-12 border border-gray-400">Logo EUREKA!</div>
            <div className="footer-menu">
                <ul className="">
                    <li className="mx-4 my-6">Inicio</li>
                    <li className="mx-4 my-6">Cursos</li>
                    <li className="mx-4 my-6">Equipo</li>
                </ul>
            </div>
            <div className="footer-news">
                <h3 className="text-lg font-bold mb-4 max-md:text-center">Newsletter</h3>
                <form   className="footer-form flex flex-wrap gap-2 items-end max-md:justify-end" 
                        onSubmit={onSubmit}>
                    <div className="footer-email">
                        <label htmlFor="email" className="login-label text-xs pl-4">EMAIL:</label>
                        <input
                            id="news-email"
                            name="email"
                            type="email"
                            placeholder="Ingresa tu email"
                            autoComplete="email"
                            className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500"
                            {...register("email", {
                                required: {
                                value: true,
                                message: "Correo es requerido",
                                },
                                pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Correo no válido. Debe ser formato 'ejemplo@mail.com'",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="block text-red-600 text-xs absolute">
                            {errors.email.message}
                            </span>
                        )}

                    </div>
                    <div className="flex gap-2">
                        <button className="register text-white h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default Footer