import React from 'react'
import { Link } from 'react-router-dom'

const VerbformListItem = ( { id, spa, rus, createdAt } ) => (
    <div>
        <Link to={`/edit-verb/${id}`}>
            <span>{rus}</span> - <span>{spa}</span>
        </Link>
        <span>{createdAt}</span>
    </div>
)

export default VerbformListItem