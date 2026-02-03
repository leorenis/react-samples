import styles from './Fieldset.module.css'
type FieldsetProps = {
  variant?: 'primary' | 'secondary'
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>

const Fieldset = ({children, variant = 'primary'}: FieldsetProps) => {
  return (
    <fieldset
      className={`${styles.inputWrapper} ${styles[variant]}`}>
      {children}
    </fieldset>
  )
}
export default Fieldset
