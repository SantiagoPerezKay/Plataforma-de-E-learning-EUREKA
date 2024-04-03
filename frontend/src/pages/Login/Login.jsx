import { useForm } from "react-hook-form";
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

function Login() {
  // colocar el endpoint
  const url = '';

  // paramétros del UseForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // como se envía el form
  const serverSubmit = async () => {
    let user = ''  //esto no me gusta mucho, ver como funciona, necesita useState?
   
    //recoge los datos del useForm
    handleSubmit((data)=> {
      console.log(data)
      user = data
    })
  
    try {
      // envía los datos y pide el token con los datos del useForm
      const response = await axios.post(url, user);
      console.log(response.data);   

      // otra forma, probar con el endpoint
      // let response
      // axios.post("https://reqres.in/api/users", userData).then((response) => {
      //   response = response.data;
      // });

      //guarda el token en localStorage
      localStorage.setItem('jwt', response.data.jwtToken);
      console.log('Has iniciado sesión correctamente')

      // redirige a la página que necesite, le puse raíz porque es lo que tenemos por ahora
      // return <Redirect to="/" />
    } catch (error) {
      handleError(error);
      // mostrar error con un alert
    }
  };

  // como manejar el error del fetch, esto se ejecuta en el handleSubmit
  const handleError = (error) => {
    if (error.response) {
      console.log(error.response.data);
  
    } else if (error.request) {
      console.log(error.request);
  
    } else {
      console.log('Error', error.message);
    }
  };
  




  return (
    
    <div className="login">
          <form className="login-form space-y-6" onSubmit={serverSubmit}>
            <div className="login-email">
              <label htmlFor="email" className="login-label">EMAIL:</label>
              <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu email"
                  autoComplete="email"
                  className="block w-80 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500"
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
                <span className="block text-red-600 text-xs">
                  {errors.email.message}
                </span>
              )}

            </div>
            <div className="login-pass">
              <label htmlFor="password" className="login-label">CONTRASEÑA:</label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  className="block w-80 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500"
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
                  <span className="block text-red-600 text-xs">
                    {errors.password.message}
                  </span>
                )}
            </div>
            <div>
              <button
                  type="submit"
                  className="flex w-80 justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                INICIAR SESION
              </button>
            </div>
          </form>
    </div>
  )
}

  export default Login