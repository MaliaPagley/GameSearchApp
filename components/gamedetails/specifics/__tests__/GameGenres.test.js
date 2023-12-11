import React from 'react';
import { render } from '@testing-library/react-native';
import GameGenres from '../GameGenres';

const mockGenres = [
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'Role-playing' },
];

describe('GameGenres Component: ',() => {
    it('renders genres correctly', () => {
        const { getByTestId } = render(<GameGenres genres={mockGenres}/>);

        expect(getByTestId('action-genre')).toBeTruthy;
        expect(getByTestId('adventure-genre')).toBeTruthy;
        expect(getByTestId('role-playing-genre')).toBeTruthy;
    })
})