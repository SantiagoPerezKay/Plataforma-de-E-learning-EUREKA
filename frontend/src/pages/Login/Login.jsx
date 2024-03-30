import { useState } from "react";
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

function Login() {
  // colocar el endpoint
  const url = '';

  // manejar los campos del form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

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
  
  // como se envía el form
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // se arma array de identificacion
    const user = {
      loginEmail,
      loginPassword,
    };
  
    try {
      // envía los datos y pide el token
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


  return (
    <div className="login">
          <form className="login-form space-y-6" onSubmit={handleSubmit}>
            <div className="login-email">
              <label htmlFor="username" className="login-label">EMAIL:</label>
              <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu email"
                  autoComplete="email"
                  required
                  className="block w-80 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="login-pass">
              <label htmlFor="password" className="login-label">CONTRASEÑA:</label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  required
                  className="block w-80 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-500"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
              />
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
