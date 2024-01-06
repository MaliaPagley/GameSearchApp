import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PopularGameCard from './PopularGameCard';

describe('NewGameCard Component: ', () => {
    const mockGame = {
        background_image: 'https://test.com/gameimage.jpg',
        name: 'Test Game',
    };

    it('renders correctly with game data and valid image URL', () => {
        const { getByTestId, getByText } = render(<PopularGameCard game={mockGame}  />);
        const image = getByTestId('imageID');
        const name = getByText('Test Game');

        expect(image).toBeTruthy();
        expect(name).toBeDefined();
    })
    describe('when image is invalid', () => {
        it('renders correctly with default image', () => {
            const mockGameNoImage = { background_image: 'invalid-image-url' };
            const { getByTestId } = render(<PopularGameCard game={mockGameNoImage}  />);
        
            const defaultImage = getByTestId('noImageID');
    
            expect(defaultImage).toBeTruthy();
        });
    });
    describe('when card is pressed', () => {
        it('handles card press correctly', () => {
          const mockHandleCardPress = jest.fn();
          const { getByTestId } = render(<PopularGameCard game={mockGame} handleCardPress={mockHandleCardPress} />);
      
          fireEvent.press(getByTestId('touchable-id'));
      
          expect(mockHandleCardPress).toHaveBeenCalledWith(mockGame);
        });
      });
});