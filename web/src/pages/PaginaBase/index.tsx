import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"

const BasePagina = () => {
    return (
        <>
            {/* fazendo uma pagina para carregar o cabeçalho e rodape em todas as paginas iguais. */}
            <Cabecalho />

            {/* Aqui dentro do main ele carrega alguma coisa.. que no caso  é o Outlet */}
            {/* tudo que eu enviar para dentro dessa routa ele vai carrega para dentro do outlet  */}
            <main>
                <Outlet />
            </main>
            <Rodape />
        </>
    )
}

export default BasePagina