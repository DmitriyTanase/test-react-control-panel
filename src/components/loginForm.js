import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [isAuthed, setIsAuthed] = useState(false);
    //console.log(isAuthed);

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function getToken() {
        const token = Date.now().toString();
        if (username && password) {
            localStorage.setItem('userToken', JSON.stringify(token));
            //setIsAuthed(true)
        }
    }

    //if (isAuthed) return <Redirect to="/additem" />;

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <form onSubmit={getToken} noValidate>
                    <span className="fas fa-sign-in-alt"/>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control"
                               name="username"
                               value={username}
                               onChange={onChangeUsername}
                               placeholder="Login"
                               required
                        />
                        <div className="invalid-feedback">
                            Wrong username
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            placeholder="Password"
                            required
                        />
                        <div className="invalid-feedback">
                            Wrong password
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">
                            Submit form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             username: "",
//             password: ""
//         }
//     }
//
//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         })
//     };
//
//     onChangePassword(e) {
//         this.setState({
//             password: e.target.value
//         })
//     };
//
//     getToken(e) {
//         e.preventDefault();
//
//         if (this.state.username && this.state.password) {
//             localStorage.setItem('userToken', JSON.stringify(1233457423412))
//         }
//     }

    // render() {
    //     return (
    //         <div className="col-md-12">
    //             <div className="card card-container">
    //                 <form onSubmit={this.getToken} novalidate>
    //                     <div className="form-group">
    //                         <label htmlFor="username">Username</label>
    //                         <input type="text" className="form-control"
    //                                name="username"
    //                                value={this.state.username}
    //                                onChange={this.onChangeUsername}
    //                                placeholder="Login"
    //                                required
    //                         />
    //                         <div className="invalid-feedback">
    //                             Wrong username
    //                         </div>
    //                     </div>
    //                     <div className="form-group">
    //                         <label htmlFor="password">Password</label>
    //                         <input
    //                             type="password"
    //                             className="form-control"
    //                             name="password"
    //                             value={this.state.password}
    //                             onChange={this.onChangePassword}
    //                             placeholder="Password"
    //                             required
    //                         />
    //                         <div className="invalid-feedback">
    //                             Wrong password
    //                         </div>
    //                     </div>
    //                     <div className="form-group">
    //                         <button className="btn btn-primary" type="submit">Submit form</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     )
    // }
// }
//
// export default LoginForm;