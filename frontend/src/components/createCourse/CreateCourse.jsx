import { useState } from "react";

import DatosCourse from "./DatosCourse";
import CrearModulos from "./CrearModulos";
import UltimoPaso from "./UltimoPaso";

import CursoProvider from "../../context/CursoProvider";

function CreateCourse() {

    const [step,setStep]=useState(1)

    return (
        <CursoProvider>
            <div className="w-[90%] mx-auto mt-10">
                {
                    step === 1 && <DatosCourse setStep={setStep}/>
                }
                {
                    step === 2 && <CrearModulos setStep={setStep}/>
                }
                {
                    step === 3 && <UltimoPaso/>
                }
            </div>
        </CursoProvider>
    )
}

export default CreateCourse;
