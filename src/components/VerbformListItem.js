import React from 'react'

const VerbformListItem = ( { id, spa, rus } ) => (
    <div>
        <span>{spa}</span> - <spa>{rus}</spa>
    </div>
)

export default VerbformListItem