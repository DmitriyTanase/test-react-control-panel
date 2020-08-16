import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Pagination from "./pagination";
import {
    Link,
    useRouteMatch
} from "react-router-dom";

export function ListOfItems() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const users = useSelector(state => state);
    let {url} = useRouteMatch();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(currentPosts);
    console.log(paginate);


    let items = currentPosts.map(function (value, index) {
        return (
            <form key={index}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <Link className="input-group-text" to={`${url}/${index}`}>
                            {value.name}
                        </Link>
                    </div>
                </div>
            </form>
        )
    });

    return (
        <div>
            <div>{items}</div>
            <Pagination postsPerPage={postsPerPage} totalUsers={users.length} paginate={paginate}/>
        </div>
    )
}