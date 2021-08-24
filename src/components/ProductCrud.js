import React, { Component } from 'react';
import configFile from '../config.json';

export class ProductCrud extends Component {
    static displayName = ProductCrud.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.getAllProducts();
    }

    static renderProductsTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>productId</th>
                        <th>productName</th>
                        <th>brandId</th>
                        <th>categoryId</th>
                        <th>modelYear</th>
                        <th>listPrice</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.brandId}</td>
                            <td>{product.categoryId}</td>
                            <td>{product.modelYear}</td>
                            <td>{product.listPrice}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ProductCrud.renderProductsTable(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel" >Buscar produtos no DB</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async getAllProducts() {
        const response = await fetch(configFile.API + 'product');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}
