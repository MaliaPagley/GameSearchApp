import React from 'react';
import { render } from '@testing-library/react-native';
import GameGenres from './GameGenres';

describe('GameGenres Component: ',() => {
    const mockGenresData = [
        { name: 'Action' },
        { name: 'Adventure' },
        { name: 'RPG' },
    ];
    it('renders genres correctly', () => {
        const { getByText } = render(<GameGenres genres={mockGenresData}/>);

        expect(getByText('Action')).toBeDefined();
        expect(getByText('Adventure')).toBeDefined();
        expect(getByText('RPG')).toBeDefined();
    })
})