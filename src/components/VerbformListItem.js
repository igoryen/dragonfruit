import React from 'react'

const VerbformListItem = ( { id, spa, rus } ) => (
    <div>
        <span>{rus}</span> - <span>{spa}</span>
    </div>
)

export default VerbformListItem