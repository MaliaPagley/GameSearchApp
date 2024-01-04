import React from 'react';
import { render } from '@testing-library/react-native';
import GameTabScreenshots from './GameTabScreenshots';
import useFetch from '../../../../../hook/useFetch';

jest.mock('../../../../../hook/useFetch');

describe('GameTabScreenshots Component:', () => {
  const mockData = {
    results: [
      { id: 0, image: 'https://test/image1.jpg' },
      { id: 1, image: 'https://test/image2.jpg' },
    ],
  };

  const mockDataInvalidURL = {
    results: [
      { id: 0, image: 'invalid-url-0' },
      { id: 1, image: 'invalid-url-1' },
    ],
  };

  it('renders screenshots when data is available', () => {
    useFetch.mockReturnValueOnce({ data: mockData, isLoading: false });
    const { getByTestId } = render(<GameTabScreenshots id={123} />);

    const screenshot1 = getByTestId('screenshot-0');
    const screenshot2 = getByTestId('screenshot-1');

    expect(screenshot1).toBeTruthy();
    expect(screenshot2).toBeTruthy();
  });

  describe('when loading:', () => {
    it('renders loading indicator while fetching data', () => {
      useFetch.mockReturnValueOnce({ data: undefined, isLoading: true });
      const { getByTestId } = render(<GameTabScreenshots id={123} />);

      const loadingIndicator = getByTestId('loadingID');
      expect(loadingIndicator).toBeTruthy();
    });
  });

  describe('when dealing with invalid URL or Unavailable screenshots:', () => {
    it('renders default image when there is an invalid URL', () => {
      useFetch.mockReturnValueOnce({ data: mockDataInvalidURL, isLoading: false });
      const { getByTestId } = render(<GameTabScreenshots id={123} />);

      const noImage = getByTestId('screenshot-default-0');
      expect(noImage).toBeTruthy();
    });

    it('renders no image and indicator when no screenshots are available', () => {
      useFetch.mockReturnValueOnce({ data: { results: [] }, isLoading: false });
      const { getByTestId } = render(<GameTabScreenshots id={123} />);

      const noImage = getByTestId('screenshot-default');
      const indicator = getByTestId('indicator-1');

      expect(noImage).toBeTruthy();
      expect(indicator).toBeTruthy();
    });
  });

  describe('when on error:', () => {
    it('renders error message', () => {
      useFetch.mockReturnValueOnce({ error: true });
      const { getByText } = render(<GameTabScreenshots />);

      expect(getByText('Screenshots are Unavailable')).toBeDefined();
    });
  });
});
