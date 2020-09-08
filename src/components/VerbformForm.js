import React from 'react'

export default class VerbformForm extends React.Component {

    state = {
        spa: '',
        rus: ''
    }

    onSpaChange = (e) => {
        const spa = e.target.value
        this.setState( () => ({ spa }) )
    }
    onRusChange = (e) => {
        const rus = e.target.value
        this.setState( () => ({ rus }) )
    }

    render() {
        return (
            <div>
                <form>
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