import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import BasePagina from './pages/PaginaBase'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Essa Routa vai ser a rota pai das outra para carrega oque tiver dentro dela. */}
                <Route path='/' element={<BasePagina />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes