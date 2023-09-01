import React from 'react';
import { render, screen } from '@testing-library/react';
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

});