import './App.css';
import NewsList from "./components/NewsList";
import { useState} from "react";
import { useGetArticles } from './utils/apis';
import { useGetArticlesFromGuardian} from "./utils/guardianApi";
import { useGetArticlesNYTimes} from "./utils/newYorkTimeAPI";

function App() {
    const { articles, loading, error } = useGetArticles();
    const {articlesGuardian, loadingGuardian, errorGuardian} = useGetArticlesFromGuardian();
    const {articlesNY, loadingNY, errorNY} = useGetArticlesNYTimes();
    const [query, setQuery] = useState('');
    const [authorVal, setAuthorVal] = useState('');
    const [sorting, setSorting] = useState('ASC');
    const [source, setSource] = useState('NEWSAPI')
    const sourceList = [ 'NEWSAPI', 'NYTimes', 'Guardian'];

    let newsApiArticles = articles;
    if (source === 'NYTimes') {
        newsApiArticles = articlesNY;
    } else if (source === 'Guardian') {
        newsApiArticles = articlesGuardian;
    }

    return (
        <>
            <header class='shadow-md bg-white font-[sans-serif] sticky top-0 z-50'>
                <section
                    class='flex items-center lg:justify-center relative py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
                    <div className='left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
                             className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                        <input
                            type='text'
                            placeholder='Search...'
                            class="outline-none bg-transparent w-full text-sm"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                        />
                    </div>

                    <div className='flex flex-wrap justify-center px-10 py-3 relative'>
                        <ul id="collapseMenu"
                            className='lg:!flex lg:space-x-10 max-lg:space-y-3 max-lg:hidden max-lg:w-full max-lg:my-4'>
                            <li className='max-lg:border-b max-lg:py-2'>
                                <a
                                    href='/'
                                    className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'
                                    onClick={() => setAuthorVal('home')}>Home</a>
                            </li>
                            <li className='group max-lg:border-b max-lg:py-2 relative'>
                                <a href='javascript:void(0)'
                                   className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'
                                >
                                    Source
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                        className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"/>
                                    </svg>
                                </a>
                                <ul
                                    className='absolute hidden group-hover:block shadow-lg bg-white space-y-2 px-6 pb-4 pt-6 lg:top-5 max-lg:top-8 left-0 min-w-[250px] z-50'>
                                    {
                                        sourceList.sort((a,b) => {
                                            return a > b ? 1 : -1;
                                        }).map((item, index) =>
                                            (
                                                <li className='border-b py-3' key={index}>
                                                    <a href='javascript:void(0)'
                                                       className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'
                                                       onClick={() => setSource(item)} >
                                                        {item}
                                                    </a>
                                                </li>
                                            )
                                        )
                                    }

                                </ul>
                            </li>
                            <li className='group max-lg:border-b max-lg:py-2 relative'>
                                <a href='javascript:void(0)'
                                   className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'
                                >
                                    Sort
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                        className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"/>
                                    </svg>
                                </a>
                                <ul
                                    className='absolute hidden group-hover:block shadow-lg bg-white space-y-2 px-6 pb-4 pt-6 lg:top-5 max-lg:top-8 left-0 min-w-[250px] z-50'>
                                    <li className='border-b py-3'>
                                        <a href='#'
                                           className='hover:text-[#007bff] hover:fill-[#007bff] text-black font-semibold text-[13px] block'
                                           onClick={() => setSorting('ASC')}>
                                            Newer to Older
                                        </a>
                                    </li>
                                    <li className='border-b py-3'>
                                        <a href='#'
                                           className='hover:text-[#007bff] hover:fill-[#007bff] text-black font-semibold text-[13px] block'
                                           onClick={() => setSorting('DESC')}>
                                            Older to Newer
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='group max-lg:border-b max-lg:py-2 relative'>
                                <a href='javascript:void(0)'
                                   className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'
                                >
                                    By Author
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                        className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"/>
                                    </svg>
                                </a>
                                <ul className='absolute hidden group-hover:block shadow-lg bg-white space-y-2 px-6 pb-4 pt-6 lg:top-5 max-lg:top-8 left-0 min-w-[250px] z-50'>
                                    <li className='border-b py-3'>
                                        <a href='javascript:void(0)'
                                           className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[13px] block'
                                           onClick={() => setAuthorVal('home')}
                                        >
                                            Select An Author
                                        </a>
                                    </li>
                                    {
                                        articles.sort((a, b) => {
                                            return a.author > b.author ? 1 : -1;
                                        })
                                            .map((article) => (
                                                <li className='border-b py-3'>
                                                    <a href='javascript:void(0)'
                                                       className='hover:text-[#007bff] hover:fill-[#007bff] text-black font-semibold text-[13px] block'
                                                       onClick={() => setAuthorVal(article.author)}
                                                    >
                                                        {article.author}
                                                    </a>
                                                </li>
                                            ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>

            <div className="flex flex-wrap justify-center mt-10">

                {loading && <p>Loading...</p>}
                {error && <p>There was an error loading the articles</p>}
                {!loading && !error &&
                    <NewsList
                        articles={newsApiArticles}
                        query={query}
                        authorVal={authorVal}
                        sorting={sorting}
                        source={source}
                    />}
            </div>
        </>
    );
}

export default App;
