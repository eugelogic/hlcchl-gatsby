import React from 'react'
import { Link } from 'gatsby'
import '../style.css'
import './events.scss'

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
                    <div className="single-event__price">
                        <p>Cost: £3.50</p>
                    </div>
                    <div className="single-event__location">
                        <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                    </div>
                    <div className="event-description">
                        <p>A freshly cooked three course meal with tea or coffee.</p>
                        <p>Games available too. All welcome.</p>
                        <p>Every Monday except Bank holidays.</p>
                        <p>For more information call us on <a href="tel:02083429524">0208 342 9524</a> or email us at <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a></p>
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
                <div className="single-event__price">
                    <p>Cost: free</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>Judo with Roland. Protect yourself, get fit and have fun.</p>
                    <p>Email <a href="mailto:Roland.White@blueyonder.co.uk">Roland.White@blueyonder.co.uk</a> for extra information.</p>
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
                <div className="single-event__price">
                    <p>Cost: free</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>Class with Laura Holland specifically for cancer recoverers and survivors.</p>
                    <p>Call <a href="tel:07393149888">07393 149888</a> for more information.</p>
                </div>
            </div>
            <div className="event-day__entry-even">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">16:00</time> - <time datetime="2000-01-11T13:00:00">18:00</time>
                </div>
                <div className="event-title">
                    <h5>Kidsart – classes for children</h5>
                </div>
                <div className="single-event__price">
                    <p>Cost: free</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>A chance for kids to be creative and to learn some art appreciation.</p>
                    <p>For more information call <a href="tel:07827275821">07827 275821.</a></p>
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
                <div className="single-event__price">
                    <p>Cost: free</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>Gentle yoga suitable for all levels of ability.</p>
                    <p>Call Ad on <a href="tel:07949408036">07949 408036</a>, or email <a href="mailto:ajdekoning@tiscali.co.uk">ajdekoning@tiscali.co.uk</a></p>
                </div>
            </div>
            <div className="event-day__entry-even">
                <div className="event-time">
                    <time datetime="2000-01-11T13:00:00">19:15</time> - <time datetime="2000-01-11T13:00:00">20:30</time>
                </div>
                <div className="event-title">
                    <h5>Yoga with Annie Rigby</h5>
                </div>
                <div className="single-event__price">
                    <p>Cost: free</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>Contact Annie on <a href="tel:07971921029">07971 921029</a>, email her at <a href="mailto:annierigby@blueyonder.co.uk">annierigby@blueyonder.co.uk</a> or visit the website <a href="https://yogayo.weebly.com/" target="_blank" rel="noopener noreferrer">yogayo.weebly.com</a></p>
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
                <div className="single-event__price">
                    <p>Cost: £3.00</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Highgate Newtown Community Centre - [<a href="https://www.google.com/maps/place/Highgate+Newtown+Community+Centre/@51.5627592,-0.1432108,15z/data=!4m5!3m4!1s0x0:0x578a7378e932e530!8m2!3d51.5627592!4d-0.1432108" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>Come over to enjoy a 2 courses fish meal.</p>
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
                <div className="single-event__price">
                    <p>Cost: £10 per session or £8 if signing up for 10 sessions.</p>
                </div>
                <div className="single-event__location">
                    <p>Venue: The Holly Lodge Community Centre - [<a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">see on the map</a>]</p>
                </div>
                <div className="event-description">
                    <p>Keep fit and have fun with Zumba! All welcome, all ages and abilities.</p>
                    <p>Email <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a> or see posters for details.</p>
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
