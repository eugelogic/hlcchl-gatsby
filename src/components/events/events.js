import React from 'react'
import { Link } from 'gatsby'
import './events.scss'
import Button from '../button/button'

const Events = () => (
  <div className="events">

    <div className="events__entry-msg">
    <p>Come along and take part in one of our events,</p>
    <p>or <Link to="/contact-us">book an empty slot</Link> if you want to <Link to="/contact-us">hire the hall</Link> or <Link to="/contact-us">run your own class.</Link></p>
    </div>

    <h3>Weekly events:</h3>

    <div className="events__table">

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Mondays</h4>
            </div>
                <div className="event-day__entry-odd">
                    <div className="event-time">
                        <time datetime="2000-01-11T13:00:00">12:15</time> - <time datetime="2000-01-11T13:00:00">14:00</time>
                    </div>
                    <div className="event-title">
                        <h5>The Monday Lunch</h5>
                    </div>
                    <div className="event-description">
                        <p>A freshly cooked three course meal with tea or coffee for £3.50. Games available too: all welcome. Every Monday except Bank holidays.</p>
                    </div>
                    <div className="event-button">
                        <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                    </div>
                </div>
        </div>{/* end of event day */}

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Tuesdays</h4>
            </div>
            <div className="event-day__entry-odd">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">19:00</time> - <time datetime="2000-01-11T13:00:00">20:00</time>
                </div>
                <div className="event-title">
                    <h5>Judo</h5>
                </div>
                <div className="event-description">
                    <p>Judo with Roland. Protect yourself, get fit and have fun. Email <a href="mailto:Roland.White@blueyonder.co.uk">Roland.White@blueyonder.co.uk</a></p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
        </div>{/* end of event day */}

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Wednesdays</h4>
            </div>
            <div className="event-day__entry-odd">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">10:00</time> - <time datetime="2000-01-11T13:00:00">11:00</time>
                </div>
                <div className="event-title">
                    <h5>Pilates</h5>
                </div>
                <div className="event-description">
                    <p>Pilates with Laura Holland. Class specifically for cancer recoverers and survivors. Call <a href="tel:07393149888">07393 149888</a>.</p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
            <div className="event-day__entry-even">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">16:00</time> - <time datetime="2000-01-11T13:00:00">18:00</time>
                </div>
                <div className="event-title">
                    <h5>Kidsart – classes for children</h5>
                </div>
                <div className="event-description">
                    <p>A chance for kids to be creative and to learn some art appreciation. For more information call <a href="07827275821">07827 275821.</a></p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
        </div>{/* end of event day */}

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Thursdays</h4>
            </div>
            <div className="event-day__entry-odd">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">14:00</time> - <time datetime="2000-01-11T13:00:00">15:00</time>
                </div>
                <div className="event-title">
                    <h5>Yoga with Ad de Koning</h5>
                </div>
                <div className="event-description">
                    <p>Gentle yoga suitable for all levels of ability. Call Ad on <a href="tel:07949408036">07949 408036</a>, or email <a href="mailto:ajdekoning@tiscali.co.uk">ajdekoning@tiscali.co.uk</a></p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
            <div className="event-day__entry-even">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">19:15</time> - <time datetime="2000-01-11T13:00:00">20:30</time>
                </div>
                <div className="event-title">
                    <h5>Yoga with Annie Rigby</h5>
                </div>
                <div className="event-description">
                    <p>Contact Annie on <a href="tel07971921029">07971 921029</a>, email her at <a href="mailto:annierigby@blueyonder.co.uk">annierigby@blueyonder.co.uk</a> or visit the website <a href="https://yogayo.weebly.com/" target="_blank" rel="noopener noreferrer">yogayo.weebly.com</a></p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
        </div>{/* end of event day */}

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Fridays</h4>
            </div>
            <div className="event-day__entry-odd">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">12:00</time> - <time datetime="2000-01-11T13:00:00">13:30</time>
                </div>
                <div className="event-title">
                    <h5>The Friday Lunch</h5>
                </div>
                <div className="event-description">
                    <p>Hosted by Highgate Newtown. £3.00 for a fish meal - 2 courses.</p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
        </div>{/* end of event day */}

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Saturdays</h4>
            </div>
            <div className="event-day__entry-odd">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">09:30</time> - <time datetime="2000-01-11T13:00:00">10:30</time>
                </div>
                <div className="event-title">
                    <h5>Zum Dance</h5>
                </div>
                <div className="event-description">
                    <p>Keep fit and have fun with Zumba! All welcome, all ages and abilities. Email <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a> or see posters for details. £10 per session or £8 if signing up for 10 sessions.</p>
                </div>
                <div className="event-button">
                    <Button btnLink="/the-monday-lunch/" btnStyle="green green--sm" btnText="Learn more"/>
                </div>
            </div>
        </div>{/* end of event day */}

        <div className="event-day">
            <div className="event-day__heading">
                <h4>Sundays</h4>
            </div>
            <div className="event-day__entry-odd">
                <div className="event-description">
                    <p>NO EVENTS SCHEDULED</p>
                    <p>Contact us if you would like to <Link to="/contact-us">run your own class.</Link></p>
                </div>
            </div>
        </div>{/* end of event day */}

    </div>{/* end of events table */}

    <div className="events__specials">
        <h3>Special events:</h3>
        <p>Next AGM not schedule yet, please check back again soon for details.</p>
    </div>

  </div>
)

export default Events
