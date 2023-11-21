import { useState } from 'react';
import { Select } from './components/todo'
import './style.css';

export const App: React.FC = () => {
  const [value, setValue] = useState<string>('first')
  return (
    <div>
      <Select 
        label="Select a value: "
        value={value}
        options={[
          { label: "First", value: 'first'},
          { label: "Second", value: 'second'},
          { label: "Third", value: 'third'}
        ]}
        onChange={(e) => setValue(e)}
        />
    </div>
  );
};
