import React from 'react';
import { render, waitFor, screen } from '@testing-library/react-native';
import GameTabScreenshots from './GameTabScreenshots';
import useFetch from '../../../../hook/useFetch';

jest.mock('../../../../hook/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('GameTabScreenshots Component: ', () => {
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

  it('renders loading indicator while fetching data', async () => {
    useFetch.mockReturnValue({ data: undefined, isLoading: true });
    render(<GameTabScreenshots id={123} />);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeDefined();
  });

  it('renders screenshots when data is available', async () => {
    useFetch.mockReturnValue({ data: mockData, isLoading: false });
    render(<GameTabScreenshots id={123} />);

    await waitFor(() => {
      const screenshot1 = screen.getByTestId('screenshot-0');
      const screenshot2 = screen.getByTestId('screenshot-1');

      expect(screenshot1).toBeDefined();
      expect(screenshot2).toBeDefined();
    });
  });
  
  it('renders default image when there is an invalid URL', async () => {
    useFetch.mockReturnValue({ data: mockDataInvalidURL, isLoading: false });
    render(<GameTabScreenshots id={123} />);
  
    await waitFor(() => {
      const noImage = screen.getByTestId('screenshot-default-0');
      expect(noImage).toBeDefined();
    });
  });

  it('renders no image and indicator when no screenshots are available', async () => {
    useFetch.mockReturnValue({ data: { results: [] }, isLoading: false });
    render(<GameTabScreenshots id={123} />);

    await waitFor(() => {
      const noImage = screen.getByTestId('screenshot-default');
      const indicator = screen.getByTestId('indicator-1');

      expect(noImage).toBeDefined();
      expect(indicator).toBeDefined();
    });
  });
});
