import React from 'react'
import './events.scss'

const Event = ({ bg, timeStart, timeEnd, title, cost, venue, venueLink, children }) => (
    <article className={bg}>
        <div className="event-time">
            <time datetime={timeStart}>{timeStart}</time> - <time datetime={timeEnd}>{timeEnd}</time>
        </div>
        <div className="event-title">
            <h2>{title}</h2>
        </div>
        <div className="single-event__price">
            <p>Cost: {cost}</p>
        </div>
        <div className="single-event__location">
            <p>Venue: {venue} - [<a href={venueLink} target='_blank' rel='noopener noreferrer'>see on the map</a>]</p>
        </div>
        <div className="event-description">
            {children}
        </div>
    </article>
)

export default Event
