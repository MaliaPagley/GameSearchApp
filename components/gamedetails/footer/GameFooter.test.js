import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import GameFooter from './GameFooter';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

describe('GameFooter Component', () => {
  it('component renders', () => {
    const { toJSON } = render(<GameFooter />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('handles press event correctly', () => {
    const { toJSON } = render(<GameFooter />);
    const link = screen.getByTestId('sourceLink');

    // Fire press event
    fireEvent.press(link);

    // Check if openURL function is called
    expect(require('react-native/Libraries/Linking/Linking').openURL).toHaveBeenCalled();

    // Snapshot testing
    expect(toJSON()).toMatchSnapshot();
  });
});

