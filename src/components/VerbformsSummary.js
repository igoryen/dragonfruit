import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectVerbforms from '../selectors/verbforms'
import selectVerbformsTotal from '../selectors/verbforms-total'

export const VerbformsSummary = ({ verbformCount, verbformsTotal }) => {
    const verbformWord = verbformCount === 1 ? 'verbform' : 'verbforms'

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{verbformCount}</span> {verbformWord}</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/add-verb" autoFocus>Add Verb</Link>
                </div>
            </div>
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
