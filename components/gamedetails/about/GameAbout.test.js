import React from 'react';
import { render } from '@testing-library/react-native';
import GameAbout from './GameAbout';

describe('GameAbout Component', () => {
  it('component renders', () => {
    const { toJSON } = render(<GameAbout />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders component with provided description', () => {
    const description = 'This is a test description.';
    const { getByText } = render(<GameAbout description={description} />);

    // Check if the component renders the header and the provided description
    expect(getByText('About:')).toBeTruthy();
    expect(getByText(description)).toBeTruthy();

    // Snapshot testing
    const tree = render(<GameAbout description={description} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders component without description', () => {
    const { getByText } = render(<GameAbout />);

    // Check if the component renders the header and the default "No description available." text
    expect(getByText('About:')).toBeTruthy();
    expect(getByText('No description available.')).toBeTruthy();

    // Snapshot testing
    const tree = render(<GameAbout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
