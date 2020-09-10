import React from 'react';
import VerbformList from './VerbformList';
import VerbformListFilters from './VerbformListFilters';
import VerbformsSummary from './VerbformsSummary'

export class SpanishVerbSearch extends React.Component {
    render() {
        return (
            <div>
                <VerbformsSummary />
                <VerbformListFilters />
                <VerbformList />
            </div>
        )
    }
}


export default SpanishVerbSearch;