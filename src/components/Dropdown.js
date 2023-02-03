import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!rootEl.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pounter p-1"
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
        value={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={rootEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        {value?.label || 'Select'}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
