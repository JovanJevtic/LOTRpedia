import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
                     
    useEffect(() => {
        const abortCont = new AbortController;

        setTimeout(() => {
            fetch(url, { 
                signal: abortCont.signal, 
                method: 'GET',
                headers: {
                    'Authorization': process.env.REACT_APP_API_REGISTER_TOKEN
                }
            })
                .then(res => {
                    if(!res.ok) {
                        throw Error('Failed to fetch data!');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Aborted fetching');
                    } else {
                        setIsLoading(false);
                        setError(err.message);
                    }
                });
        }, [0])

        return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;