import React from 'react'
import { Link } from 'react-router-dom'

export class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h3>404! <Link to="/">Go home</Link></h3>
            </div>
        )
    }
}