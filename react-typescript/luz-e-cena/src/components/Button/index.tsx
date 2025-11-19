import classNames from 'classnames'
import styles from './Button.module.css'

type ButtonProps = {
  variant: 'default' | 'icon' // union
} & React.ButtonHTMLAttributes<HTMLButtonElement> // & define elementos intricecos.

const Button = ({ children, variant = 'default', ...othersProps }: ButtonProps) => {
  const classMap = {
    default: styles.default,
    icon: styles.icon
  }
  return (
    <button
      className={classNames(styles.botao, classMap[variant])}
      {...othersProps}
    >
      { children }
    </button>
  )
}

export default Button
