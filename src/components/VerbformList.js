import React from 'react'
import { connect } from 'react-redux'
import VerbformListItem from './VerbformListItem'
import selectVerbforms from '../selectors/verbforms'

export class VerbformList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            todosPerPage: 10,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }
    render() {
        const {
            currentPage,
            todosPerPage,
        } = this.state

        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(this.props.verbforms.length / 10); i++) {
            pageNumbers.push(i)
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            )
        })

        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="show-for-mobile">RUS - SPA</div>
                </div>
                <div className="list-body list-body__paginated">
                    {
                        this.props.verbforms.slice((currentPage * todosPerPage) - todosPerPage, (currentPage * todosPerPage)).map((verbform) => {
                            return <VerbformListItem key={verbform.id} {...verbform} />
                        })
                    }
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
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
