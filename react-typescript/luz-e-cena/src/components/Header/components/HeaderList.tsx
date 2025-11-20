import styles from '../Header.module.css'

const HeaderList = ({ children, ...othersProps }: React.LiHTMLAttributes<HTMLUListElement>) => (
  <ul className={styles.cabecalho} {...othersProps}>
    { children }
  </ul>
)

export default HeaderList
