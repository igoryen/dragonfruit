import React from 'react'
import { connect } from 'react-redux'
// import VerbformListItem from './VerbformListItem'

const VerbformList = (props) => (
    <div>
        <h1>List of verb-forms</h1>
        {props.verbforms.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        verbforms: state.verbforms
    }
}

export default connect(mapStateToProps)(VerbformList)