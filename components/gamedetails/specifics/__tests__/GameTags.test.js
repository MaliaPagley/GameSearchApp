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
        const { getByText } = render(<GameTags tags={mockTags}/>);


        expect(getByText('Singleplayer')).toBeDefined();
        expect(getByText('Multiplayer')).toBeDefined();
        expect(getByText('Open World')).toBeDefined();
    })
}) 