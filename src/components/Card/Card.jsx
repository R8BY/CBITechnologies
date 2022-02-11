import React from 'react';
import classes from './Card.module.css';
import noPhotos from '../../images/image-placeholder.png'
const Card = () => {
    return (
        <div className={classes.card}>
            <div className={classes.posterCard}>
                <img className={classes.poster} src={noPhotos} alt="poster"/>
                <ul className={classes.infoCard}>
                    <li>Name: Batman</li>
                    <li>Year: 2005</li>
                    <li>imdbID: 530</li>
                    <li>Type: movie</li>
                </ul>
            </div>
        </div>
    );
};

export { Card };