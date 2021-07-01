import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Carabiner from './Carabiner'
import View from './View'
import Update from './Update'


export default class MainContainer extends Component {

    state = {
        view: 0,
        keys: [['JohnDoe','hungrybear'],['FrankBotanist','aloevera'],['PrepCoffee','matchalatte']]
    }

    addKey = () => {
        let keys = this.state.keys.concat([[this.state.keys.length,this.state.keys.length]])
        this.setState({ keys })
    }

    deleteKey = (e,id) => {
        let keys = this.state.keys
        keys.splice(id,1)
        this.setState({ keys })
    }

    updateView = (view) => {
        this.setState({ view })
    }

    render() {
        return (
            <div style={{height: '800px'}}>
                <Switch>
                    <Route exact path='/'><Carabiner state={this.state} view={this.state.view} updateView={this.updateView} addKey={this.addKey} deleteKey={this.deleteKey}/></Route>
                    <Route exact path='/view'><View view={this.state.view} state={this.state}/></Route>
                    <Route exact path='/update'><Update view={this.state.view} state={this.state}/></Route>
                </Switch>
            </div>
        )
    }
}
