import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import GameFavoritesButton from './GameFavoritesButton';
import useAddToFavorites from '../../../../hook/useAddToFavorites';

jest.mock('../../../../hook/useAddToFavorites');

describe('GameFavoritesButton Component: ', () => {
  it('renders correctly', () => {
    useAddToFavorites.mockReturnValueOnce({ addToFavorites: jest.fn(), loading: false });

    const { getByText } = render(<GameFavoritesButton />);

    expect(getByText('Add To Favorites')).toBeDefined();
  });

  describe('When addToFavorites button is pressed', () => {
    it('calls addToFavorites', async () => {
      const name = 'Test Game';
      const id = '123';

      const addToFavoritesMock = jest.fn();
      useAddToFavorites.mockReturnValueOnce({ addToFavorites: addToFavoritesMock });

      const { getByText } = render(<GameFavoritesButton name={name} id={id} />);
      fireEvent.press(getByText('Add To Favorites'));

      await waitFor(() => {
        expect(addToFavoritesMock).toHaveBeenCalledWith(id, name);
      });
    });
  });

  describe('When loading', () => {
    it('renders loading state', () => {
      useAddToFavorites.mockReturnValueOnce({ loading: true });

      const { getByTestId } = render(<GameFavoritesButton />);
      const activityIndicator = getByTestId('loadingID');

      expect(activityIndicator).toBeTruthy();
    });
  });
});
