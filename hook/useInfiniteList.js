import { useState, useEffect } from 'react';
import axios from 'axios';
import { CURRENT_HOST } from '../utils/host';
const useInfiniteList = (endpoint) => {
  const [games, setGames] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [listPage, setListPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [listError, setListError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchGames = async (page) => {
    try {
      setLoadingMore(true);
      const response = await axios.get(`http://${CURRENT_HOST}:8000/${endpoint}`, {
        params: {
          page,
          page_size: pageSize,
        },
      });
      console.log(`Fetched ${endpoint} data length:`, response.data.results.length);
      setGames((prevGames) => [...prevGames, ...response.data.results]);
      setLoadingList(false);
    } catch (error) {
      console.error('Error fetching games:', error);
      setListError(true);
      setLoadingList(false);
    } finally {
      setLoadingMore(false);
    }
  };

  const loadMoreGames = () => {
    if (!loadingMore && !listError) {
      setListPage(listPage + 1);
    }
  };

  useEffect(() => {
    fetchGames(listPage); // Fetch data initially when the component mounts.
  }, []);

  useEffect(() => {
    if (listPage > 1) {
      fetchGames(listPage); // Fetch more data when listPage changes.
    }
  }, [listPage]);

  return { games, loadingList, listError, loadMoreGames };
};

export default useInfiniteList;

