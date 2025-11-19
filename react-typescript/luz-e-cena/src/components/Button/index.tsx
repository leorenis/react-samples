
type ButtonProps = {
  variant: 'default' | 'icon'
} & React.ButtonHTMLAttributes<HTMLButtonElement> // & define elementos intricecos.

const Button = ({ children }: ButtonProps) => (
  <button>
    { children }
  </button>
)

export default Button
