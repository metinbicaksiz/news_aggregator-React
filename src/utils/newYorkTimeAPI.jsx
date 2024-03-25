import { useState, useEffect } from 'react'

export const useGetArticlesNYTimes = () => {
    const [articlesNY, setArticlesNY] = useState([])
    const [loadingNY, setLoadingNY] = useState(true)
    const [errorNY, setErrorNY] = useState(null)

    const newsapi = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=okYTHG1GiO9v5DSXxDAjorVot8VaEANL';

    useEffect(() => {
        fetch(newsapi)
            .then(response => response.json())
            .then(data => {
                setArticlesNY(data.results)
            })
            .catch(err => {
                console.log(err)
                setErrorNY(err)
            })
            .finally(() => {
                setLoadingNY(false)
            })
    }, [])

    return {articlesNY, loadingNY, errorNY};}