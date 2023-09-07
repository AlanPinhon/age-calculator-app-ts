import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormResult } from '../../src/components/FormResult';

describe('Tests on <FormResult />', () => { 

  const ageResults = {
    years: 32,
    months: 0,
    days: 23
  }

  test('should render initial state', () => { 
    render(<FormResult ageResults={null}/>);

    expect(screen.getByText('-- years')).toBeTruthy();
    expect(screen.getByText('-- months')).toBeTruthy();
    expect(screen.getByText('-- days')).toBeTruthy();
  });

  test('should display the final result of the age calculation', () => { 
    render(<FormResult ageResults={ageResults}/>);

    expect(screen.getByText(`${ageResults.years} years`)).toBeTruthy();
    expect(screen.getByText(`${ageResults.months} months`)).toBeTruthy();
    expect(screen.getByText(`${ageResults.days} days`)).toBeTruthy();
  });

});