import React from 'react';
import classes from "./User.module.css";
import avatar from '../../images/user.png';
import arrowImage from '../../images/arrow-down.png';
const User = () => {
    return (
        <div className={classes.user}>
            <img src={avatar} alt="avatar" />
            <span>Alexander Borisenko</span>
            <img className={classes.arrow} src={arrowImage} alt="arrow"/>
        </div>
    );
};

export { User };