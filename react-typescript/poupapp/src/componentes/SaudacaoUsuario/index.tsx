import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUsuario } from "../../types";
import { obterUsuarios } from "../../api";

export const StyledUsuario = styled.div`
  grid-area: usuario;
  color: var(--cor-neutra-light);

  & > h1 {
    margin: 16px 0 0 0;
  }

  & > p {
    margin: 8px 0 16px 0;
  }
`;

const SaudacaoUsuario = () => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null)

  useEffect(() => {
    buscaUsuario()
  }, [])

  const buscaUsuario = async () => {
    const usuarios = await obterUsuarios()
    setUsuario(usuarios[0])
  }

  return (
    <StyledUsuario>
      <h1>Olá, {usuario?.nome}</h1>
      <p>Veja como estão suas finanças hoje.</p>
    </StyledUsuario>
  );
};

export default SaudacaoUsuario;
