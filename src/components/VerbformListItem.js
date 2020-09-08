import React from 'react'
import { connect } from 'react-redux'
import { removeVerbform } from '../actions/verbforms'


const VerbformListItem = ( { dispatch, id, spa, rus, createdAt } ) => (
    <div>
        <span>{rus}</span> - <span>{spa}</span>
        <button onClick={ () => {
            dispatch(removeVerbform({id}))
        }}>Remove</button>
        <span>{createdAt}</span>
    </div>
)

export default connect()(VerbformListItem)