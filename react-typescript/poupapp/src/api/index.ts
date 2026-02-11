import axios from 'axios'
import { ITransacoes, IUsuario } from '../types'

const api = axios.create({
  baseURL: `http://localhost:5000`,
})

const URI_USUARIOS = `/usuarios`
const URI_TRANSACOES = `/transacoes`

const calcularSaldo = (transacoes: ITransacoes[]): number => {
  const aplicarAjuste = (acumulado: number, transacao: ITransacoes) => {
    const operacao = transacao.tipo === 'receita' ? 1 : -1;
    return acumulado + (transacao.valor * operacao) // multiplicar por -1 inverte o sinal da transação :).
  }
  return transacoes.reduce(aplicarAjuste, 0)
}

export const obterUsuarios = async (): Promise<IUsuario[]> => {
  const { data } = await api.get<IUsuario[]>(URI_USUARIOS)
  return data
}

export const criarUsuario = async (usuario: Omit<IUsuario, 'id' | 'orcamentoDiario'>): Promise<IUsuario> => {
  const QTDE_MEDIA_DIAS_MES = 30
  const usuarioComOrcamentoDiario = {
    ...usuario, 
    orcamentoDiario: usuario.renda / QTDE_MEDIA_DIAS_MES
  }
  const { data } = await api.post<IUsuario>(URI_USUARIOS, usuarioComOrcamentoDiario)
  return data
}

export const atualizarUsuario = async (id: string, usuario: Partial<IUsuario>): Promise<IUsuario> => {
  const { data } = await api.patch(`${URI_USUARIOS}/${id}`, usuario)
  return data
}


// Transacoes
export const obterTransacoes = async (): Promise<ITransacoes[]> => {
  const { data } = await api.get<ITransacoes[]>(URI_TRANSACOES)
  return data
}

export const criarTransacao = async (
  transacao: Omit<ITransacoes, 'id' | 'userId'>,
  usuario: Omit<IUsuario, 'nome'>,
): Promise<{ transacao: ITransacoes, novoOrcamentoDiario: number }> => {
  const transacaoComUserId = { ...transacao, userId: usuario.id}
  const { data } = await api.post<ITransacoes>(URI_TRANSACOES, transacaoComUserId)

  const transacoes = await obterTransacoes();
  const saldo = calcularSaldo(transacoes);
  const novoOrcamentoDiario = usuario.renda / 30 + saldo;
  await atualizarUsuario(usuario.id, { orcamentoDiario: novoOrcamentoDiario })
    .catch((err: unknown) => console.error(err))
  return { transacao: data, novoOrcamentoDiario }
}