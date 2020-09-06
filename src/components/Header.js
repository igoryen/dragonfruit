import React from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Spanish verb forms</h1>
                <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
                <NavLink activeClassName="is-active" to="/add-verb" >Add verb Form</NavLink>
                <NavLink activeClassName="is-active" to="/edit-verb" >Edit verb Form</NavLink>                
            </div>
        )
    }
}