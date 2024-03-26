import NewsItem from "./NewsItem";

const NewsList = ({ articles, query, authorVal, sorting }) => {



    const sortedArticles = () => {
        if (sorting === 'DESC') {
            return articles.sort((a, b) => {
                return a.publishedAt > b.publishedAt ? 1 : -1;
            })
        } else if (sorting === 'ASC') {
            return articles.sort((a, b) => {
                return a.publishedAt > b.publishedAt ? -1 : 1;
            })
        } else {
            return articles
        }
    }

    return (
        <>
            {
                sortedArticles().filter((article) => {
                        if (article.description) {
                            return (article.description.toLowerCase().includes(query.toLowerCase())
                            || article.title.toLowerCase().includes(query.toLowerCase()));
                            }
                        }
                    )
                    .filter((article) => {
                        if (authorVal === 'home') {
                            return articles;
                        } else if (authorVal) {
                            return article.author === authorVal
                        } else {
                            return articles
                        }
                    })
                    .map((article, index) => {
                    return (
                        <NewsItem
                            key={index}
                            title={article.title}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            url={article.url}
                            author={article.author}
                            published={article.publishedAt}
                        />
                    )
                })
            }
        </>
    )
}

export default NewsList
