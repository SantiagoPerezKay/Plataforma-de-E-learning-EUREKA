import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alertas, Spinner } from "../../index";
import { useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { validateProfesor } from "../../utils/DecodificarToken";

const RegisterCredentials = () => {
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    // lo necesario para subir archivos
    const [selectedFile, setSelectedFile] = useState('');
    const [uploaded, setUploaded] = useState('')
    
    const handleFileChange = async (event) => {
        // cuando se elige un archivo ya lo sube al servidor
        // armado del header
        console.log(event)
        const token = localStorage.getItem("jwt");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        try {
            const response = await axios.post('https://s14-11-m-java.onrender.com/api/v1/files', formData, config);
            console.log('Archivo subido:', response.data);
            setSelectedFile(response.data.url)
            setUploaded('✔')
            toast.success("Se ha subido el archivo correctamente", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
              });
        } catch (error) {
            console.error('Ocurrió un problema al subir el archivo', error);
            toast.error('Ocurrió un problema al subir el archivo', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
              });
            setUploaded('❌')
        }
    }

    // toma datos del form con react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    // como se envía el form
    const onSubmit = handleSubmit(async (data)=> {
        // se agrega la url que devuelve la subida de archivo
        // armado del header de la peticion
        const token = localStorage.getItem("jwt");
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        // armado del body de la peticion
        const body = {
            "experience": data.experience,
            "credentials": data.credentials,
            "file": selectedFile,
            "linkedin": data.linkedin,
        }

        try {
            setLoading(true)
            console.log(body)
            const resp = await axios.post('https://s14-11-m-java.onrender.com/api/v1/teachers', body, config);
            const ruta =  await validateProfesor()
            navigate(ruta)
        } catch (error) {
            setLoading(false)
            handleError()
        }
    });



    // como manejar el error del fetch, esto se ejecuta en el handleSubmit
    const handleError = () => {
        toast.error('Algo salio mal, intentalo mas tarde', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
    };

  return (
    <div className="register-teacher flex flex-col items-center relative">
    <h2 className="text-center text-blue-500 font-bold text-xl">Registro como Profesor</h2>
    <h3 className="text-center font-bold text-xl">Adjunta tus credenciales</h3>
        <form className="cred-form space-y-6 max-md:w-[95dvw] md:w-80 mx-auto my-8" onSubmit={onSubmit}>
            {/* info que se espera 
            {
            "experience": "string",
            "credentials": "string",
            "linkedin": "string",
            "file": "string"
            } */}

            <div className="experience">
                <label htmlFor="experience" className="login-label block text-base font-semibold">
                    ¿Cuánto tiempo tienes como profesor?
                </label>
                <select name="experience"
                        id="experience"
                        className="block max-md:w-full md:w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
                        {...register("experience", {
                            required: {
                            value: true,
                            message: "Las credenciales son requeridos",
                            },
                        })}
                >
                    <option value="De 0 a 1 año">De 0 a 1 año</option>
                    <option value="De 1 a 5 añós">De 1 a 5 años</option>
                    <option value="Más de 5 años">Más de 5 años</option>
                </select>
                {errors.experience && (
                    <span className="block text-red-600 text-xs absolute">
                    {errors.experience.message}
                    </span>
                )}
            </div>
            <div className="cred-certificados">
            <label htmlFor="credentials" className="credentials-label text-wrap text-base font-semibold leading-2">
                ¿Cuentas con certificados?<br/>Especificalos para mejorar la credibilidad de tu perfil y obtener más estudiantes
            </label>
            <textarea
                id="credentials"
                name="credentials"
                placeholder="Cuentanos sobre tus credenciales"
                className="block max-md:w-full md:w-80 mx-auto  p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
                {...register("credentials", {
                    required: {
                        value: true,
                        message: "Las credenciales son requeridos",
                    },
            })}
        />
            {errors.credentials && (
                <span className="block text-red-600 text-xs absolute">
                {errors.credentials.message}
                </span>
            )}

            </div>
            <div className="file">
            <label htmlFor="file" className="file-label text-base font-semibold">Sube archivo de Credenciales:</label><span className="ml-4">{uploaded}</span>
            <input type="file" onInput={handleFileChange} 
                accept="image/jpeg, image/png, application/pdf"
                id="file"
                className="block max-md:w-full md:w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
                {...register("file", {
                    required: {
                    value: true,
                    message: "El archivo de credenciales es requerido",
                    },
                })}
            />
            {errors.file && (
                <span className="block text-red-600 text-xs absolute">
                {errors.file.message}
                </span>
            )}

            </div>
            <div className="linkedin">
            <label htmlFor="linkedin" className="linkedin-label text-base font-semibold">Perfil de LinkedIn:</label>
            <input
                id="linkedin"
                name="linkedin"
                type="text"
                placeholder="Ingresa tu LinkedIn"
                className="block max-md:w-full md:w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
                {...register("linkedin", {
                    required: {
                    value: true,
                    message: "LinkedIn es requerido",
                    },
                })}
            />
            {errors.linkedin && (
                <span className="block text-red-600 text-xs absolute">
                {errors.linkedin.message}
                </span>
            )}

            </div>
            <div>
            <button
                id="reg-credentials"
                type="submit"
                className="flex w-40 justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto"
            >
                { loading ? <Spinner/> : <p>Enviar Credenciales</p>}
            </button>
            </div>
        </form>
        <ToastContainer position="top-right" />
  </div>
  )
}

export default RegisterCredentials