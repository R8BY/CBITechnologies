import React from 'react';
import classes from './Header.module.css';
import {SearchBar} from "../SearchBar";
import {User} from "../User";

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Movie Catalog</h1>
            <SearchBar/>
            <User/>
        </header>
    );
};

export {Header};