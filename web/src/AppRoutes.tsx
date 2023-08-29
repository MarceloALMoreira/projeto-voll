import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import BasePagina from './pages/PaginaBase'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import PaginaBaseFormulario from './pages/PaginabaseFormulario'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Essa Routa vai ser a rota pai das outra para carrega oque tiver dentro dela. */}
                <Route path='/' element={<BasePagina />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                {/* Rota pai de login e cadastro */}
                <Route path='/' element={<PaginaBaseFormulario/>}>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes