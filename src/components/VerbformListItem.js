import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeVerbform } from '../actions/verbforms'


const VerbformListItem = ( { dispatch, id, spa, rus, createdAt } ) => (
    <div>
        <Link to={`/edit-verb/${id}`}>
            <span>{rus}</span> - <span>{spa}</span>
        </Link>
        <button onClick={ () => {
            dispatch(removeVerbform({id}))
        }}>Remove</button>
        <span>{createdAt}</span>
    </div>
)

export default connect()(VerbformListItem)