import React from 'react';
import {useSelector} from "react-redux";
import {
    Link,
    useParams,
} from "react-router-dom";

export function ItemPage() {

    let {personId} = useParams();
    const users = useSelector(state => state);
    let user = users.find(item => item.name === personId);
    console.log(personId);

    return (
        <div key={personId}>
            <div className="jumbotron">
                <h1>Person: {personId}</h1>
            </div>
            <div className="container">
                <h2>{user.name}</h2>
                <h2>{user.age}</h2>
                <hr/>
                <Link to='/listOfItem'>Back</Link>
            </div>
        </div>
    )
}