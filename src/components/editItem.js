import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usePagination} from "./customHooks/paginationHook";
import Pagination from "./customHooks/paginationForHook";
import {useSearch} from "./customHooks/searchHook";
import Search from "./customHooks/searchForHook";
import $ from "jquery";
import "./edit.item.css"

export function EditUsers() {
    const users = useSelector(state => state);
    const dispatch = useDispatch();
    const { filteredUsers, setSearch } = useSearch(users);
    const { setCurrentPage, currentUsers, amountOfPages } = usePagination(filteredUsers);

    const HandleSubmit = index => e => {
        e.preventDefault();

        const {newName, newAge} = e.target;

        dispatch({
            type: "EDIT_ITEM",
            id: index,
            name: newName.value,
            age: newAge.value
        });

        ShowNotification()
    };

    function ShowNotification() {
        $("<div/>")
            .html('<div class="alert alert-success">Person are changed</div>')
            .appendTo('#notification')//or body
            .delay(1000).fadeOut("slow", function () {
            $(this).remove();
        });
    }

    const listItems = currentUsers.map(function (value, index) {
        return (
            <form key={index} onSubmit={HandleSubmit(index)}>
                <div className="input-group">
                    <div className="input-group-prepend">
                            <span className="input-group-text" id="oldPerson">
                                {value.name}, {value.age}
                            </span>
                    </div>
                    <input
                        type="text"
                        placeholder="New name"
                        id="newName"
                        className="form-control"
                    />
                    <input
                        type="text"
                        placeholder="New age"
                        id="newAge"
                        className="form-control"
                        aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-primary"
                            type="submit"
                            id="button-addon2">
                            Изменить
                        </button>
                    </div>
                </div>
            </form>
        )
    });

    return (
        <div>
            <div className="jumbotron" id="notification">
                <h1>Edit person</h1>
            </div>
            <div className="container">
                <div id="search">
                    <Search  setSearch={setSearch} />
                </div>
                <div className="card container">
                    {listItems}
                </div>
                <div id="pagination">
                    <Pagination amountOfPages={amountOfPages} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </div>
    )
}