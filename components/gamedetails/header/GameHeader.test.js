import React from 'react';
import { render } from '@testing-library/react-native';
import GameHeader from './GameHeader';

describe('GameHeader Component:', () => {
  const mockGameData = {
    id: 1,
    name: 'Test Name',
    developers: [{ name: 'Test Developer' }],
    releaseDate: '2023-12-19',
    image: 'https://test.com/test-image.jpg',
  };

  it('renders correctly with game data', () => {
    const { getByTestId, getByText } = render(<GameHeader {...mockGameData} />);

    const image = getByTestId('ImageID');
    const name = getByText('Test Name');
    const developer = getByText('Test Developer');
    const date = getByText('Release Date: 2023-12-19');


    expect(image).toBeTruthy();
    expect(name).toBeDefined();
    expect(developer).toBeDefined();
    expect(date).toBeDefined();
  });

  it('renders default image when url is invalid', () => {
    const invalidImage = 'invalid_image_url';
    const { getByTestId } = render(<GameHeader image={invalidImage} />);

    expect(getByTestId('NoImageID')).toBeTruthy();
  });

  it('renders default text when data is unavailable', () => {
    const { getByTestId } = render(<GameHeader />);

    const name = getByTestId('NameID');
    const developer = getByTestId('DeveloperID');
    const date = getByTestId('DateID');

    expect(name.props.children).toBe('Unavailable');
    expect(developer.props.children).toBe('Unavailable');
    expect(date.props.children).toContain('Unavailable');
  });
});
