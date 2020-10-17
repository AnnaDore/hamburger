import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Im a {props.name} and im {props.age} yo</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} placeholder={props.name} />
        </div>
    )
}

export default person



