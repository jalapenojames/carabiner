import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import keylink from '../key_link.png'

export default function Update({ view, state }) {
    return (
        <div style={{position: 'relative', paddingTop: '2%'}}>
            <h1 style={{fontWeight: 'normal', fontSize: '3em'}}>Update Key {view+1}</h1>
            <img className='' style={{width: '300px', height: '300px', transform: 'rotate(90deg)', position: 'absolute', top: '0px', left: '40vw'}} src={keylink} alt='carabiner example'/>        
            
            <div className='' style={{width: '100px', height: '100px', transform: 'rotate(0deg)', position: 'absolute', top: '250px', left: '40vw'}}>
                <p>Website</p><div>____{state.keys[view][0]}</div>
                <p>Pass</p><div>____{state.keys[view][1]}</div>

                <Link to='/view'><Button variant='secondary' style={{marginTop: '5%'}}>Back</Button></Link>
            </div>
        </div>
    )
}
