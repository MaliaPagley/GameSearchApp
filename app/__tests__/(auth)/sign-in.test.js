import React from 'react';
import { render } from '@testing-library/react-native';
import SignIn from '../../(auth)/sign-in';
import useSignIn from '../../../hook/useSignin';

jest.mock('../../../hook/useSignin');

describe('SignIn Component: ', () => {
  useSignIn.mockReturnValue({
    signIn: jest.fn(),
    loading: false,
  });
  
describe('when sign-in screen displays', () => {
  it('renders inputs correctly', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it ('renders headers correctly', () => {
    const { getByText } = render(<SignIn />);

    const headerTextOne = getByText('Welcome Back');
    const headerTextTwo = getByText('Please Sign in to your account.');

    expect(headerTextOne).toBeDefined();
    expect(headerTextTwo).toBeDefined();
  });

  it('renders buttons correctly', () => {
    const { getByTestId, getByText } = render(<SignIn />);
  
    const signInText = getByText('Sign in');
    const signInButton = getByTestId('buttonID');
  
    expect(signInText).toBeDefined();
    expect(signInButton).toBeTruthy();
  });
});
 describe('when loading', () => {
    it('renders loading indicater', () => {
      useSignIn.mockReturnValueOnce({ loading: true });
      const { getByTestId } = render(<SignIn />);
      const activityIndicator = getByTestId('loadingID');

      expect(activityIndicator).toBeTruthy();
    });
  });
});
