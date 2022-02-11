import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({setQuery}) => {
    return (
        <div>
            <input className={classes.searchBar}
                   type="text"
                   id="searchBar"
                   placeholder={"Find movies..."}
                   onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export {SearchBar};