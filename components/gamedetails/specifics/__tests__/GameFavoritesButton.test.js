import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameFavoritesButton from '../GameFavoritesButton';


jest.mock('../../../../hook/useAddToFavorites', () => ({
  __esModule: true,
  default: jest.fn(() => ({ addToFavorites: jest.fn() })),
}));

describe('GameFavoritesButton Component: ', () => {
  it('calls addToFavorites when pressed', async () => {
    const name = 'Test Game';
    const id = '123';

    const { getByTestId, debug } = render(
      <GameFavoritesButton name={name} id={id} />
    );

    fireEvent.press(getByTestId('FavoriteButtonID'));

    const { addToFavorites } = require('../../../../hook/useAddToFavorites').default();
    await addToFavorites(id, name);

  });
});
