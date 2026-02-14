import { useMemo } from "react"
import { useAppContext } from "../context/AppContext"

const useGastosCategoria = (): Record<string, number> => {
  const { transacoes } = useAppContext()
  const gastosPorCategoria = useMemo(() => {
    return transacoes?.filter((transacao) => transacao?.tipo === 'despesa')
      .reduce<Record<string, number>>((acumulado, transacao) => {
        acumulado[transacao.categoria] = (acumulado[transacao.categoria] || 0) + transacao.valor
        return acumulado;
      }, {})
  }, [transacoes])
  return gastosPorCategoria ?? {}
}
export default useGastosCategoria

