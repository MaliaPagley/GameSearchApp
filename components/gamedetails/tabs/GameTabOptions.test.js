import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameTabOptions from './GameTabOptions';

describe('GameTabOptions: ', () => {
    const mockGameId = 123;
    const mockGameName = 'Test Game';

    it('renders default tab (Screenshots)', () => {
        const { getByText, getByTestId } = render(<GameTabOptions id={mockGameId} name={mockGameName} />);

        expect(getByText('Screenshots')).toBeDefined();
        expect(getByText('Preview')).toBeDefined();
        expect(getByTestId('screenshotsID')).toBeTruthy();
    })

    it('switches to Preview tab and renders its content', () => {
        const { getByText, getByTestId } = render(<GameTabOptions id={mockGameId} name={mockGameName} />);
    
        fireEvent.press(getByText('Preview'));
    
        expect(getByText('Screenshots')).toBeTruthy();
        expect(getByText('Preview')).toBeTruthy();
        expect(getByTestId('previewID')).toBeTruthy();
      });
});