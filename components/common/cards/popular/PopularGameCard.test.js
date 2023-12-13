import React from 'react';
import { render, screen } from '@testing-library/react-native';
import PopularGameCard from './PopularGameCard';
import NewGameCard from '../new/NewGameCard';

describe('NewGameCard Component: ', () => {
    const mockGame = {
        background_image: 'https://test.com/gameimage.jpg',
        name: 'Test Game',
    };

    it('renders correctly with game data and image URL (main image)', () => {
        const { getByTestId } = render(<PopularGameCard game={mockGame}  />);
        const mainImage = getByTestId('main-image');

        expect(mainImage).toBeTruthy();
    })
    it('renders correctly with game data and no image URL (default image)', () => {
        const mockGameNoImage = { ...mockGame, background_image: undefined };
    
        const { getByTestId } = render(<PopularGameCard game={mockGameNoImage}  />);
    
        const defaultImage = getByTestId('default-image');
        expect(defaultImage).toBeTruthy();
    });
    it('renders name correctly', () => {
        const { getByText } = render(<PopularGameCard game={mockGame} />);
        const gameName = getByText('Test Game');

        expect(gameName).toBeDefined();
    });
});