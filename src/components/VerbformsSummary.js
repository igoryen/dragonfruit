import React from 'react'
import { connect } from 'react-redux'
import selectVerbforms from '../selectors/verbforms'
import selectVerbformsTotal from '../selectors/verbforms-total'

export const VerbformsSummary = ({ verbformCount, verbformsTotal }) => {
    const verbformWord = verbformCount === 1 ? 'verbform' : 'verbforms'

    return (
        <div>
            <h1>Viewing {verbformCount} {verbformWord}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleVerbforms = selectVerbforms(state.verbforms, state.filters)
    return {
        verbformCount: visibleVerbforms.length,
        verbformsTotal: selectVerbformsTotal(visibleVerbforms)
    }
}

export default connect(mapStateToProps)(VerbformsSummary)
