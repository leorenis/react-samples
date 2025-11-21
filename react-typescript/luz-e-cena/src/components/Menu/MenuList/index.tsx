import styles from './MenuList.module.css'

const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement> ) => (
  <nav>
    <ul className={styles.navegacao}>
      { children }
    </ul>
  </nav>
)

export default MenuList
