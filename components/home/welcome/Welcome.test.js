import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Welcome from './Welcome';

describe('Welcome Component: ', () => {
  it('renders input and search', () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId('searchID')).toBeTruthy();
    expect(getByTestId('inputID')).toBeTruthy();
  });
  it('renders input value change', () => {
    const { getByTestId } = render(<Welcome />);
    const input = getByTestId('inputID');

    fireEvent.changeText(input, 'Test Game' );

    expect(input.props.value).toBe('Test Game');
  });
});
