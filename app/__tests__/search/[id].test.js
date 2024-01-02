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
        useSearch.mockReturnValue(mockUseSearchResponse);
        const { getByTestId, getByText } = render(<GameSearch />);

        await waitFor(() => {
            expect(getByTestId('list-id')).toBeTruthy();
            expect(getByText('Game 1')).toBeDefined();
            expect(getByText('Game 2')).toBeDefined();
        });
    });

    it('renders loading indicator', () => {
        useSearch.mockReturnValue({ searchLoader: true });
        const { getByTestId } = render(<GameSearch />);

        expect(getByTestId('loadingID')).toBeTruthy();
    });

    it('renders error message', () => {
        useSearch.mockReturnValue({ searchError: true});
        const { getByText } = render(<GameSearch />);

        expect(getByText('Something went wrong')).toBeDefined();
    })
})