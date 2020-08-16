import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePagination} from "./customHooks/paginationHook";
import Pagination from "./customHooks/paginationForHook";
import {useSearch} from "./customHooks/searchHook";
import Search from "./customHooks/searchForHook"
import $ from "jquery";
import "./delete.item.css"

export function DeleteItem() {
    const users = useSelector(state => state);
    const dispatch = useDispatch();
    const { setCurrentPage, currentUsers, amountOfPages } = usePagination(users);
    const { filteredUsers, setSearch } = useSearch(currentUsers);

    const HandleSubmit = index => e => {
        e.preventDefault();

        dispatch({
            type: 'DELETE_ITEM',
            id: index
        });

        ShowNotification()
    };

    function ShowNotification() {
        $("<div/>")
            .html('<div class="alert alert-danger">Person are deleted</div>')
            .appendTo('#notification')//or body
            .delay(1000).fadeOut("slow", function() {
            $(this).remove();
        });
    }

    return (
        <div>
            <div className="jumbotron" id="notification">
                <h1>Delete person</h1>
            </div>
            <div>
                <Search setSearch={setSearch} />
            </div>
            <div className="table-responsive-sm">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((value, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>
                                <button onClick={HandleSubmit(index)}
                                        id="deleteBtn"
                                        className="btn btn-danger btn-sm"
                                >
                                    <span id="deleteImg" className="fas fa-user-times"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Pagination amountOfPages={amountOfPages} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}