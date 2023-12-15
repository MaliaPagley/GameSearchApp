import React from "react";
import { render } from '@testing-library/react-native';
import Populargames from "./Populargames";
import useInfiniteList from "../../../hook/useInfiniteList";

jest.mock('../../../hook/useInfiniteList', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    games: [],
    loadingList: false,
    listError: null,
    loadMoreGames: jest.fn(),
  }),
}));

describe('Populargames Component:', () => {
  it('renders header title correctly', () => {
    const { getByText } = render(<Populargames />);
    expect(getByText('Popular Games')).toBeDefined();
  });

  it('renders loading indicator while fetching data', () => {
    useInfiniteList.mockReturnValue({
        games: [],
        loadingList: true,
        listError: null,
        loadMoreGames: jest.fn(),
    });

    const { getByTestId } = render(<Populargames />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders error message', () => {
    useInfiniteList.mockReturnValue({
        games: [],
        loadingList: false,
        listError: true,
        loadMoreGames: jest.fn(),
    });

    const { getByText } = render(<Populargames />);
    expect(getByText('Data Unavailable')).toBeDefined();
  });

  it('renders FlashList with data', () => {
    useInfiniteList.mockReturnValue({
        games: [
          { id: 1, name: 'Game 1' },
          { id: 2, name: 'Game 2' },
        ],
        loadingList: false,
        listError: null,
        loadMoreGames: jest.fn(),
    });

    const { getByTestId } = render(<Populargames />);
    const flashList = getByTestId('list-id');
    expect(flashList).toBeTruthy();
  });
});
