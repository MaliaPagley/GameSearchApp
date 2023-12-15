// Newgames.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Newgames from './Newgames';

jest.mock('../../../hook/useInfiniteList', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    games: [],
    loadingList: false,
    listError: null,
    loadMoreGames: jest.fn(),
  }),
}));

describe('Newgames Component: ', () => {
  it('renders header title correctly', () => {
    const { getByText } = render(<Newgames />);

    expect(getByText('New Games')).toBeDefined();
  })

  it('renders loading indicator while fetching data', () => {
    require('../../../hook/useInfiniteList').default.mockReturnValue({
      games: [],
      loadingList: true,
      listError: null,
      loadMoreGames: jest.fn(),
    });

    const { getByTestId  } = render(<Newgames />);

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders error message', () => {
    require('../../../hook/useInfiniteList').default.mockReturnValue({
        games: [],
        loadingList: false,
        listError: true,
        loadMoreGames: jest.fn(),
      });

    const { getByText } = render(<Newgames />);

    expect(getByText('Data Unavailable'))
  });
  
  it('renders FlashList with data', () => {
    require('../../../hook/useInfiniteList').default.mockReturnValue({
      games: [
        { id: 1, name: 'Game 1' },
        { id: 2, name: 'Game 2' },
      ],
      loadingList: false,
      listError: null,
      loadMoreGames: jest.fn(),
    });
    const { getByTestId } = render(<Newgames />);
    
    const flashList = getByTestId('list-id');

    expect(flashList).toBeTruthy();
  });

  it('can press TouchableOpacity to load more games', async () => {
    require('../../../hook/useInfiniteList').default.mockReturnValue({
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
      expect(require('../../../hook/useInfiniteList').default().loadMoreGames).toHaveBeenCalled();
    });
  });

});
