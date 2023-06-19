import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
    const dispatch= useDispatch();
    const {token, ejecutando, error} = useSelector((state) => state);
    const {tokenLimpio, setTokenLimpio}=useState(false);

    useEffect(() =>{
      dispatch( fetchToken(123456, 'ejemplo@ejemplo.com'));

    },[dispatch])

    const limpiarToken= () =>{
      dispatch({type: 'limpiarToken'});
      setTokenLimpio(true);
    }
    const obtenerToken= () =>{
      dispatch({type: 'obtenerToken'});
      setTokenLimpio(true);
    }

  return (

        <div>
          <h1>cargando info</h1>
          {ejecutando ? <p>Cargando...</p> : null}
          {token ? <p>Token: {token}</p> : null}
          {error ? <p>Error: {error} </p> : null}
          {token ? <button onClick={limpiarToken}>Limpiar token</button>: null}
          {token ? <button onClick={obtenerToken}>Obtener Token</button>: null}
      </div>
     
    
  )
}

export default App
