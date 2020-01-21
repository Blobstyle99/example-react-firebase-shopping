import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

import AuthRoute from '../../components/AuthRoute'

export default () => (
  <Switch>
    <Route exact path="/products" component={AuthRoute(ProductList)} />
    <Route exact path="/products/:id" component={ProductDetail} />
  </Switch>
)
