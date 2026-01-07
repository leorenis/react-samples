import styles from '../Header.module.css'

const HeaderListItem = ({ children, ...othersProps }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li
    className={styles.menuitem}
    {...othersProps}
  >
    { children }
  </li>
)

export default HeaderListItem
