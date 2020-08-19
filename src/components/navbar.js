import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';

export function Navigbar() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        Authentication();
    }, currentUser);// изменения значения currentUser должен вызвать новый рендер, но не вызывает, делаю костыль.

    function Authentication() {
        setCurrentUser(localStorage.getItem('userToken'));
        console.log(currentUser);
    }

    function LogOut() {
        localStorage.removeItem('userToken');
        ChangeLocation();
        console.log('deleted:' + localStorage.getItem('userToken'))
    }

    function ChangeLocation() {
        //костыль
        document.location.reload();
        document.location.assign('http://localhost:3000/listOfItem');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Control panel</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {currentUser ? (
                        <div className="container">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/additem">Add item</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/edititem">Edit item</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/deleteitem">Delete item</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/" onClick={LogOut}>
                                    <span className="fas fa-sign-out-alt"/>
                                </Link>
                            </li>
                        </div>
                    ) : (
                        <div className="container">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="fas fa-sign-in-alt"/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listOfItem">List of items</Link>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    )
}


