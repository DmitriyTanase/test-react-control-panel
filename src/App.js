import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/all.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Navigbar} from "./components/navbar";
import {Routes} from "./components/routes";

function App() {
    return (
        <div>
            <Navigbar/>
           <Routes/>
        </div>
    )
    // const users = useSelector(state => state);
    // const dispatch = useDispatch();
    //
    // function ListOfUsers() {
    //     const listItems = users.map(function (value, index) {
    //         return (
    //             <div>
    //                 <li key={index}>{value.name}, {value.age}</li>
    //                 <button onClick={() => dispatch({type: 'DELETE_ITEM', id: index})}
    //                         className="btn btn-danger btn-sm">
    //                     Удалить
    //                 </button>
    //             </div>
    //         )
    //     });
    //     return (
    //         <ul>{listItems}</ul>
    //     );
    // }
    //
    // const submitHandler = index => e => {
    //     e.preventDefault();
    //     const { newName, newAge } = e.target;
    //
    //     dispatch({
    //         type: "EDIT_ITEM",
    //         id: index,
    //         name: newName.value,
    //         age: newAge.value
    //     });
    // };
    //
    // function EditUsers() {
    //     const listItems = users.map(function (value, index) {
    //         return (
    //             <form key={index} onSubmit={submitHandler(index)}>
    //                 <div className="input-group">
    //                     <div className="input-group-prepend">
    //                         <span className="input-group-text">
    //                             {value.name}, {value.age}
    //                         </span>
    //                     </div>
    //                     <input
    //                         type="text"
    //                         placeholder="New name"
    //                         id="newName"
    //                         className="form-control"
    //                     />
    //                     <input
    //                         type="text"
    //                         placeholder="New age"
    //                         id="newAge"
    //                         className="form-control"
    //                         aria-describedby="button-addon2"
    //                     />
    //                     <div className="input-group-append">
    //                         <button
    //                                 className="btn btn-outline-primary"
    //                                 type="submit"
    //                                 id="button-addon2">
    //                             Изменить
    //                         </button>
    //                     </div>
    //                 </div>
    //             </form>
    //         )
    //     });
    //     return (
    //         <div>{listItems}</div>
    //     )
    // }
    //
    //
    //
    // function HandleSubmit(e) {
    //     e.preventDefault();
    //     dispatch({
    //         type: 'ADD_ITEM',
    //         name: e.target.name.value,
    //         age: e.target.age.value
    //     })
    // }
    //
    //
    // return (
    //     <div>
    //         <div className="jumbotron">
    //             <h1>Item list</h1>
    //         </div>
    //         <div>
    //             <ListOfUsers/>
    //             <EditUsers/>
    //             <form
    //                 className="needs-validation"
    //                 onSubmit={HandleSubmit}
    //                 noValidate
    //             >
    //                 <div className="form-row">
    //                     <div className="col-md-4 mb-3">
    //                         <label>Name</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             name="name"
    //                             required
    //                         />
    //                         <div className="invalid-feedback">
    //                             Please enter a name.
    //                         </div>
    //                         <div className="valid-feedback">
    //                             Successful.
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="form-row">
    //                     <div className="col-md-4 mb-3">
    //                         <label>Age</label>
    //                         <input
    //                             type="text"
    //                             className="form-control"
    //                             name="age"
    //                             required
    //                         />
    //                         <div className="invalid-feedback">
    //                             Please enter a age.
    //                         </div>
    //                         <div className="valid-feedback">
    //                             Successful.
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <button
    //                     className="btn btn-primary"
    //                     type="submit">
    //                     Добавить
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );
}

export default (App);
