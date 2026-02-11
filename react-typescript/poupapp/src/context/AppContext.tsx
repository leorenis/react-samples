/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ITransacoes, IUsuario } from '../types'
import { obterUsuarios, criarUsuario, obterTransacoes, criarTransacao } from '../api'

/**
 * Definição do tipo do contexto da aplicação.
 * 
 * @typedef {Object} AppContextType
 * @property {IUsuario | null} usuario - O usuário atual armazenado no contexto.
 * @property {(usuarioForm: Omit<IUsuario, 'id' | 'orcamentoDiario'>) => Promise<void>} salvarUsuario - Função para salvar um novo usuário.
 * @property {(transacaoForm: Omit<ITransacoes, 'id'>) => Promise<void>} salvarTransacoes - Função para salvar uma nova transação.
 */
interface AppContextType {
  usuario: IUsuario | null,
  transacoes: ITransacoes[] | null,
  salvarUsuario: (usuarioForm: Omit<IUsuario, 'id' | 'orcamentoDiario'>) => Promise<void>
  salvarTransacoes: (transacaoForm: Omit<ITransacoes, 'id' | 'userId'>) => Promise<void>
}

/**
 * Propriedades do provider, incluindo as crianças que serão renderizadas.
 * 
 * @typedef {Object} AppContextProps
 * @property {ReactNode} children - Elementos filhos a serem renderizados dentro do contexto.
 */
type AppContextProps = {
  children: ReactNode,
}

/**
 * Contexto que armazena o estado do usuário e fornece funções para interagir com ele.
 * O contexto será utilizado para gerenciar o estado global do usuário na aplicação.
 * 
 * @type {React.Context<AppContextType | undefined>}
 */
const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: AppContextProps) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null)
  const [transacoes, setTransacoes] = useState<ITransacoes[]>([])

  useEffect(() => {
    buscaUsuario()
    buscaTransacoes()
  }, [])

  /**
   * Função assíncrona que busca o usuário da API e atualiza o estado.
   * 
   * @async
   * @returns {Promise<void>} Retorna uma Promise que resolve quando a busca do usuário for concluída.
   */
  const buscaUsuario = async () => {
    try {
      const usuarios = await obterUsuarios()
      const totalUsuarios = usuarios.length
      if (!totalUsuarios) {
        console.warn('Nenhum usuário encontrado');
      }
      const key = totalUsuarios-1
      setUsuario(usuarios[key])
    } catch (err: unknown) {
      console.log('Erro ao obter usuário', err);
    }
  }

  /**
   * Função assíncrona que cria um novo usuário e atualiza o estado com o novo usuário.
   * 
   * @async
   * @param {Omit<IUsuario, 'id' | 'orcamentoDiario'>} usuarioForm - Dados do novo usuário sem o campo 'id'.
   * @returns {Promise<void>} Retorna uma Promise que resolve quando o usuário for criado.
   */
  const salvarUsuario = async (usuarioForm: Omit<IUsuario, 'id' | 'orcamentoDiario'>) => {
    try {
      const novoUsuario = await criarUsuario(usuarioForm)
      setUsuario(novoUsuario)
    } catch (err: unknown) {
      console.log('Erro ao criar usuario', err)
    }
  }

  const buscaTransacoes = async () => {
    try {
      const transacoesObtidas = await obterTransacoes()
      setTransacoes(transacoesObtidas)
    } catch (err: unknown) {
      console.log('Erro ao buscar transacoes', err);
    }
  }

  const salvarTransacoes = async (formTransacao: Omit<ITransacoes, 'id' | 'userId'>) => {
    try {
      if (!usuario) {
        throw new Error('Nao podemos criar transacoes sem userId')
      }
      const {transacao, novoOrcamentoDiario} = await criarTransacao(formTransacao, usuario)
      setTransacoes((prev) => [...prev, transacao])
      setUsuario((prev) => prev ? {...prev, orcamentoDiario: novoOrcamentoDiario } : null)
    } catch (err: unknown) {
      console.log('Erro ao salvar transacoes', err);
    }
  }

  return (
    <AppContext.Provider value={{usuario, transacoes, salvarUsuario, salvarTransacoes}}>
      {children}
    </AppContext.Provider>
  )
}

/**
 * Hook customizado para acessar o contexto da aplicação.
 * 
 * @returns {AppContextType} O valor do contexto que contém:
 *  - `usuario`: O usuário atual, ou `null` caso não haja um.
 *  - `transacoes`: A lista de transações, ou `null` caso não haja transações.
 *  - `salvarUsuario`: Função para salvar ou atualizar um usuário.
 *  - `salvarTransacoes`: Função para salvar ou atualizar as transações.
 * @throws {Error} Lança um erro se o hook for utilizado fora de um provedor de contexto.
 */
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um Provider');
  }
  return context
}

export default AppProvider