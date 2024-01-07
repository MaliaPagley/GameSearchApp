import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import GameSearch from '../../search/[id]';
import useSearch from '../../../hook/useSearch';
import { useLocalSearchParams } from 'expo-router';

jest.mock('../../../hook/useSearch');
jest.mock('expo-router');

describe('GameSearch Component: ', () => {
  useLocalSearchParams.mockReturnValue({ id: 'Param Search' });
  const mockUseSearchResponse = {
    searchLoader: false,
    searchError: null,
    searchResult: [
      { id: 1, name: 'Game 1' },
      { id: 2, name: 'Game 2' },
    ],
  };

  it('renders component correctly', async () => {
    useSearch.mockReturnValueOnce(mockUseSearchResponse);
    const { getByTestId, getByText } = render(<GameSearch />);

    await waitFor(() => {
      expect(getByTestId('listID')).toBeTruthy();
      expect(getByText('Game 1')).toBeDefined();
      expect(getByText('Game 2')).toBeDefined();
    });
  });

  describe('when loading', () => {
    it('renders loading indicator', () => {
      useSearch.mockReturnValueOnce({ searchLoader: true });
      const { getByTestId } = render(<GameSearch />);

      expect(getByTestId('loadingID')).toBeTruthy();
    });
  });

  describe('when on error', () => {
    it('renders error message', () => {
      useSearch.mockReturnValueOnce({ searchError: true });
      const { getByText } = render(<GameSearch />);

      expect(getByText('Something went wrong')).toBeDefined();
    });
  });
});
