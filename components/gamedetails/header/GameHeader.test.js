import React from 'react';
import { render } from '@testing-library/react-native';
import GameHeader from './GameHeader';

describe('GameHeader Component: ', () => {
  const mockGame = {
    id: 1,
    name: 'Test Game',
    developers: [{ name: 'Test Developer' }],
    releaseDate: '2023-12-19',
    image: 'https://test.com/test-image.jpg',
  };

  it('renders correctly with game data', () => {
    const { getByTestId, getByText } = render(<GameHeader {...mockGame}/>);

    expect(getByTestId('ImageID')).toBeTruthy();

    expect(getByText('Test Game')).toBeDefined();
    expect(getByText('Test Developer')).toBeDefined();
    expect(getByText('Release Date: 2023-12-19')).toBeDefined();
  });

  it('renders default image', () => {
    const InvalidImage = 'invalid_image_url';
    const { getByTestId } = render(<GameHeader image={InvalidImage}/>)

    expect(getByTestId('NoImageID')).toBeTruthy();
  })

  it('renders default text when data is unavailable', () => {
    const { getByTestId } = render(<GameHeader />);
  
    const nameTest = getByTestId('NameID');
    const developerTest = getByTestId('DeveloperID');
    const dateTest = getByTestId('DateID');
  
    expect(nameTest).toBeTruthy();
    expect(developerTest).toBeTruthy();
    expect(dateTest).toBeTruthy();

    expect(nameTest.props.children).toBe('Unavailable');
    expect(developerTest.props.children).toBe('Unavailable');
    expect(dateTest.props.children).toContain('Unavailable');
  });
 
});





