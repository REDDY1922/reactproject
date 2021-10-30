import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'Reddy',
        lastName:'Deredla'
    }
    return (
        <div>
            <h1>UnionBank</h1>
        <AndhraBank info={data}/>
        <CorporationBank info={data}/>
            
        </div>
    )
}


