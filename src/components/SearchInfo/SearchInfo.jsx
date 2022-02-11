import React from 'react';
import classes from './SearchInfo.module.css';

const SearchInfo = ({searchQuery, totalResults}) => {
    return (
        <div className={classes.searchInfo}>
            {searchQuery ? (
                <span>
          {`You searched for: ${searchQuery}, `}
                    {totalResults ? `${totalResults} results found` : 'nothing found'}
        </span>
            ) : (
                <span>Try to search something</span>
            )}
        </div>
    );
};

export {SearchInfo};