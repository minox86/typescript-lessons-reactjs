import { useCallback } from "react";

export const Select = ({
  label,
  value,
  options,
  onChange,
}) => {

  const onChangeCallback = useCallback((event) => {
    onChange(event.currentTarget.value)
  }, [])
  
  return (
    <label>
      {label}
      <select value={value} onChange={onChangeCallback}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};