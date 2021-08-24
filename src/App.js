import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GetUsers } from './components/GetUsers';
import { BrandCrud } from './components/BrandCrud';
import { CategoryCrud } from './components/CategoryCrud';
import { ProductCrud } from './components/ProductCrud';
import { StockCrud } from './components/StockCrud';

import './custom.css'
import UserCrud from './components/UserCrud';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/user' component={GetUsers} />
            <Route path='/brand' component={BrandCrud} />
            <Route path='/category' component={CategoryCrud} />
            <Route path='/product' component={ProductCrud} />
            <Route path='/stock' component={StockCrud} />
            <Route path='/UserCrud' component={UserCrud} />
      </Layout>
    );
  }
}
