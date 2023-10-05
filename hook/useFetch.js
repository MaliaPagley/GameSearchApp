import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [ data, setData ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    console.log(data)
    const options = {
        method: 'GET',
        url: 'http://localhost:8000',
        params: {'page': '1', page_size: '1'}
      };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data)
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