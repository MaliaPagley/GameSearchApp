import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import GameFooter from './GameFooter';
import { Linking } from 'react-native';

  describe('GameFooter Component:', () => {
    it('successfully renders', () => {
       const { getByText } = render(<GameFooter />);
       
       expect(getByText('Source: Rawg.io')).toBeTruthy();
       expect(getByText('App developed by Malia Pagley')).toBeTruthy();
     });

  describe('when clicking the source link', () => { 
    it('opens in browser', () => {
      render(<GameFooter />);
      fireEvent.press(screen.getByTestId('sourceLinkID'));
      expect(Linking.openURL).toHaveBeenCalled();
    });
  })
});

