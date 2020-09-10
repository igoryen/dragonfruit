import React from 'react'
import { connect } from 'react-redux'
import VerbformListItem from './VerbformListItem'
import selectVerbforms from '../selectors/verbforms'

const VerbformList = (props) => (
    <div>
        <h1>List of verb-forms</h1>
        {
            props.verbforms.slice(0,15).map( (verbform) => {
                return <VerbformListItem key={verbform.id} {...verbform} />
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        verbforms: selectVerbforms(state.verbforms, state.filters)
    }
}

export default connect(mapStateToProps)(VerbformList)