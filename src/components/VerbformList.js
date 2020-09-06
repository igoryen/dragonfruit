import React from 'react'
import { connect } from 'react-redux'

const VerbformList = (props) => (
    <div>
        <h1>List of verb-forms</h1>
        {props.filters.text} | {props.verbforms.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        verbforms: state.verbforms,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(VerbformList)