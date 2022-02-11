import React from 'react';
import classes from './SearchBar.module.css';
const SearchBar = () => {
    return (
        <div>
            <input className={classes.searchBar} type="text" placeholder={"Find movies..."}/>
        </div>
    );
};

export { SearchBar };