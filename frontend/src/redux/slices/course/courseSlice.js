import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
    curso:null
}

const courseSlice = createSlice({
    name:'course',
    initialState:stateSlice,
    reducers:{
        setCourse: (state,action)=>{
            const curso = action.payload
            return {
                ...state,
                curso
            };
        },
        /* modifyProgressById: (state, action)=>{
            const {moduloId,contentId} = action.payload
            console.log(state)
            const modulosCurso = state.modules
            const moduloIndex = modulosCurso.findIndex(modulo=>parseInt(modulo.id) === parseInt(moduloId))
            if (moduloIndex !== -1) {
                const modulo = modulosCurso[moduloIndex]

                const contenidoModulo = [...modulo.contents]
                const contenidoIndex = contenidoModulo.findIndex(contenido=> parseInt(contenido.id) === parseInt(contentId))
                const contenido = contenidoModulo[contenidoIndex]

            }
        } */
        modifyProgressById: (state, action) => {
            const { moduloId, contentId } = action.payload;
            return {
                ...state,
                curso: {
                    ...state.curso,
                    modules: state.curso.modules.map(modulo => {
                        if (parseInt(modulo.id) === parseInt(moduloId)) {
                            return {
                                ...modulo,
                                contents: modulo.contents.map(contenido => {
                                    if (parseInt(contenido.id) === parseInt(contentId)) {
                                        // Modifica el contenido según sea necesario
                                        return {
                                            ...contenido,
                                            progress: {
                                                ...contenido.progress,
                                                completed : true
                                            }
                                            // Actualiza el progreso según sea necesario
                                        };
                                    }
                                    return contenido;
                                })
                            };
                        }
                        return modulo;
                    })
                }
            };
        }
    }
})

export const {
    setCourse,
    modifyProgressById
} = courseSlice.actions;


export default courseSlice.reducer;