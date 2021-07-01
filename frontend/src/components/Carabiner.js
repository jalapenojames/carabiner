import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Key from './Key'

import carabiner from '../carabiner_png.png'

export default class Carabiner extends Component {
    render() {
        return (
            <div className='d-flex flex-row justify-content-center align-items-center' style={{height: '100%', position: 'relative', padding: '0%', margin: 0}}>
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <div className='' style={{fontFamily: 'Quicksand', fontWeight: 'bold', fontSize: '3em'}}>Carabiner<Button onClick={this.props.addKey} type="button" className="btn btn-secondary">Create new key</Button></div>
                        </div>
                        <div className="col">
                            <img className='' style={{width: '400px', height: '400px', transform: 'rotate(180deg)'}} src={carabiner} alt='carabiner example'/>
                        </div>
                    </div>
                    {this.props.state.keys.map((elem,index) => <Key id={index} key={index} deleteKey={this.props.deleteKey} view={this.props.state.view} updateView={this.props.updateView}/>)}
            </div>
        )
    }
}
