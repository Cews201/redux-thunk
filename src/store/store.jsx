import {configureStore, isAction} from '@reduxjs/toolkit';

const initialState={
    token: null,
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
            return{...state, token: null, ejecutando: false}
        
        case'errorToken':
            return{...state, error: action.payload, ejecutando: false}
    }
}