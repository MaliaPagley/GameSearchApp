import React from 'react';
import { render } from '@testing-library/react-native';
import GameAbout from './GameAbout';

describe('GameAbout Component:', () => {
  it('successfully renders', () => {
    const {getByText} = render(<GameAbout />);

    expect(getByText('About:')).toBeTruthy();
  });
  describe('prop handling', () => {
    it('renders with provided description', () => {
      const description = 'This is a test description.';
      const { getByText } = render(<GameAbout description={description} />);
  
      expect(getByText(description)).toBeTruthy();
    });
  
    it('renders without description', () => {
      const { getByText } = render(<GameAbout />);
      
      expect(getByText('No description available.')).toBeTruthy();
    });
  });
});
