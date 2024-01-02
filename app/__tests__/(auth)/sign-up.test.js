import React from 'react';
import { render } from '@testing-library/react-native';
import SignUp from '../../(auth)/sign-up';
import useSignup from '../../../hook/useSignup';

jest.mock('../../../hook/useSignup', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    signUp: jest.fn(),
    loading: false,
    error: null,
  }),
}));

describe('SignUp Component:', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<SignUp />);

    const headerTextOne = getByText('Create Account');
    const headerTextTwo = getByText('Please fill in the fields.');
    const FullName = getByPlaceholderText('Full Name');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    expect(headerTextOne).toBeDefined();
    expect(headerTextTwo).toBeDefined();
    expect(FullName).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('renders button correctly', () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const signUpText = getByText('Sign Up');
    const signUpButton = getByTestId('buttonID');

    expect(signUpText).toBeDefined();
    expect(signUpButton).toBeTruthy();
  });

  it('renders loading indicator', () => {
    useSignup.mockReturnValue({
      loading: true,
    });
    const { getByTestId } = render(<SignUp />);
    const activityIndicator = getByTestId('loadingID');

    expect(activityIndicator).toBeTruthy();
  });
});
