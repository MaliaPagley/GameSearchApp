import axios from "axios";
import { useState, useEffect } from "react";

import { CURRENT_HOST } from "../utils/host";

const useSearch = (params) => {
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `http://${CURRENT_HOST}:8000/search/${params}`,
      };

      const response = await axios.request(options);
      const res = response.data.results;
      setSearchResult(res);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return { searchLoader, searchResult, searchError, handleSearch };
};

export default useSearch;
