import React from 'react';
import {Card} from '../Card'
import classes from './Cards.module.css'

const Cards = ({cards}) => {
    return (
        <div className={classes.card}>
            {cards.map(({Title, Year, imdbID, Type, Poster}) => (
                <Card key={imdbID} poster={Poster} title={Title} year={Year} id={imdbID} type={Type}/>
            ))}
        </div>
    );
};

export {Cards};