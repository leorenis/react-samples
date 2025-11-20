import styles from './SelectorGroup.module.css'

interface ISelectorGroup extends React.HTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectorGroup = ({ icon, children, ...othersProps}: ISelectorGroup) => (
  <div className={styles.container}>
    {icon && (
      <div className={styles.icone}>
        { icon }
      </div>
    )}
    <select className={styles.selector} {...othersProps}>
      { children }
    </select>
  </div>
)
export default SelectorGroup
