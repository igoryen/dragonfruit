import React from 'react'

const EditVerbformPage = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Edit Spanish Verb</h3>
            <div>Editing SVF with ID of {props.match.params.id}</div>
        </div>
    )
}

export default EditVerbformPage