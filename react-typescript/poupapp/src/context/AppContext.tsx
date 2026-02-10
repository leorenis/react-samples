/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ITransacoes, IUsuario } from '../types'
import { obterUsuarios, criarUsuario, obterTransacoes, criarTransacao } from '../api'

/**
 * Definição do tipo do contexto da aplicação.
 * 
 * @typedef {Object} AppContextType
 * @property {IUsuario | null} usuario - O usuário atual armazenado no contexto.
 * @property {(usuarioForm: Omit<IUsuario, 'id'>) => Promise<void>} salvarUsuario - Função para salvar um novo usuário.
 * @property {(transacaoForm: Omit<ITransacoes, 'id'>) => Promise<void>} salvarTransacoes - Função para salvar uma nova transação.
 */
interface AppContextType {
  usuario: IUsuario | null,
  transacoes: ITransacoes[] | null,
  salvarUsuario: (usuarioForm: Omit<IUsuario, 'id'>) => Promise<void>
  salvarTransacoes: (transacaoForm: Omit<ITransacoes, 'id'>) => Promise<void>
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
   * @param {Omit<IUsuario, 'id'>} usuarioForm - Dados do novo usuário sem o campo 'id'.
   * @returns {Promise<void>} Retorna uma Promise que resolve quando o usuário for criado.
   */
  const salvarUsuario = async (usuarioForm: Omit<IUsuario, 'id'>) => {
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

  const salvarTransacoes = async (formTransacao: Omit<ITransacoes, 'id'>) => {
    try {
      const transacaoCriada = await criarTransacao(formTransacao)
      setTransacoes((prev) => [...prev, transacaoCriada])
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
 * @returns {AppContextType} O valor do contexto, contendo o usuário e a função de salvar um novo usuário.
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