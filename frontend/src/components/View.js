import React from 'react'
import keylink from '../key_link.png'

export default function View() {
    return (
        <div style={{position: 'relative'}}>
            <h1 style={{fontWeight: 'normal', fontSize: '3em'}}>View</h1>
            <img className='' style={{width: '300px', height: '300px', transform: 'rotate(90deg)', position: 'absolute', top: '0px', left: '40vw'}} src={keylink} alt='carabiner example'/>        
            
            <div className='' style={{width: '100px', height: '100px', transform: 'rotate(0deg)', position: 'absolute', top: '250px', left: '40vw'}}>
                <p>Website</p>
                <p>Pass</p>
            </div>
        </div>
    )
}
