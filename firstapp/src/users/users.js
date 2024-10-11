import React from 'react';

export default class Users extends React.Component {
    constructor(parameters) {
        super(parameters);

        this.state = {
            isAuth: false,
            users: [
                { id: 0, name: 'hamdy', age: '23', isAdmin: true },
                { id: 1, name: 'hamdy2', age: '23', isAdmin: true },
                { id: 2, name: 'ahmed', age: '19', isAdmin: false },
                { id: 3, name: 'mona', age: '20', isAdmin: false },
                { id: 4, name: 'ali', age: '21', isAdmin: false },
            ]
        }
    }

    handleLogin(){

        let loginBtn = document.querySelector(".login-btn2");


        if (this.state.isAuth) {
            this.setState({isAuth:false});
            loginBtn.innerHTML = "Log in";
            loginBtn.classList.add("btn-success");
            loginBtn.classList.remove("btn-danger");
        } else {
            loginBtn.innerHTML = "Log out";
            loginBtn.classList.add("btn-danger");
            loginBtn.classList.remove("btn-success");
            this.setState({isAuth:true});
        }

    }


    render() {
        console.log("Hey from render in users");
        return (
            <>
                <ul>
                    {this.state.isAuth ? this.state.users.map(
                        (user, index) => {
                            if (user.isAdmin)
                                return <li key={user.id}> {index + 1} : {user.name} - Age : {user.age} </li>
                            return <li key={user.id} > {user.name} is not an Admin</li>
                        }
                    ) : <h1> Login First</h1>}
                </ul>
                <button className="btn btn-success login-btn2" type="button" onClick={() => { this.handleLogin() }}>
                    Log in
                </button>
            </>
        );
    }
    componentDidMount() {
        console.log("Hey from componentDidMount in users");
    }
}