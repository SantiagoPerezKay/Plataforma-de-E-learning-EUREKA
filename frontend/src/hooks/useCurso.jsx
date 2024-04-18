import { useContext } from "react";
import { CursoContext } from "../context/CursoProvider";

function useCurso() {
  return useContext(CursoContext);
}

export default useCurso;
