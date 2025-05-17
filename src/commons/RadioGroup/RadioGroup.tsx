import React from 'react';

interface RadioGroupProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, value, onChange }) => {
  return (
    <div className="space-y-2">
      {options.map(option => (
        <label
          key={option}
          className="inline-flex items-center space-x-2 text-gray-800"
        >
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="form-radio text-yellow-500 focus:ring-yellow-500"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
