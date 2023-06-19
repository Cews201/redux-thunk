import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState={
    token: '123456465',
    ejecutando: false,
    error: null,

};

function tokenReducer( state= initialState, action){
    switch(action.type){
        case 'obteniendoToken':
            return {...state, ejecutando:true}
        case'actualizandoToken':
            return{...state, token: action.payload, ejecutando: false}
        
        case'limpiarToken':
            return{...state, token: null}
        
        case'errorToken':
            return{...state, error: action.payload, ejecutando: false}
    }
}

const store = configureStore({
    reducer: tokenReducer, 
    middleware: [thunk]
})

export default store;