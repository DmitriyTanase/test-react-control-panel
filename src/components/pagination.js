import React from "react";

const Pagination = ({postsPerPage, totalUsers, paginate}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalUsers / postsPerPage); i++) {
        pageNumber.push(i);
        console.log(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => {paginate(number)}}
                            type="button"
                            className="page-link"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;