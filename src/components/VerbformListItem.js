import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const VerbformListItem = ( { id, spa, rus, createdAt } ) => (
    <Link className="list-item" to={`/edit-verb/${id}`}>
        <div>
            <span className="list-item__lang1">{rus}</span> - <span className="list-item__lang2">{spa}</span>
        </div>
        <span className="list-item__created-at">{moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
    </Link>
)

export default VerbformListItem