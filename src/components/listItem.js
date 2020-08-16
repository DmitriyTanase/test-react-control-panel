import React from 'react';
import {usePagination} from "./customHooks/paginationHook";
import Pagination from "./customHooks/paginationForHook";
import {useSearch} from "./customHooks/searchHook";
import Search from "./customHooks/searchForHook"
import {useSelector} from "react-redux";
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import "./list.item.css"

export function ListOfItems() {
    const users = useSelector(state => state);
    const { setCurrentPage, currentUsers, amountOfPages } = usePagination(users);
    const { filteredUsers, setSearch } = useSearch(currentUsers);

    let {url} = useRouteMatch();

    let items = filteredUsers.map(function (value, index) {
        return (
            <form key={index}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <Link className="input-group-text" id="linkToItem" to={`${url}/${value.name}`}>
                            {value.name}
                        </Link>
                    </div>
                </div>
            </form>
        )
    });

    return (
        <div>
            <div className="jumbotron">
                <h1>List of items</h1>
            </div>
            <div className="container">
                <div>
                    <Search setSearch={setSearch} />
                </div>
                <div>{items}</div>
                <hr/>
                <div>
                    <Pagination amountOfPages={amountOfPages} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </div>
    )
}