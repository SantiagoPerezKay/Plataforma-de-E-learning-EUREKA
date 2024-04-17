import { createContext, useReducer, useState } from "react";

const initialState = {
    modulos:[],
};
  
const reducer = (state, action) => {
    switch (action.type) {
      case "agrega-modulo":
        return {
            ...state,
            modulos: [...state.modulos, action.payload]
        };
      case "agrega-contenido":
        const { moduloId, contenido } = action.payload;
        const moduloIndex = state.modulos.findIndex(modulo => parseInt(modulo.id) === parseInt(moduloId));
        if (moduloIndex !== -1) {
            const copiaModulos = [...state.modulos];
            copiaModulos[moduloIndex] = {
            ...copiaModulos[moduloIndex],
            content: [...copiaModulos[moduloIndex].content, contenido]
            };
            return { ...state, modulos: copiaModulos };
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