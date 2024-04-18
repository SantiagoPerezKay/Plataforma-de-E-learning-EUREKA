import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alertas, Spinner } from "../../index";
import { useState } from "react";
import axios from "axios";




const RegisterCredentials = () => {
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    // lo necesario para subir archivos
    const [selectedFile, setSelectedFile] = useState('');
    
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
        } catch (error) {
            console.error('Ocurrió un problema al subir el archivo', error);
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
            console.log(resp.data);
            // navigate('/')
        } catch (error) {
        setLoading(false)
        handleError(error)
        setTimeout(()=>{
            resetError()
        },3000)
        }
    });



    // como manejar el error del fetch, esto se ejecuta en el handleSubmit
    const [error,setError]= useState({
        state:false,
        msg:''
    })

    const handleError = (error) => {
        if(error.detail){
            setError({
                state:true,
                msg:'algo salio mal,intentalo mas tarde'
            })
        }else{
            setError({
                state:true,
                msg:error.message
            })
        }
    };

    const resetError =()=>{
        setError({
        state:false,
        msg:''
        })
    }
  return (
    <div className="register-teacher flex flex-col align-middle">
    <h2>Registro como Profesor</h2>
    <h3>Adjunta tus credenciales</h3>
    <Alertas err={error} size='xs'>
        <form className="cred-form space-y-6 mx-auto" onSubmit={onSubmit}>
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
                        className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
                        {...register("experience", {
                            required: {
                            value: true,
                            message: "Las credenciales son requeridos",
                            },
                        })}
                >
                    <option value="De 0 a 1 año">De 0 a 1 año</option>
                    <option value="De 1 a 5 añós">De 1 a 5 añós</option>
                    <option value="Más de 5 años">Más de 5 años</option>
                </select>
                {errors.experience && (
                    <span className="block text-red-600 text-xs absolute">
                    {errors.experience.message}
                    </span>
                )}
            </div>
            <div className="cred-certificados w-80">
            <label htmlFor="credentials" className="credentials-label w-80 text-wrap text-base font-semibold leading-2">
                ¿Cuentas con certificados?<br/>Especificalos para mejorar la credibilidad de tu perfil y obtener más estudiantes
            </label>
            <textarea
                id="credentials"
                name="credentials"
                placeholder="Cuentanos sobre tus credenciales"
                className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
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
            <label htmlFor="file" className="file-label text-base font-semibold">Sube archivo de Credenciales:</label>
            <input type="file" onInput={handleFileChange} 
                accept="image/jpeg, image/png, application/pdf"
                id="file"
                className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
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
                className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
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
    </Alertas>
  </div>
  )
}

export default RegisterCredentials