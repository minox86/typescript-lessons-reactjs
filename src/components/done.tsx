import { useCallback } from "react";

type Option = { label: string; value: string };

type Options = Option[];

type SelectProps = {
  label: string;
  value: string;
  options: Options;
  onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => {

  const onChangeCallback = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value)
  }, [])
  
  return (
    <label>
      {label}
      <select value={value} onChange={onChangeCallback}>
        {options.map((option) => (
          <option key={option.value}  value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};