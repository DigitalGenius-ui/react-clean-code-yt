import React, { useEffect, useState } from 'react'

const useFetchHook = ({apiLink}) => {
    const [data, setDate] = useState([]);
    const [userDataError, setUserDataError] = useState(false);
    const [userDataLoading, setUserDataLoading] = useState(false);

     useEffect(() => {
        setUserDataLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(apiLink)
                const data = await res.json();
                setDate(data);
            } catch (error) {
                console.log(error);
                setUserDataError(error.message)
            } finally {
                setUserDataLoading(false)
            }
        }
        fetchData()
     }, [])
    
    return {
        data,
        userDataError,
        userDataLoading
    }
}

export default useFetchHook