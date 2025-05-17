import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as S from '../../components/App/style';

interface DropdownProps {
  title?: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}

const KotiaDropdown: React.FC<DropdownProps> = ({ title, options, value, onChange }) => {
  return (
    <S.Container>
      {title && <S.Label>{title}</S.Label>}
      <S.StyledDropdownWrapper>
        <Dropdown
          options={options}
          onChange={(selected) => onChange(selected.value)}
          value={value ?? options[0]}
          placeholder="Select an option"
        />
      </S.StyledDropdownWrapper>
    </S.Container>
  );
};

export default KotiaDropdown;