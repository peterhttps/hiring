import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import ResultPage from './pages/ResultPage';
import StockPage from './pages/StockPage';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/results/:id" component={ResultPage} />
            <Route exact path="/stock/:id" component={StockPage} />

        </Switch>
    </BrowserRouter>
);

export default Routes;