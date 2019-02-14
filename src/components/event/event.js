import React from 'react'
import './event.scss'

const Event = ({ bg, timeStart, timeEnd, title, cost, venue, venueLink, children }) => (
    <article className={`event__${bg}`}>
        <div>
            <time datetime={timeStart}>{timeStart}</time> - <time datetime={timeEnd}>{timeEnd}</time>
        </div>
        <div className="event__title">
            <h2>{title}</h2>
        </div>
        <div>
            <p>Cost: {cost}</p>
        </div>
        <div className="event__location">
            <p>Venue: {venue} - [<a href={venueLink} target='_blank' rel='noopener noreferrer'>see on the map</a>]</p>
        </div>
        <div className="event__description">
            {children}
        </div>
    </article>
)

export default Event
