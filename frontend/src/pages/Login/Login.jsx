import { useState } from "react";
import { useForm } from "react-hook-form";
import succeed from './img/shield-check.svg'
import useAuth from "../../api/auth";

import { useNavigate } from "react-router-dom";


import {Alertas,Spinner} from "../../index";

function Login() {

  const [error,setError]= useState({
    state:false,
    msg:''
  })
  
  const [loading,setLoading]=useState(false)


  const navigate = useNavigate();
  // cargamos la funcion de llamado a la api al endpoint de login
  const {
    authLogin
  }=useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // como se envía el form
  const onSubmit = handleSubmit( async (data)=> {
    try {
      setLoading(true)
      await authLogin(data);
      navigate("/dashboard/student");
    } catch (error) {
      setLoading(false)
      handleError(error)
      setTimeout(()=>{
        resetError()
      },3000)
    }
  });

  // como manejar el error del fetch, esto se ejecuta en el handleSubmit
  const handleError = (error) => {
    if(error.detail){
      if(error.detail.password){
        const rta = error.detail.password
        setError({
          state:true,
          msg:rta
        })
      }else{
        setError({
          state:true,
          msg:'algo salio mal,intentalo mas tarde'
        })
      }
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
    
    <div className="login flex flex-wrap justify-evenly w-full 2xl:w-[60%] 2xl:mx-auto">
        <div className="login-left max-md:mb-8">
          <Alertas err={error} size='xs'>
            <h2 className="font-bold text-center mb-4 mt-8">Ingresa a tu cuenta</h2>
            <form className="login-form space-y-6" onSubmit={onSubmit}>
              <div className="login-email">
                <label htmlFor="email" className="login-label text-xs ml-2">EMAIL:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    autoComplete="email"
                    className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
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
              <div className="login-pass">
                <label htmlFor="password" className="login-label text-xs ml-2">CONTRASEÑA:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    autoComplete="current-password"
                    className="block w-80 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500 rounded"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "La contraseña es requerida",
                      },
                      minLength: {
                        value: 8,
                        message: "Debe contener al menos 8 caracteres"
                      },
                      maxLength: {
                        value: 15,
                        message: "Debe tener como maximo 15 caracteres"
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                        message: "Debe contener almenos una mayuscula, minuscula, número, caract. especial '$@$!%*?&'",
                      },
                    })}
                />
                  {errors.password && (
                    <span className="block text-red-600 text-xs absolute">
                      {errors.password.message}
                    </span>
                  )}
              </div>
              <div>
                <button
                    type="submit"
                    className="flex w-40 justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto"
                >
                  {
                    loading ? <Spinner/> : <p>INICIAR SESION</p>
                  }
                </button>
              </div>
            </form>
          </Alertas>
        </div>
        <div className="line max-md:h-0 max-md:w-full md:h-100 md:w-0 border border-gray-300 m-4"></div>
        <div className="login-right">
        <h2 className="font-bold text-center m-8">¿Necesitas una cuenta?</h2>
        <div className="flex justify-between w-60"><p>Acceso ilimitado</p><img src={succeed} width='32' /></div>
        <div className="flex justify-between w-60"><p>Cientos de cursos</p><img src={succeed} width='32' /></div>
        <div className="flex justify-between w-60"><p>Certificaciones</p><img src={succeed} width='32' /></div>
        <div className="flex justify-between w-60"><p>Material gráfico</p><img src={succeed} width='32' /></div>
        <div className="flex content-center m-8"><button className="flex w-40 justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          REGISTRARSE
        </button></div>
        </div>
    </div>
  )
}

  export default Login