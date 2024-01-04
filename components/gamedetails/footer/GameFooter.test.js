import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameFooter from './GameFooter';
import { Linking } from 'react-native';

describe('GameFooter Component:', () => {
  it('successfully renders footer text', () => {
    const { getByText } = render(<GameFooter />);
    
    expect(getByText('Source: Rawg.io')).toBeTruthy();
    expect(getByText('App developed by Malia Pagley')).toBeTruthy();
  });

  describe('when clicking the source link', () => { 
    it('opens in browser', () => {

      const { getByTestId } = render(<GameFooter />);
      const sourceLink = getByTestId('sourceLinkID');

      fireEvent.press(sourceLink);

      expect(Linking.openURL).toHaveBeenCalledWith('https://rawg.io/');
    });
  });
});
