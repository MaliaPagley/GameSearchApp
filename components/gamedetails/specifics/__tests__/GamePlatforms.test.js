import React from 'react';
import { render } from '@testing-library/react-native';
import GamePlatforms from '../GamePlatforms';

const mockPlatforms = [
    { platform: { name: 'PlayStation 5'} },
    { platform: { name: 'Xbox One'} },
    { platform: { name: 'PC'} },
    { platform: { name: 'Nintendo Switch'} },
    { platform: { name: 'macOS'} },
    { platform: { name: 'Android'} },
    { platform: { name: 'iOS'} },
];

describe('GamePlatforms Component: ', () => {
    describe('modified platforms', () => {
        it('renders platform icons correctly PS & XBOX', () => {
            const { getByTestId } = render(<GamePlatforms platforms={mockPlatforms}/>);
    
            expect(getByTestId('playstation-icon')).toBeTruthy();
            expect(getByTestId('xbox-icon')).toBeTruthy();
        });
    });
    it ('renders all platforms correctly', () => {
        const { getByTestId } = render(<GamePlatforms platforms={mockPlatforms}/>);

        expect(getByTestId('playstation-icon')).toBeTruthy();
        expect(getByTestId('xbox-icon')).toBeTruthy();
        expect(getByTestId('pc-icon')).toBeTruthy();
        expect(getByTestId('nintendo switch-icon')).toBeTruthy();
        expect(getByTestId('macos-icon')).toBeTruthy();
        expect(getByTestId('android-icon')).toBeTruthy();
        expect(getByTestId('ios-icon')).toBeTruthy();   
    });
    it('renders default icon', () => {
        const { getByTestId } = render(<GamePlatforms platforms={[]}/>)

        expect(getByTestId('default-icon')).toBeTruthy();
    })
});