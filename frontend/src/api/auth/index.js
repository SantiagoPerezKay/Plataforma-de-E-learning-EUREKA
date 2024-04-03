import axios from "axios"

import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slices/auth/authSlice';

const authLogin = async (dataUser)=>{
    const dispatch = useDispatch();

    try {
        const {data} = await axios.post('URL_LOGIN_BACKEND',dataUser)
        localStorage.setItem('jwt', data.token)
        dispatch(setCredentials(data))
    }catch(error) {
        throw new Error(error.message);
    }
}

const authRegistro = async (dataUser)=>{
    const dispatch = useDispatch();
    try {
        const {data} = await axios.post('URL_REGISTER_BACKEND',dataUser)
        localStorage.setItem('jwt', data.token)
        dispatch(setCredentials(data))
    }catch(error) {
        throw new Error(error.message);
    }
}


export {
    authLogin,
    authRegistro
}