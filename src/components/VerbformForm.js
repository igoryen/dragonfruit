import React from 'react'

export default class VerbformForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Spanish verb-form"
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Russian verb-form"
                    />
                    <button>Add verb-form</button>
                </form>
            </div>
        )
    }
}