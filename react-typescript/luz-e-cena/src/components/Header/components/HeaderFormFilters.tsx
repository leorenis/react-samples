import { FaLocationDot } from 'react-icons/fa6'
import SelectorGroup from '../../Selector/SelectorGroup'
import SelectorOption from '../../Selector/SelectorOption'

const cities = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () => (
  <form>
    <SelectorGroup id='city' icon={<FaLocationDot />}>
      <SelectorOption value='' label='Escolha sua cidade' />
      {cities.map((city) => (
        <SelectorOption
          key={city.id}
          value={city.nome}
          label={city.nome}
        />
      ))}
    </SelectorGroup>
  </form>
)

export default HeaderFormFilters
