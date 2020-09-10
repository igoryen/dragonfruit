import React from 'react'
import { connect } from 'react-redux'
import VerbformListItem from './VerbformListItem'
import selectVerbforms from '../selectors/verbforms'

export class VerbformList extends React.Component {

    render() {
        return (
            <div className="content-container">

                <div className="list-header">
                    <div className="show-for-mobile">SPA</div>
                    <div className="show-for-mobile">RUS</div>
                </div>
                <div className="list-body">
                    {
                        this.props.verbforms.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No verb-forms</span>
                            </div>
                        )
                        : (
                            this.props.verbforms.slice(0, 15).map((verbform) => {
                                return <VerbformListItem key={verbform.id} {...verbform} />
                            })
                        )
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        verbforms: selectVerbforms(state.verbforms, state.filters)
    }
}

export default connect(mapStateToProps)(VerbformList)
