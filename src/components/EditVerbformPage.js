import React from 'react'
import { connect } from 'react-redux'
import VerbformForm from './VerbformForm'
import { editVerbform, removeVerbform } from '../actions/verbforms'

const EditVerbformPage = (props) => {

    return (
        <div>
            <VerbformForm
                verbform={props.verbform}
                onSubmit={(verbform) => {
                    props.dispatch( editVerbform(props.verbform.id, verbform) )
                    props.history.push('/')
                    console.log('updated', verbform)
                }}
            />
            <button onClick={() => {
                props.dispatch( removeVerbform({ id: props.verbform.id }) )
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        verbform: state.verbforms.find( (verbform) => verbform.id === props.match.params.id )
    }
}

export default connect(mapStateToProps)(EditVerbformPage)
