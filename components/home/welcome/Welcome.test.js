import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Welcome from './Welcome';
import { useRouter } from 'expo-router';


jest.mock('expo-router', () => ({
    useRouter: () => ({
      push: jest.fn().mockResolvedValueOnce(), 
    }),
  }));

describe('Welcome Component', () => {
  it('renders input', () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId('inputID')).toBeTruthy();
  });
  it('renders input value change', () => {
    const { getByTestId } = render(<Welcome />);
    const input = getByTestId('inputID');

    fireEvent.changeText(input, 'Test Game' );

    expect(input.props.value).toBe('Test Game');
  });

  it ('renders search button', () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId('searchID')).toBeTruthy();
  });
});
