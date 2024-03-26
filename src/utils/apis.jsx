import { useState, useEffect } from 'react'

export const useGetArticles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const newsapi = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d07d4211b7d34b87ad8595d91cf08504';

    useEffect(() => {
        fetch(newsapi)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {articles, loading, error};
}