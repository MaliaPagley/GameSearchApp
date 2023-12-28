import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignIn from '../(auth)/sign-in';


jest.mock('../../context/auth', () => ({
  useAuthContext: () => ({
    setUser: jest.fn(),
  }),
}));

jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

describe('SignIn Component: ', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);
    
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    
    expect(getByText('Please Sign in to your account.')).toBeDefined();
    expect(getByText('Welcome Back')).toBeDefined();
    expect(getByText('Sign in')).toBeDefined();
    expect(getByText('Create an account')).toBeTruthy();
  });

  it('handles input changes correctly', () => {
    const { getByPlaceholderText } = render(<SignIn />);
    

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    

    expect(getByPlaceholderText('Email').props.value).toBe('test@example.com');
    expect(getByPlaceholderText('Password').props.value).toBe('password123');
  });
  
});
