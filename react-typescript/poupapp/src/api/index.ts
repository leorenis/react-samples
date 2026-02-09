import axios from 'axios'
import { ITransacoes, IUsuario } from '../types'

const api = axios.create({
  baseURL: `http://localhost:5000/usuario`,
})

const URI_USUARIOS = `/usuarios`
const URI_TRANSACOES = `/transacoes`

export const obterUsuario = async (): Promise<IUsuario[]> => {
  const { data } = await api.get<IUsuario[]>(URI_USUARIOS)
  return data
}

export const criarUsuario = async (usuario: Omit<IUsuario, 'id'>): Promise<IUsuario> => {
  const { data } = await api.post<IUsuario>(URI_USUARIOS, usuario)
  return data
}


// Transacoes
export const obterTransacoes = async (): Promise<ITransacoes[]> => {
  const { data } = await api.get<ITransacoes[]>(URI_TRANSACOES)
  return data
}

export const criarTransacao = async (transacao: Omit<ITransacoes, 'id'>) => {
  const { data } = await api.post<ITransacoes>(URI_TRANSACOES, transacao)
  return data
}