import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import {Login} from "./loginForm";
import {AddItem} from "./addItem";
import {EditUsers} from "./editItem";
import {DeleteItem} from "./deleteItem";
//import {ListOfItems} from "./listItem";
import {ListOfItems} from "./listItem";
import {ItemPage} from "./item";

export function Routes() {

    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/additem" component={AddItem}/>
            <Route path="/edititem" component={EditUsers}/>
            <Route path="/deleteitem" component={DeleteItem}/>
            <Route exact path="/listOfItem" component={ListOfItems}/>
            <Route path="/listOfItem/:personId" component={ItemPage}/>
        </Switch>
    )
}