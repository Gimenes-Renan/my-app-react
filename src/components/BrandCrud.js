import React, { Component } from 'react';
import configFile from '../config.json';

export class BrandCrud extends Component {
    static displayName = BrandCrud.name;

    constructor(props) {
        super(props);
        this.state = { brands: [], loading: true };
    }

    componentDidMount() {
        this.getAllBrands();
    }

    static renderBrandsTable(brands) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>brandId</th>
                        <th>brandName</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map(brand =>
                        <tr key={brand.brandId}>
                            <td>{brand.brandId}</td>
                            <td>{brand.brandName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : BrandCrud.renderBrandsTable(this.state.brands);

        return (
            <div>
                <h1 id="tabelLabel" >Buscar marcas no DB</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async getAllBrands() {
        const response = await fetch(configFile.API + 'brand');
        const data = await response.json();
        this.setState({ brands: data, loading: false });
    }
}
