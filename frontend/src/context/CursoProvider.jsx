import { createContext, useReducer, useState } from "react";
import useProfesor from "../api/profesor";


const initialState = {
    modules:[],
};
  
const reducer = (state, action) => {
    switch (action.type) {
      case "agrega-modulo":
        return {
            ...state,
            modules: [...state.modules, action.payload]
        };
      case "agrega-contenido":
        const { moduloId, contents } = action.payload;
        const moduloIndex = state.modules.findIndex(modulo => parseInt(modulo.position) === parseInt(moduloId));
        if (moduloIndex !== -1) {
            const copiaModulos = [...state.modules];
            copiaModulos[moduloIndex] = {
            ...copiaModulos[moduloIndex],
            contents: [...copiaModulos[moduloIndex].contents, contents]
            };
            return { ...state, modules: copiaModulos };
        }
        return state;
      default:
        return state;
    }
};

const CursoContext = createContext()

function CursoProvider({children}){

    const {
        crearCursoData
    }=useProfesor()

    const [informacionCurso,setInformacionCurso]=useState({})
    const [stateModulos, dispatch] = useReducer(reducer, initialState);

    const crearCurso = async ()=>{
        const dataCurso = {
            ...informacionCurso,
            ...stateModulos
        }

        console.log(dataCurso)
        
        try {
            const response = crearCursoData(dataCurso)
            return response
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <CursoContext.Provider
            value={{
                setInformacionCurso,
                stateModulos,
                dispatch,
                crearCurso
            }}
        >
            {children}
        </CursoContext.Provider>
    )
}

export {
    CursoContext
}

export default CursoProvider;