import React from 'react';
import classes from './Card.module.css';
import avatar from '../../images/image-placeholder.png';

const Card = ({poster, title, year, id, type}) => {
    return (
        <div className={classes.card}>
            <img className={classes.poster} src={poster} alt="poster"/>
            <ul className={classes.infoCard}>
                <li>Name: {title}</li>
                <li>Year: {year}</li>
                <li>imdbID: {id}</li>
                <li>Type: {type}</li>
            </ul>
        </div>
    );
};

export {Card};