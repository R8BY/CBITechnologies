import React from 'react';
import classes from './Card.module.css';

const Card = ({poster,title,year,id,type}) => {
    return (
        <div className={classes.card}>
            <div className={classes.posterCard}>
                <img className={classes.poster} src={poster} alt="poster"/>
                <ul className={classes.infoCard}>
                    <li>Name: {title}</li>
                    <li>Year: {year}</li>
                    <li>imdbID: {id}</li>
                    <li>Type: {type}</li>
                </ul>
            </div>
        </div>
    );
};

export { Card };