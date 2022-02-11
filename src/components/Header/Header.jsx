import React from 'react';
import classes from './Header.module.css';
import {SearchBar} from "../SearchBar";
import {User} from "../User";

const Header = ({setQuery,search}) => {
    return (
        <header className={classes.header}>
            <span className={classes.title}>Movie Catalog</span>
            <SearchBar setQuery={setQuery} search={search}/>
            <User/>
        </header>
    );
};

export {Header};