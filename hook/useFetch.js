import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    // console.log(query)
    const options = {
        method: 'GET',
        url: `http://localhost:8000/${endpoint}`,
        params: {...query}
      };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            const dataResults = response.data
            setData(dataResults)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    } 
    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    

    return { data, isLoading, error, refetch };
}
export default useFetch;
