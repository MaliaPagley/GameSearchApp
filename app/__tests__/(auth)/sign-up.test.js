import React from 'react';
import { render } from '@testing-library/react-native';
import SignUp from '../../(auth)/sign-up';
import useSignup from '../../../hook/useSignup';

jest.mock('../../../hook/useSignup');

describe('SignUp Component: ', () => {
  useSignup.mockReturnValue({
    signUp: jest.fn(),
    loading: false,
  });

  describe('when sign-up screen displays', () => {
    it('renders headers correctly', () => {
      const { getByText } = render(<SignUp />);
  
      const headerTextOne = getByText('Create Account');
      const headerTextTwo = getByText('Please fill in the fields.');
  
      expect(headerTextOne).toBeDefined();
      expect(headerTextTwo).toBeDefined();
    });

    it('renders inputs correctly', () => {
      const { getByPlaceholderText } = render(<SignUp />);
  
      const nameInput = getByPlaceholderText('Full Name');
      const emailInput = getByPlaceholderText('Email');
      const passwordInput = getByPlaceholderText('Password');
  
      expect(nameInput).toBeDefined();
      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();
    });

    it('renders buttons correctly', () => {
      const { getByTestId, getByText } = render(<SignUp />);
  
      const signUpText = getByText('Sign Up');
      const signUpButton = getByTestId('buttonID');
  
      expect(signUpText).toBeDefined();
      expect(signUpButton).toBeTruthy();
    });
  });

  describe('when loading', () => {
    it('renders loading indicator', () => {
      useSignup.mockReturnValue({ loading: true });
      const { getByTestId } = render(<SignUp />);
      const activityIndicator = getByTestId('loadingID');

      expect(activityIndicator).toBeTruthy();
    });
  });
});
