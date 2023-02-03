import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return <Dropdown options={options} value={selected} onChange={setSelected} />;
}

export default DropdownPage;
