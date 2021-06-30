import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Carabiner from './Carabiner'
import View from './View'

export default class MainContainer extends Component {
    render() {
        return (
            <div style={{height: '800px'}}>
                <Switch>
                    <Route exact path='/' component={Carabiner}/>
                    <Route exact path='/view' component={View}/>
                </Switch>
            </div>
        )
    }
}
