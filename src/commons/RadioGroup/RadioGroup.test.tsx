import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';

test('renders radio group and selects option', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(
    <RadioGroup options={['One', 'Two']} value="One" onChange={handleChange} />
  );
  fireEvent.click(getByLabelText('Two'));
  expect(handleChange).toHaveBeenCalledWith('Two');
});
