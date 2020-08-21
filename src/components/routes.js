import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Login} from "./loginForm";
import {AddItem} from "./addItem";
import {EditUsers} from "./editItem";
import {DeleteItem} from "./deleteItem";
import {ListOfItems} from "./listItem";
import {ItemPage} from "./item";

export function Routes() {
    const user =  localStorage.getItem('userToken');
    console.log("user:" + user);
    const isLoggedIn = !!user;

    return (
        <Switch>
            <Route exact path="/" render = {() => <Redirect to="/login"/>}/>
            <Route exact path="/login" render={() => isLoggedIn ? <AddItem/> : <Login/>}/>
            <Route path="/additem" render={() => isLoggedIn ? <AddItem/> : <Redirect to="/login"/>}/>
            <Route path="/edititem" render={() => isLoggedIn ? <EditUsers/> : <Redirect to="/login"/>}/>
            <Route path="/deleteitem" render={() => isLoggedIn ? <DeleteItem/> : <Redirect to="/login"/>}/>
            <Route exact path="/listOfItem" component={ListOfItems}/>
            <Route path="/listOfItem/:personId" component={ItemPage}/>
        </Switch>
    )
}