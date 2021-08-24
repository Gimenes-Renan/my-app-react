import React, { Component } from 'react';
import configFile from '../config.json';

export class CategoryCrud extends Component {
    static displayName = CategoryCrud.name;

    constructor(props) {
        super(props);
        this.state = { categories: [], loading: true };
    }

    componentDidMount() {
        this.getAllCategories();
    }

    static renderCategoriesTable(categories) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>categoryId</th>
                        <th>categoryName</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category =>
                        <tr key={category.categoryId}>
                            <td>{category.categoryId}</td>
                            <td>{category.categoryName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : CategoryCrud.renderCategoriesTable(this.state.categories);

        return (
            <div>
                <h1 id="tabelLabel" >Buscar categorias no DB</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async getAllCategories() {
        const response = await fetch(configFile.API + 'category');
        const data = await response.json();
        this.setState({ categories: data, loading: false });
    }
}
