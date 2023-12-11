import React from 'react';
import { render } from '@testing-library/react-native';
import GameTags from '../GameTags';

const mockTags = [
    { name: 'Singleplayer'},
    { name: 'Multiplayer'},
    { name: 'Open World'},
];

describe('GameTags Component: ', () => {
    it('renders tags correctly', () => {
        const { getByTestId, getByText } = render(<GameTags tags={mockTags}/>);

        expect(getByTestId('singleplayer-tag')).toBeTruthy();
        expect(getByTestId('multiplayer-tag')).toBeTruthy();
        expect(getByTestId('open world-tag')).toBeTruthy();

        expect(getByText('Singleplayer')).toBeDefined();
        expect(getByText('Multiplayer')).toBeDefined();
        expect(getByText('Open World')).toBeDefined();
    })
}) 