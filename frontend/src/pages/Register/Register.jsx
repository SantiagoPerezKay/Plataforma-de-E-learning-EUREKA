import { useForm } from "react-hook-form";

export default function Register() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data)=> {
      console.log("Formulario enviado")
      console.log(data)
    })
  return (
    <>
      <div className="bg-slate-200 p-3 max-w-2xl my-0 mx-auto">
        <form onSubmit={onSubmit} className="max-w-[70%] my-0 mx-auto">
          <h1 className="text-3xl p-2 m-2 text-center font-bold">Formulario de registro</h1>

          {/* Name */}
          <label className="block" htmlFor="name">Nombre</label>
          <input 
              className="w-full" 
              id="name" 
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z\s]{2,30}$/,
                  message: "Nombre no válido",
                },
              })}
            />
            {errors.name && (
              <span className="block text-red-600 text-xs">
                {errors.name.message}
              </span>
            )}

          {/* LastName */}
          <label className="block" htmlFor="lastName">Apellido</label>
          <input 
              className="w-full" 
              id="lastName" 
              type="text"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "El apellido es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z\s]{2,30}$/,
                  message: "Apellido no válido",
                },
              })}
            />
            {errors.lastName && (
              <span className="block text-red-600 text-xs">
                {errors.lastName.message}
              </span>
            )}

          {/* Email */}
          <label className="block" htmlFor="email">Correo</label>
          <input 
            className="w-full outline-none" 
            id="email" 
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.email && (
            <span className="block text-red-600 text-xs">
              {errors.email.message}
            </span>
          )}


          {/* Password */}
          <label className="block" htmlFor="password">Contraseña</label>
          <input className="w-full" id="password" type="password" />

          {/* Rol */}
          <label htmlFor="rol" className="block">Seleccione su rol</label>
          <select defaultValue={'DEFAULT'} id="rol" className="w-full">
            <option value={"DEFAULT"} disabled="disabled">
              Seleccione una opción
            </option>
            <option value={"alumno"}>Alumno</option>
            <option value={"profesor"}>Profesor</option>
          </select>

          <button>Enviar</button>
          {/* Este es un ejemplo */}
        </form>
      </div>
    </>
  );
}
