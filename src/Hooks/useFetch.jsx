import React, {useCallback, useState} from 'react';

const UseFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, serLoading] = useState(false);

    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null);
            serLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (response.ok === false) throw new Error(json.message);
        } catch (err) {
            json = null;
            setError(err.message);
        } finally {
            setData(json)
            serLoading(false);
            return {response, json}
        }
    }, []);

    return {
        data,
        loading,
        error,
        request
    };
};

export default UseFetch;