import React from 'react';
import { render } from '@testing-library/react-native';
import SignIn from '../(auth)/sign-in';
import useSignIn from '../../hook/useSignin';

jest.mock('../../hook/useSignin', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    signIn: jest.fn(),
    loading: false,
    error: null,
  })
}));

describe('SignIn Component: ', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<SignIn />);

    const headerTextOne = getByText('Welcome Back');
    const headerTextTwo = getByText('Please Sign in to your account.');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    expect(headerTextOne).toBeDefined();
    expect(headerTextTwo).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('renders button correctly', () => {
    const { getByTestId, getByText } = render(<SignIn />);
  
    const signInText = getByText('Sign in');
    const signInButton = getByTestId('buttonID');
  
    expect(signInText).toBeDefined();
    expect(signInButton).toBeTruthy();
  });
  
  it('renders loading indicater', () => {
    useSignIn.mockReturnValue({
      loading: true,
    });
    const { getByTestId } = render(<SignIn />);
    const activityIndicator = getByTestId('loadingID');

    expect(activityIndicator).toBeTruthy();
  });
});
