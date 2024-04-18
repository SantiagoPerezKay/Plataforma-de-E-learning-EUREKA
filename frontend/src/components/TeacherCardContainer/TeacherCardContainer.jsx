import { useEffect } from "react"
import axios from "axios";

export default function TeacherCardContainer() {
    useEffect(()=> {
        const fetchCourses = async () => {
            const RUTA = 'https://s14-11-m-java.onrender.com/api/v1/teachers/courses'
            const token = localStorage.getItem("jwt");

            const config = {
                headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${token}`,
                },
              };

            await axios.get(RUTA, config)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        }
        fetchCourses()
    }, [])

    return <h1>Lista de cursos</h1>
}