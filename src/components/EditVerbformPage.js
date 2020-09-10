import React from 'react'
import { connect } from 'react-redux'
import VerbformForm from './VerbformForm'
import { startEditVerbform, startRemoveVerbform } from '../actions/verbforms'

export class EditVerbformPage extends React.Component{

    onSubmit = (verbform) => {
        this.props.startEditVerbform(this.props.verbform.id, verbform)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.startRemoveVerbform({id: this.props.verbform.id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit verbform</h1>
                    </div>
                </div>
                <div className="content-container">
                    <VerbformForm
                        verbform={this.props.verbform}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        verbform: state.verbforms.find( (verbform) => verbform.id === props.match.params.id )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditVerbform: (id, verbform) => dispatch(startEditVerbform(id, verbform)),
    startRemoveVerbform: (data) => dispatch(startRemoveVerbform(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditVerbformPage)
