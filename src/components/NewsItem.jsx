import React from 'react'
function NewsItem({ title, description, url, urlToImage, published, author }) {
    const publishedDate = published.slice(0,10);

    return (
        <div className="p-4 max-w-sm">
            <div className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-blue-400">
                <img className="w-full" src={urlToImage} alt={urlToImage}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <p className='mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center'>{author}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href={url}
                       className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                        Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <a href={url}
                       className="mt-3 text-black dark:text-white hover:text-black inline-flex float-right">
                        {publishedDate}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
