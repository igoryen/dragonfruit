import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByRussian, sortBySpanish, sortByCreatedAt } from '../actions/filters'

const VerbformListFilters = (props) => (
    <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <input
                    type="text"
                    value={props.filters.text}
                    onChange={ (e) => {
                        props.dispatch( setTextFilter(e.target.value) )
                    }}
                />
            </div>
            <div className="input-group__item">
                <select
                    value={props.filters.sortBy}
                    onChange={ (e) => {
                        if (e.target.value === 'rus') {
                            props.dispatch( sortByRussian() )
                        } else if (e.target.value === 'spa') {
                            props.dispatch( sortBySpanish() )
                        }
                        else if (e.target.value === 'createdAt') {
                            props.dispatch( sortByCreatedAt() )
                        }
                    }}
                >
                    <option value="createdAt">createdAt</option>
                    <option value="rus">Russian</option>
                    <option value="spa">Spanish</option>
                </select>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(VerbformListFilters)
