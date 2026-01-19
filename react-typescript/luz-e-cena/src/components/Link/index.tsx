import styles from './Link.module.css'

const Link = ({ children, ...othersProps }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={styles.link} {...othersProps}>
    { children }
  </a>
)

export default Link

