import Logo from '../Logo'
import HeaderActions from './components/HeaderActions'
import HeaderFormFilters from './components/HeaderFormFilters'
import HeaderLinks from './components/HeaderLinks'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'

const Header = () => (
  <header>
    <HeaderList>
      <HeaderListItem>
        <Logo src='/logo.png' />
      </HeaderListItem>
      <HeaderListItem>
        <HeaderLinks />
      </HeaderListItem>
      <HeaderListItem>
        <HeaderFormFilters />
      </HeaderListItem>
      <HeaderListItem>
        <HeaderActions />
      </HeaderListItem>
    </HeaderList>
  </header>
)
export default Header
