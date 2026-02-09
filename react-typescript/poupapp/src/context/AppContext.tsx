import { createContext, ReactNode, useEffect, useState } from 'react'
import { IUsuario } from '../types'
import { obterUsuarios, criarUsuario } from '../api'

interface AppContextType {
  usuario: IUsuario | null,
  definirUsuario: (usuarioForm: Omit<IUsuario, 'id'>) => Promise<void>
}

type AppContextProps = {
  children: ReactNode,
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: AppContextProps) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null)

  useEffect(() => {
    buscaUsuario()
  }, [])

  const buscaUsuario = async () => {
    try {
      const usuarios = await obterUsuarios()
      if (usuarios.length > 0) {
        setUsuario(usuarios[0])
      }
    } catch (err: unknown) {
      console.log('Erro ao obter usuário', err);
    }
  }

  const definirUsuario = async (usuarioForm: Omit<IUsuario, 'id'>) => {
    try {
      const novoUsuario = await criarUsuario(usuarioForm)
      setUsuario(novoUsuario)
    } catch (err: unknown) {
      console.log('Erro ao criar usuario', err)
    }
  }

  return (
    <AppContext.Provider value={{usuario, definirUsuario}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider