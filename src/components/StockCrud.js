import React, { Component } from 'react';
import configFile from '../config.json';

export class StockCrud extends Component {
    //Adicionar nome da classe aqui
    static displayName = StockCrud.name;

    constructor(props) {
        super(props);
        this.state = { grid: [], loading: true };
    }

    componentDidMount() {
        this.getAll();
    }

    static renderGrid(grid) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        {/*Aqui é o cabeçalho da grid*/}
                        <th>storeId</th>
                        <th>productId</th>
                        <th>quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {grid.map(element =>
                        //Aqui são os dados da grid
                        <tr key={element.storeId}>
                            <td>{element.storeId}</td>
                            <td>{element.productId}</td>
                            <td>{element.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        //Adicionar nome da classe aqui embaixo
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : StockCrud.renderGrid(this.state.grid);

        return (
            <div>
                <h1 id="tabelLabel" >Dados do DB</h1>
                {contents}
            </div>
        );
    }

    async getAll() {
        //Adicionar ao fetch o controller que será chamado
        const response = await fetch(configFile.API + 'stock');
        const data = await response.json();
        this.setState({ grid: data, loading: false });
    }
}
