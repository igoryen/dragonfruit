import React from 'react'
import { connect } from 'react-redux'

const EditVerbformPage = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Edit Spanish Verb</h3>
            <div>Editing verb-form with ID of {props.match.params.id}</div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        verbform: state.verbforms.find( (verbform) => verbform.id === props.match.params.id )
    }
}

export default connect(mapStateToProps)(EditVerbformPage)
