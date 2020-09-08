import React from 'react'
import VerbformForm from './VerbformForm'
import { connect } from 'react-redux'
import { startAddVerbform } from '../actions/verbforms'

export class AddVerbformPage extends React.Component {
    onSubmit = (verbform) => {
        this.props.startAddVerbform( verbform )
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h3>Add a Spanish verb</h3>
                <VerbformForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddVerbform: (verbform) => dispatch(startAddVerbform(verbform))
})

export default connect(undefined, mapDispatchToProps)(AddVerbformPage);
