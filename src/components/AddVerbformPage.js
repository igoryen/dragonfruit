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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add a Spanish verb</h1>
                </div>
                <div className="content-container">
                    <VerbformForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddVerbform: (verbform) => dispatch(startAddVerbform(verbform))
})

export default connect(undefined, mapDispatchToProps)(AddVerbformPage);
