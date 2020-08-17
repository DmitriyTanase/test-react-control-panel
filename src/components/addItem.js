import React from 'react';
import { useDispatch } from "react-redux";
import "jquery/dist/jquery.min"
import "./add.item.css";
import $ from "jquery";

export function AddItem() {
    const dispatch = useDispatch();

    function HandleSubmit(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const age = e.target.age.value;

        dispatch({
            type: 'ADD_ITEM',
            name: name,
            age: age
        });
        if (name && age) {
            ShowNotification()
        }
    }

    function ShowNotification() {
        $("<div/>")
            .html('<div class="alert alert-primary">Add new person</div>')
            .appendTo('#notification')//or body
            .delay(1000).fadeOut("slow", function() {
            $(this).remove();
        });
    }

    return (
        <div>
            <div className="jumbotron" id="notification">
                <h1>Add person</h1>
            </div>
            <div className="col-md-12">
                <div className="login-card login-card-container">
                    <span className="fas fa-user-plus"/>
                    <form
                        className="needs-validation"
                        onSubmit={HandleSubmit}
                        noValidate
                    >
                        <div className="form-group">
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Person name"
                                    name="name"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a name.
                                </div>
                                <div className="valid-feedback">
                                    Successful.
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label>Age</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Person age"
                                    name="age"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a age.
                                </div>
                                <div className="valid-feedback">
                                    Successful.
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary form-group"
                            type="submit"
                        >
                            Добавить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}