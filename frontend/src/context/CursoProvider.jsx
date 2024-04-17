import { createContext, useReducer, useState } from "react";

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
    const [informacionCurso,setInformacionCurso]=useState({})
    const [stateModulos, dispatch] = useReducer(reducer, initialState);

    return (
        <CursoContext.Provider
            value={{
                setInformacionCurso,
                stateModulos,
                dispatch
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