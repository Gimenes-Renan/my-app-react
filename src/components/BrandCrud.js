import React, { Component } from 'react';

export class BrandCrud extends Component {
    static displayName = BrandCrud.name;

    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
    }

    componentDidMount() {
        this.getAllUsers();
    }

    static renderUsersTable(users) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>idUser</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.idUser}>
                            <td>{user.idUser}</td>
                            <td>{user.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : BrandCrud.renderUsersTable(this.state.users);

        return (
            <div>
                <h1 id="tabelLabel" >Buscar usuários no DB</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async getAllUsers() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({ users: data, loading: false });
    }
}
