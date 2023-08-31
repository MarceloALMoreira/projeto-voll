import { Navigate, Outlet } from "react-router-dom";
import autenticaStore from "../stores/autentica.store"

const RotaPrivada = () => {
  const { estaAutenticado } = autenticaStore;
  return (

    //  A variável estaAutenticado é definida como uma propriedade do objeto 
    // autenticaStore e armazena o estado de autenticação do usuário. 
    // Isso significa que a variável contém um valor booleano que indica 
    // se o usuário está autenticado ou não.
    
    estaAutenticado ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default RotaPrivada