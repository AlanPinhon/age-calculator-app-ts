import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormInput } from '../../src/components/FormInput';
import { vi } from 'vitest';

describe('Tests on <FormInput />', () => {

  const placeholderTxt:string = 'DD';
  const labelId:string = 'Day';
  const error:string = 'Must be a valid day';
  const setInputValueMock = vi.fn();

  test('should to be match to the snapshot', () => {

    const {container} = render(
      <FormInput 
        placeholderText={placeholderTxt}
        labelId={labelId}
        setInputValue={setInputValueMock}
        error={error}
      />
    );

    expect(container).toMatchSnapshot();

  });

  test('should change the value in the input', () => {

    render(
      <FormInput 
        placeholderText={placeholderTxt}
        labelId={labelId}
        setInputValue={setInputValueMock}
        error={error}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholderTxt) as HTMLInputElement;
    fireEvent.change(inputElement,{target: {value: '22'}});
    expect(inputElement.value).toBe('22');

    expect(setInputValueMock).toHaveBeenCalledWith('22');
  });
  
});