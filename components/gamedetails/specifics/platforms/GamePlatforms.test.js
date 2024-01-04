import React from 'react';
import { render } from '@testing-library/react-native';
import GamePlatforms from '../platforms/GamePlatforms';


describe('GamePlatforms Component: ', () => {
    const mockPlatformsData = [
        { platform: { name: 'PlayStation 5'} },
        { platform: { name: 'Xbox One'} },
        { platform: { name: 'PC'} },
        { platform: { name: 'Nintendo Switch'} },
        { platform: { name: 'macOS'} },
        { platform: { name: 'Android'} },
        { platform: { name: 'iOS'} },
    ];

    it ('renders all platforms correctly', () => {
        const { getByTestId } = render(<GamePlatforms platforms={mockPlatformsData}/>);

        expect(getByTestId('playstation-icon')).toBeTruthy();
        expect(getByTestId('xbox-icon')).toBeTruthy();
        expect(getByTestId('pc-icon')).toBeTruthy();
        expect(getByTestId('nintendo switch-icon')).toBeTruthy();
        expect(getByTestId('macos-icon')).toBeTruthy();
        expect(getByTestId('android-icon')).toBeTruthy();
        expect(getByTestId('ios-icon')).toBeTruthy();   
    });

    describe('when data starts with playstation or xbox', () => {
        it('renders modified platform icons correctly', () => {
            const { getByTestId } = render(<GamePlatforms platforms={mockPlatformsData}/>);
    
            expect(getByTestId('playstation-icon')).toBeTruthy();
            expect(getByTestId('xbox-icon')).toBeTruthy();
        });
    });

    describe('when data is unavailable', () => {
        it('renders default icon', () => {
            const { getByTestId } = render(<GamePlatforms platforms={[]}/>)
    
            expect(getByTestId('default-icon')).toBeTruthy();
        });
    });
});