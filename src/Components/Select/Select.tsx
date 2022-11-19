import "./Select.scss";

type SelectProps<T> = {
  options: T[];
  onChange: (val: number) => void;
};

export const Select = <T,>({
  options,
  onChange,
}: SelectProps<T>): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(event.target.value));
  };
  return (
    <select
      data-testid="select"
      className="select-container"
      onChange={handleChange}
    >
      {options.map((_, key) => {
        return (
          <option data-testid="select-option" value={key} key={key}>
            #progress {key + 1}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
