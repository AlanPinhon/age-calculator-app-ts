import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { FormCalculator } from '../../src/components/FormCalculator';

describe('Tests on <FormCalculator />', () => {
 
 
  const setAgeResultsMock = vi.fn();

  test('should render initial inputs', () => {
    render(<FormCalculator setAgeResults={setAgeResultsMock}/>)

    const dayInput = screen.getByPlaceholderText('DD') as HTMLInputElement;
    const monthInput = screen.getByPlaceholderText('MM') as HTMLInputElement;
    const yearInput = screen.getByPlaceholderText('YYYY') as HTMLInputElement;
    
    expect(dayInput).toBeTruthy();
    expect(monthInput).toBeTruthy();
    expect(yearInput).toBeTruthy();

    expect(dayInput.value).toBe('');
    expect(monthInput.value).toBe('');
    expect(yearInput.value).toBe('');
    
  });

  test('should display an error message if the inputs are empty', () => {
    render(<FormCalculator setAgeResults={setAgeResultsMock}/>)

    const dayInput = screen.getByPlaceholderText('DD') as HTMLInputElement;
    const monthInput = screen.getByPlaceholderText('MM') as HTMLInputElement;
    const yearInput = screen.getByPlaceholderText('YYYY') as HTMLInputElement;
    const btnCalculate = screen.getByRole('button');

    fireEvent.change(dayInput,{target: {value: ''}});
    fireEvent.change(monthInput,{target: {value: ''}});
    fireEvent.change(yearInput,{target: {value: ''}});
    fireEvent.click(btnCalculate);
    
    expect(screen.getAllByText('This field is required')).toBeTruthy();
  });

  test('should display an error message if the day, month or year value is invalid', () => {
    render(<FormCalculator setAgeResults={setAgeResultsMock}/>)

    const dayInput = screen.getByPlaceholderText('DD') as HTMLInputElement;
    const monthInput = screen.getByPlaceholderText('MM') as HTMLInputElement;
    const yearInput = screen.getByPlaceholderText('YYYY') as HTMLInputElement;
    const btnCalculate = screen.getByRole('button');

    fireEvent.change(dayInput,{target: {value: '32'}});
    fireEvent.change(monthInput,{target: {value: '15'}});
    fireEvent.change(yearInput,{target: {value: '16542'}});
    fireEvent.click(btnCalculate);
    
    expect(screen.getByText('Must be a valid day')).toBeTruthy();
    expect(screen.getByText('Must be a valid month')).toBeTruthy();
    expect(screen.getByText('Must be a valid year')).toBeTruthy();
  });

  test('should display an error message if the date is in the future', () => {
    render(<FormCalculator setAgeResults={setAgeResultsMock}/>)

    const dayInput = screen.getByPlaceholderText('DD') as HTMLInputElement;
    const monthInput = screen.getByPlaceholderText('MM') as HTMLInputElement;
    const yearInput = screen.getByPlaceholderText('YYYY') as HTMLInputElement;
    const btnCalculate = screen.getByRole('button');

    fireEvent.change(dayInput,{target: {value: '25'}});
    fireEvent.change(monthInput,{target: {value: '12'}});
    fireEvent.change(yearInput,{target: {value: '2112'}});
    fireEvent.click(btnCalculate);

    expect(screen.getAllByText('Must be in the past')).toBeTruthy();

  });
  
  test('should display an error message if the date is invalid', () => {
    render(<FormCalculator setAgeResults={setAgeResultsMock}/>)

    const dayInput = screen.getByPlaceholderText('DD') as HTMLInputElement;
    const monthInput = screen.getByPlaceholderText('MM') as HTMLInputElement;
    const yearInput = screen.getByPlaceholderText('YYYY') as HTMLInputElement;
    const btnCalculate = screen.getByRole('button');

    fireEvent.change(dayInput,{target: {value: '31'}});
    fireEvent.change(monthInput,{target: {value: '2'}});
    fireEvent.change(yearInput,{target: {value: '2000'}});
    fireEvent.click(btnCalculate);
    
    expect(screen.getAllByText('Must be a valid date')).toBeTruthy();

  });
  
  test('should call the function ', () => {
    render(<FormCalculator setAgeResults={setAgeResultsMock}/>)

    const dayInput = screen.getByPlaceholderText('DD') as HTMLInputElement;
    const monthInput = screen.getByPlaceholderText('MM') as HTMLInputElement;
    const yearInput = screen.getByPlaceholderText('YYYY') as HTMLInputElement;
    const btnCalculate = screen.getByRole('button');

    fireEvent.change(dayInput,{target: {value: '22'}});
    fireEvent.change(monthInput,{target: {value: '5'}});
    fireEvent.change(yearInput,{target: {value: '1992'}});
    fireEvent.click(btnCalculate);
    
    screen.debug();
    expect(setAgeResultsMock).toHaveBeenCalledTimes(1);

  });

});