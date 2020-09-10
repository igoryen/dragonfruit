import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => (
    <header>
        <h1>Spanish verb forms</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/add-verb" >Add verb Form</NavLink>
        <NavLink activeClassName="is-active" to="/edit-verb" >Edit verb Form</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header)

