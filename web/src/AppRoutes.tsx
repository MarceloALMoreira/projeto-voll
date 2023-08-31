import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import BasePagina from './pages/PaginaBase'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import PaginaBaseFormulario from './pages/PaginabaseFormulario'
import PaginaInicial from './pages/PaginaInicial'
import RotaPrivada from './utils/RotaPrivada'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Essa Routa vai ser a rota pai das outra para carrega oque tiver dentro dela. */}
                <Route path='/' element={<BasePagina />} >
                    <Route index element={<PaginaInicial />} />
                    <Route element={<RotaPrivada />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>

                {/* Rota pai de login e cadastro */}
                <Route path='/' element={<PaginaBaseFormulario />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes