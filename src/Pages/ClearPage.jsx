import React, {useState, useEffect} from 'react';
import {SearchInfo} from '../components/SearchInfo'
import {Cards} from "../components/Cards";
import URL from "../constvalues/api"
import classes from './ClearPage.module.css'
import {Pagination} from "../components/Pagination";

const ClearPage = ({query}) => {

    const [page, setPage] = useState(1);
    const [cards, setCards] = useState([]);
    const [results, setResults] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = () => {
        setIsLoaded(true);
        fetch(`${URL}&s=${query}&page=${page}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.Search) {
                    setResults(json.totalResults);
                    setCards(json.Search);
                }
            })
            .finally(() => setIsLoaded(false));
    };

    useEffect(() => {
        setCards([]);
        setResults(0);
        if (query) {
            fetchData();
        }
    }, [query, page]);

    useEffect(() => setPage(1), [query]);

    return (
        <div className={classes.clear_page}>
            <SearchInfo searchQuery={query} totalResults={results} />
            {isLoaded ? <h1>Loading...</h1> : <Cards cards={cards} />}
            {results ? <Pagination initPage={page} totalResults={results} perPage={10} onCurrentPageChange={setPage}/> : null}
        </div>
    );
};

export {ClearPage};