interface ISelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

const SelectorOption = ({label, value, ...othersProps}: ISelectorOption) => (
  <option
    value={value}
    {...othersProps}
  >
    { label }
  </option>
)
export default SelectorOption
