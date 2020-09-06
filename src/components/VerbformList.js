import React from 'react'
import { connect } from 'react-redux'
import VerbformListItem from './VerbformListItem'

const VerbformList = (props) => (
    <div>
        <h1>List of verb-forms</h1>
        {
            props.verbforms.map( (verbform) => {
                return <VerbformListItem key={verbform.id} {...verbform} />
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        verbforms: state.verbforms,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(VerbformList)