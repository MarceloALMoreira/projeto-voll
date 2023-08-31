import React, { useState } from "react";
import CampoDigitacao from "../../components/CampoDigitacao";
import Botao from "../../components/Botao";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from './Logo.png';
import { ILogin } from "../../types/ILogin";
import usePost from "../../usePost";
import autenticaStore from "../../stores/autentica.store";

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { cadastrarDados, erro, sucesso, resposta } = usePost();

  // fazendo redirencionamento depois do login feito
  const navigate = useNavigate();
  // função de envio login
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuario: ILogin = {
      email: email,
      senha: senha
    }
    try {

      cadastrarDados({ url: 'auth/login', dados: usuario });
      autenticaStore.login({ email: email, token: resposta });
      resposta && navigate('/dashboard');

    } catch (erro) {
      erro && alert('Não foi possivel fazer login')
    }
  }
  return (
    <>
      <Imagem src={logo} alt="Logo da Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Formulario onSubmit={handleLogin} >
        <CampoDigitacao valor={email} tipo="email" label="Email" placeholder="Insira seu endereco de e-mail" onChange={setEmail} />
        <CampoDigitacao valor={senha} tipo="password" label="Senha" placeholder="Insira sua Senha" onChange={setSenha} />
        <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
      </Formulario>
      <Paragrafo>Esqueceu sua senha?</Paragrafo>
      <ParagrafoCadastro>Ainda não tem conta? <LinkCustomizado to="/cadastro">Faça seu cadastro!</LinkCustomizado></ParagrafoCadastro>
    </>

  )
}

export default Login

const Imagem = styled.img`
  padding: 2em 0;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza)
`;

const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro)
`;

const ParagrafoCadastro = styled(Paragrafo)`
  color: var(--cinza);
`;

const LinkCustomizado = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
  text-decoration: none;
`;

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;