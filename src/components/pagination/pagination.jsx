import { Button } from '@mui/material';
import React from 'react';




const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
    previousPage,
    nextPage
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            <Button onClick={previousPage} >
               Prev
            </Button>
            {pages.map((page, index) => {
                return (
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </Button>
                );
            })}
            <Button onClick={nextPage} >
               Next
            </Button>
        </div>
    );
};

export default Pagination;