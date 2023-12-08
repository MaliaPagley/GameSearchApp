import React from 'react';
import { render } from '@testing-library/react-native';
import GameHeader from './GameHeader';

describe('GameHeader Component:', () => {
  describe('prop handling:', () => {
    it('renders without props', () => {
      const { getByTestId } = render(<GameHeader />);

      expect(getByTestId('NameID').props.children).toBe('Unavailable');
      expect(getByTestId('DeveloperID').props.children).toBe('Unavailable');
      expect(getByTestId('DateID').props.children[1]).toBe('Unavailable');

    })
 
    it('renders with props', () => {
        const mockProps = {
          image: 'https://test.com/background-image.jpg',
          name: 'Game Name',
          developers: [{ name: 'Developer' }],
          releasedDate: '2023-12-05',
          id: '123456',
        };
        render(<GameHeader {...mockProps} />);
      });
      
    it('renders background image with a valid image URL', () => {
       const urlMockProp = {
        image: 'https://test.com/background-image.jpg',
       };
       const { getByTestId } = render(<GameHeader {...urlMockProp} />)
       const backgroundImage = getByTestId('ImageID');

       expect(backgroundImage).toBeDefined();
    });

    it('renders default background image with an invalid image URL (No Image)', () => {
      const urlMockProp = {
        image: 'invalid-url',
      }
      const { getByTestId } = render(<GameHeader {...urlMockProp}/>);
      const noBackgroundImage = getByTestId('NoimageID');

      expect(noBackgroundImage).toBeDefined();
    });
  });
});