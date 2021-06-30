import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Key from './Key'

import carabiner from '../carabiner_png.png'

export default class Carabiner extends Component {

    state = {
        keys: [2,1,'a']
    }

    addKey = () => {
        let keys = this.state.keys.concat([this.state.keys.length])
        this.setState({ keys })
    }

    deleteKey = (e,id) => {
        let keys = this.state.keys
        keys.splice(id,1)
        this.setState({ keys })
    }

    render() {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '100%', position: 'relative', padding: '10%'}}>
                    <div className='' style={{fontFamily: 'Quicksand', fontWeight: 'bold', fontSize: '3em'}}>Carabiner<Button onClick={this.addKey} type="button" className="btn btn-secondary">Create new key</Button></div>
                    <img className='' style={{width: '400px', height: '400px', transform: 'rotate(180deg)'}} src={carabiner} alt='carabiner example'/>
                    {this.state.keys.map((elem,index) => <Key id={index} deleteKey={this.deleteKey}/>)}
            </div>
        )
    }
}
