import React from 'react'
import moment from 'moment'

export default class VerbformForm extends React.Component {

    state = {
        spa: '',
        rus: '',
        createdAt: moment()
    }

    onSpaChange = (e) => {
        const spa = e.target.value
        if( !spa || spa.match(/^[A-Za-záéíóúýÁÉÍÓÚÝñÑüÜ -]+$/)) {
            this.setState( () => ({ spa }) )
        }
    }
    onRusChange = (e) => {
        const rus = e.target.value
        if( !rus || rus.match(/^[А-Яа-яёЁ -]+$/)) {
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
            console.log('submitted and saved with date ' + this.props.createdAt) // .format('YYYY-MM-DD (dd) hh:mm:ss')
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Spanish verb-form"
                        autoFocus
                        value={this.state.spa}
                        onChange={this.onSpaChange}
                    />
                    <input
                        type="text"
                        placeholder="Russian verb-form"
                        value={this.state.rus}
                        onChange={this.onRusChange}
                    />
                    <button>Add verb-form</button>
                </form>
            </div>
        )
    }
}