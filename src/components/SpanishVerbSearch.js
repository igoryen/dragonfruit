import React from 'react';
import VerbformList from './VerbformList';
import VerbformListFilters from './VerbformListFilters';


export class SpanishVerbSearch extends React.Component {
    render() {
        return (
            <div>
                <VerbformListFilters />
                <VerbformList />
            </div>
        )
    }
}


export default SpanishVerbSearch;