import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Profile from '../../profile';
import useUserData from '../../../hook/useUserData';

jest.mock('../../../hook/useUserData');

describe('Profile Component', () => {
  const mockUserData = {
    favorites: [
      { id: 1, name: 'Favorite Game 1' },
      { id: 2, name: 'Favorite Game 2' },
    ],
    fullName: 'Test User',
    loading: false,
    error: false,
    handleSignOut: jest.fn(),
    user: { email: 'test.user@mail.com' },
  };

  it('renders user information correctly', () => {
    useUserData.mockReturnValueOnce(mockUserData);
    const { getByText } = render(<Profile />);

    const fullName = getByText('Test User');
    const email = getByText('test.user@mail.com');
    const favoriteOne = getByText('Favorite Game 1');
    const favoriteTwo = getByText('Favorite Game 2');

    expect(fullName).toBeDefined();
    expect(email).toBeDefined();
    expect(favoriteOne).toBeDefined();
    expect(favoriteTwo).toBeDefined();
  });

  describe('when button is pressed', () => {
    it('calls handleSignOut', async () => {
      useUserData.mockReturnValue(mockUserData);

      const { getByText } = render(<Profile />);
      const signOutButton = getByText('Sign Out');
      expect(signOutButton).toBeTruthy();

      fireEvent.press(signOutButton);

      await waitFor(() => {
        expect(useUserData().handleSignOut).toHaveBeenCalled();
      });
    });
  });

  describe('when loading', () => {
    it('renders loading indicator', () => {
      useUserData.mockReturnValueOnce({ loading: true });
      const { getByTestId } = render(<Profile />);
      
      expect(getByTestId('loadingID')).toBeTruthy();
    });
  });

  describe('when on error', () => {
    it('renders error message', () => {
      useUserData.mockReturnValueOnce({ error: true });
      const { getByText } = render(<Profile />);

      expect(getByText('Something went wrong')).toBeDefined();
    });
  });
});
