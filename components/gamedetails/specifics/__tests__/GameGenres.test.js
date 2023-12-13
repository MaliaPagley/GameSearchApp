import React from 'react';
import { render } from '@testing-library/react-native';
import GameGenres from '../GameGenres';

const mockGenres = [
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'RPG' },
];

describe('GameGenres Component: ',() => {
    it('renders genres correctly', () => {
        const { getByText } = render(<GameGenres genres={mockGenres}/>);

        expect(getByText('Action')).toBeDefined;
        expect(getByText('Adventure')).toBeDefined;
        expect(getByText('RPG')).toBeDefined;
    })
})