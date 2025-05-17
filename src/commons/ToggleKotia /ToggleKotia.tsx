import React, { useState } from 'react';
import Switch from 'react-switch';
import 'react-dropdown/style.css';
import * as S from '../../components/App/style';

interface DropdownProps {
  title?: string;
  onChange: (value: boolean) => void;
}

const KotiaToggle: React.FC<DropdownProps> = ({ title, onChange }) => {
  const [checked, setIsChecked] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '8px',
        flexDirection: 'row',
      }}
    >
      {title && <S.SmallLabel>{title}</S.SmallLabel>}
      <label htmlFor="material-switch">
          <Switch
            checked={checked}
            onChange={(selected) => {
              onChange(selected)
              setIsChecked(selected)
            }}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </label>
    </div>
  );
};

export default KotiaToggle;
