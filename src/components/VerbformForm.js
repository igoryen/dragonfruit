import React from 'react'
import moment from 'moment'

export default class VerbformForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            spa: props.verbform ? props.verbform.spa : '',
            rus: props.verbform ? props.verbform.rus : '',
            createdAt: props.verbform ? moment(props.verbform.createdAt) : moment()
        }
    }

    onSpaChange = (e) => {
        const spa = e.target.value
        if( !spa || spa.match(/^[A-Za-záéíóúýÁÉÍÓÚÝñÑüÜ -.,;]+$/)) {
            this.setState( () => ({ spa }) )
        }
    }
    onRusChange = (e) => {
        const rus = e.target.value
        if( !rus || rus.match(/^[А-Яа-яёЁ -.,;]+$/)) {
            this.setState( () => ({ rus }) )
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.spa || !this.state.rus) {
            this.setState( () => ({ error: 'Please provide both Spa and Rus.' }) )
        } else {
            this.setState( () => ({ error: '' }) )
            this.props.onSubmit({
                spa: this.state.spa,
                rus: this.state.rus,
                createdAt: this.state.createdAt.valueOf()
            })
            // console.log('submitted and saved with date ' + this.props.createdAt.value) // .format('YYYY-MM-DD (dd) hh:mm:ss')
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Russian verb-form"
                    autoFocus
                    className="text-input"
                    value={this.state.rus}
                    onChange={this.onRusChange}
                />
                <input
                    type="text"
                    placeholder="Spanish verb-form"
                    className="text-input"
                    value={this.state.spa}
                    onChange={this.onSpaChange}
                />
                <button className="button">Add verb-form</button>
            </form>
        )
    }
}