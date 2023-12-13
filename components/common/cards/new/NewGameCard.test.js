import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import NewGameCard from './NewGameCard';

describe('NewGameCard Component', () => {
    const mockGame = {
        background_image: 'https://test.com/gameimage.jpg',
        genres: [{ name: 'Action' }, { name: 'Adventure' }],
        name: 'Test Game',
        platforms: [
          { platform: { name: 'PlayStation 5'} },
          { platform: { name: 'Xbox One'} },
        ],
      };


  it('renders correctly with game data and image URL (main image)', () => {
    const { getByTestId } = render(<NewGameCard game={mockGame} handleCardPress={() => {}} />);
    const mainImage = getByTestId('main-image');

    expect(mainImage).toBeTruthy();
  });

  it('renders correctly with game data and no image URL (default image)', () => {
    const mockGameNoImage = { ...mockGame, background_image: undefined };

    const { getByTestId } = render(<NewGameCard game={mockGameNoImage} handleCardPress={() => {}} />);

    const defaultImage = getByTestId('default-image');
    expect(defaultImage).toBeTruthy();
  });

  it('renders genres correctly', () => {
    const { getByText } = render(<NewGameCard game={mockGame} handleCardPress={() => {}} />);

    const actionGenre = getByText('Action');
    const adventureGenre = getByText('Adventure');
    
    expect(actionGenre).toBeDefined();
    expect(adventureGenre).toBeDefined();
  });

  it('renders name and platforms correctly', () => {
    const { getByText, getByTestId } = render(<NewGameCard game={mockGame} handleCardPress={() => {}} />);

    const gameName = getByText('Test Game');
    expect(gameName).toBeDefined();

   
    const playstationPlatform = getByTestId('playstation-icon');
    const xboxPlatform = getByTestId('xbox-icon');

    expect(playstationPlatform).toBeTruthy();
    expect(xboxPlatform).toBeTruthy();
  });

  it('handles card press correctly', () => {
    const mockHandleCardPress = jest.fn();
    const { getByTestId } =render(<NewGameCard game={mockGame} handleCardPress={mockHandleCardPress} />);


    fireEvent.press(getByTestId('touchable-id'));
    fireEvent.press(getByTestId('pressable-id'));

   
    expect(mockHandleCardPress).toHaveBeenCalledWith(mockGame);
  });
});