import React from 'react';
import { render } from '@testing-library/react-native';
import GameTags from './GameTags';

describe('GameTags Component: ', () => {
    const mockTagsData = [
        { name: 'Singleplayer'},
        { name: 'Multiplayer'},
        { name: 'Open World'},
    ];

    it('renders all tags correctly', () => {
        const { getByText } = render(<GameTags tags={mockTagsData}/>);

        expect(getByText('Singleplayer')).toBeDefined();
        expect(getByText('Multiplayer')).toBeDefined();
        expect(getByText('Open World')).toBeDefined();
    });
});