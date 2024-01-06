import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Newgames from './Newgames';
import useInfiniteList from '../../../hook/useInfiniteList';

jest.mock('../../../hook/useInfiniteList');

describe('Newgames Component', () => {
  it('renders data correctly', () => {
    useInfiniteList.mockReturnValueOnce({
      games: [
        { id: 1, name: 'Game 1' },
        { id: 2, name: 'Game 2' },
      ],
      loadingList: false,
      listError: null,
      loadMoreGames: jest.fn(),
    });

    const { getByTestId, getByText } = render(<Newgames />);

    expect(getByTestId('list-id')).toBeTruthy();
    expect(getByText('New Games')).toBeDefined();
  });

  describe('when loading', () => {
    it('renders loading indicator while fetching data', () => {
      useInfiniteList.mockReturnValueOnce({ loadingList: true });

      const { getByTestId } = render(<Newgames />);
      expect(getByTestId('loading-indicator')).toBeTruthy();
    });
  });

  describe('when on error', () => {
    it('renders error message', () => {
      useInfiniteList.mockReturnValueOnce({ listError: true });

      const { getByText } = render(<Newgames />);
      expect(getByText('Data Unavailable')).toBeDefined();
    });
  });

  describe('when button is pressed', () => {
    it('loadMoreGames is called', async () => {
      useInfiniteList.mockReturnValue({
        games: [
          { id: 1, name: 'Game 1' },
          { id: 2, name: 'Game 2' },
        ],
        loadingList: false,
        listError: null,
        loadMoreGames: jest.fn(),
      });
  
      const { getByText } = render(<Newgames />);
      const loadMoreButton = getByText('Load More Games');
      expect(loadMoreButton).toBeTruthy();
  
      fireEvent(loadMoreButton, 'press');
  
      await waitFor(() => {
        expect(useInfiniteList().loadMoreGames).toHaveBeenCalled();
      });
    });
  });
});
