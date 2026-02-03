import { FaSearch } from 'react-icons/fa'
import Button from '../Button'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import styles from './MovieSection.module.css'

const MovieSection = () => {
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText placeholder='Buscar filmes...' />
          <Button variant='icon'>
            <FaSearch />
          </Button>
        </Fieldset>
      </section>
    </main>
  )
}

export default MovieSection
