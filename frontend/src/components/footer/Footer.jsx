import { useForm } from "react-hook-form";
import logo from '../navBar/img/logo.webp'

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
        <div className="footer  border-t border-gray-300 pt-8 w-full overflow-hidden bg-blue-500">
            <div className="footer-container flex flex-wrap justify-around max-md:flex-col-reverse max-md:gap-8 max-xl:justify-center 2xl:w-4/5 2xl:mx-auto max-xl:px-8">
                    <div className="footer-logo cursor-pointer max-md:mx-auto max-md:mb-16"><img src={logo} width='200' /></div>
                    <div className="footer-menu max-md:mx-auto">
                        <ul className="flex gap-4 xl:mb-14 max-xl:ml-20 max-md:ml-0">
                            <li className="w-20 cursor-pointer">Inicio</li>
                            <li className="w-20 cursor-pointer">
                                Cursos
                                <ul className="text-base ml-2">
                                    <li className="cursor-pointer">Negocios</li>
                                    <li className="cursor-pointer">Finanzas</li>
                                    <li className="cursor-pointer">IT</li>
                                    <li className="cursor-pointer">Marketing</li>
                                    <li className="cursor-pointer">Diseño</li>
                                </ul>
                            </li>
                            <li className="w-20 cursor-pointer">Equipo</li>
                        </ul>
                    </div>
                    <div className="footer-news max-xl:mb-16 max-md:mb-0">
                        <h3 className="text-lg font-bold mb-2 max-md:text-center">Sumate al Newsletter</h3>
                        <form   className="footer-form flex flex-wrap gap-2 items-end max-md:align-middle" 
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
        </div>
      )
}

export default Footer