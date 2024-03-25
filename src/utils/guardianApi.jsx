import { useState, useEffect } from 'react'

export const useGetArticlesFromGuardian = () => {
    const [articlesGuardian, setArticlesGuardian] = useState([])
    const [loadingGuardian, setLoadingGuardian] = useState(true)
    const [errorGuardian, setErrorGuardian] = useState(null)

    const guardian = 'https://content.guardianapis.com/q=debate&api-key=5aa55792-11ff-436a-addf-e369abe918fa';

    useEffect(() => {
        fetch(guardian)
            .then(response => response.json())
            .then(data => {
                setArticlesGuardian(data.response.results)
            })
            .catch(err => {
                console.log(err)
                setErrorGuardian(err)
            })
            .finally(() => {
                setLoadingGuardian(false)
            })
    }, [])

    return {articlesGuardian, loadingGuardian, errorGuardian};
}