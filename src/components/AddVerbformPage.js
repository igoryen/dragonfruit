import React from 'react'
import VerbformForm from './VerbformForm'
import { connect } from 'react-redux'
import { addVerbform } from '../actions/verbforms'

const AddVerbformPage = (props) => {
    console.log()
    return (
        <div>
            <h3>Add a Spanish verb</h3>
            <VerbformForm
                onSubmit={ ( verbform ) => {
                    props.dispatch( addVerbform( verbform ) )
                    props.history.push('/')
                } }
            />
        </div>
    )
}

export default connect()(AddVerbformPage);
