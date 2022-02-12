import React, {useEffect, useState} from 'react';
import MAX_PAGES from "../../constvalues/MAX_PAGES";
import getPages from "./getPages";
import classes from "./Pagination.module.css"

const Pagination = ({initPage,totalResults,perPage,onCurrentPageChange}) => {
    const [currentPage, setCurrentPage] = useState(initPage);
    const totalPages = Math.ceil(totalResults / perPage);

    useEffect(() => {
        onCurrentPageChange(currentPage);
    }, [currentPage]);

    const getNextPage = () => (currentPage >= totalPages ? totalPages : currentPage + 1);
    const getPreviousPage = () => (currentPage <= 1 ? 1 : currentPage - 1);

    return (<div className={classes.pagination}>
            <button type="button" onClick={() => setCurrentPage(getPreviousPage())}>
                &lt;
            </button>
            {getPages(currentPage, totalPages, MAX_PAGES).map((page) => (
                <button
                    className={page === currentPage ? classes.active : null}
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
            <button type="button" onClick={() => setCurrentPage(getNextPage)}>
                &gt;
            </button>
        </div>
    );
};

export { Pagination };