import React from 'react'
import { connect } from 'react-redux'
// import VerbformListItem from './VerbformListItem'

const VerbformList = (props) => (
    <div>
        <h1>List of verb-forms</h1>
        {props.name}
    </div>
)

const ConnectedVerbformList = connect( (state) => {
    return {
        name: 'Igor'
    }
} )(VerbformList)

export default ConnectedVerbformList