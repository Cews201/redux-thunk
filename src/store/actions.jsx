import axios from 'axios'
import { createStoreHook } from 'react-redux'

const fetchToken = (identificacion, createStoreHook)=>{
    return dispatch =>{
        return axios.post('https://apiestudiantes.maosystems.dev/tokens',{identificacion,correo} )
        .then (response =>{
            dispatch({type: 'fetchToken', payload: response.data.token})
        })
    }
};