import { useState } from "react";

const usePost = () => {
    // Quando eu fazer uma requisição ele pode trazer um erro..
    const [erro, setErro] = useState('');

    // Qunado eu fazer uma requisição, em caso de sucesso vai trazer para essa  variavel...
    const [sucesso, setSucesso] = useState(false);

    // 
    const [resposta, setResposta] = useState('');


    // A função usePost() é responsável por enviar os dados do usuário para um servidor remoto usando uma solicitação HTTP POST.

    // Criando uma função async, que retorna uma promisse
    async function cadastrarDados<T>({ url, dados }:
        { url: string, dados: T }) {
        try {
            const resposta = await fetch(`http://localhost:8080/${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            setSucesso(true);
            const respostaConvertida = await resposta.json();
            setResposta(respostaConvertida.token);
        } catch (error) {
            setErro('Não foi possivel enviar os dados')
        }
    }
    return { cadastrarDados, sucesso, erro, resposta }
}

export default usePost