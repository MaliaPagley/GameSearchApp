import { useState, useEffect } from 'react';
import axios from 'axios';
import { CURRENT_HOST } from '../utils/host';

const useInfiniteList = (endpoint) => {
  const [games, setGames] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [listPage, setListPage] = useState(1);
  const [listError, setListError] = useState(false);
  const pageSize = 40;

  const fetchGames = async (page) => {
    try {
      const response = await axios.get(`http://${CURRENT_HOST}:8000/${endpoint}`, {
        params: {
          page,
          page_size: pageSize,
        },
      });
      setGames((prevGames) => [...prevGames, ...response.data.results]);
      setLoadingList(false);
    } catch (error) {
      console.error('Error fetching games:', error);
      setListError(true);
      setLoadingList(true);
    } finally {
      setLoadingList(false);
    }
  };

  const loadMoreGames = () => {
    if (!loadingList && !listError) {
      setListPage(listPage + 1);
      refreshLoad();
    }
  };

  const refreshLoad = () => {
    fetchGames(listPage + 1);
  }

  useEffect(() => {
    fetchGames(listPage); // Fetch data initially when the component mounts.
  }, []);

  return { games, loadingList, listError, loadMoreGames };
};

export default useInfiniteList;

