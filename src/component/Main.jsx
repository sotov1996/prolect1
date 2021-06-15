import React from 'react'
import { Forma } from './forma'
import { List } from './list'
import { ListEdit } from './list_edit'
import { Header } from '../layouts/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Main = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <p>Hello</p>
                </Route>
                <Route path='/forma'>
                    <Forma />
                </Route>
                <Route path='/list'>
                    <List />
                    <ListEdit />
                </Route>
            </Switch>
        </Router>
    )
}