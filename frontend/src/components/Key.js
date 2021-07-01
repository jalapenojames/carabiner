import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import keyring from '../ring_sample.png'
import keylink from '../key_link2.png'

export default function Key(props) {

    const handleClick = () => {
        console.log(props.view)
        console.log(props.id)
        props.updateView(props.id)
    }

    return (
        <div>
            <img className='' style={{height: '100px', transform: 'rotate(90deg)', position: 'absolute', top: '33vw', left: `${55+props.id*5}vw`}} src={keyring} alt='carabiner example'/>
            <div className='' style={{height: '100px', transform: 'rotate(0deg)', position: 'absolute', top: '33vw', left: `${55+props.id*5}vw`}}>{props.id}</div>
            <Button onClick={(e)=>props.deleteKey(e,props.id)} variant="secondary" style={{height: '35px', transform: 'rotate(0deg)', position: 'absolute', top: '52vw', left: `${58+props.id*5}vw`}}>X</Button>


            <Link to='/view' onClick={handleClick}>
                <img className='' style={{height: '200px', transform: 'rotate(0deg)', position: 'absolute', top: '38vw', left: `${55+props.id*5}vw`}} src={keylink} alt='carabiner example'/>
            </Link>
        </div>
    )
}
