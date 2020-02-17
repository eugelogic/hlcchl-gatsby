import React from 'react'

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const FilmClubPage = () => (
  <LayoutPage pageTitle="Film Club">
    <SEO title="Film Club" />
    <p>Here's a comprehensive list of all the films shown at the Community Centre.</p>
    <p>Don't forget it's <strong>free of charge</strong>, all welcome.</p>
    <p>Email <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail</a> for more information.</p>
    <small>All films shown on Fridays unless otherwise stated.</small>
    <hr />
    <h2>Upcoming dates</h2>
    <p><strong>20th March @ 14:00</strong></p>
    <p>"The Heiress" starring Olivia de Havilland.</p>
    <p><strong>6th March @ 14:00</strong></p>
    <p>"Fiddler on the Roof" starring Topol.</p>
    <p><strong>21st February @ 14:00</strong></p>
    <p>"Catch Me If You Can" starring Leonardo DiCaprio and Tom Hanks.</p>
    <hr />
    <h2>Past viewings</h2>
    <p>This is what you've missed on but do not despair some movies will come back.</p>
    <ul>
      <li>"Cinema Paradiso" starring Philippe Noiret.</li>
      <li>"High Society" starring Bing Crosby, Grace Kelly and Frank Sinatra.</li>
      <li>"It's A Wonderful Life" starring James Stewart.</li>
      <li>"12 Angry Men" starring Henry Fonda.</li>
      <li>"An American In Paris" starring Gene Kelly and Leslie Caron.</li>
      <li>"The Untouchables" starring Kevin Costner and Sean Connery.</li>
      <li>"Phantom Thread" starring Daniel Day-Lewis.</li>
      <li>"La Vie En Rose" starring Marion Cotillard.</li>
      <li>"Saps At Sea and 'Music' Shorts" with Laurel & Hardy.</li>
      <li>"I'm All Right Jack" starring Peter Sellers and Ian Carmichael.</li>
      <li>"The Quiet Man" starring John Wayne and Maureen O'Hara.</li>
      <li>“Guys and Dolls” starring Marlon Brando and Jean Simmons.</li>
      <li>“How Green Was My Valley” starring Walter Pidgeon and Maureen O'Hara.</li>
      <li>“To Kill a Mockingbird” starring Gregory Peck.</li>
      <li>“Gentleman’s Agreement” starring Gregory Peck.</li>
      <li>“Funny Face” to complete Audrey Hepburn season.</li>
      <li>“Sabrina” with Audrey Hepburn and Humphrey Bogart.</li>
    </ul>
  </LayoutPage>
)

export default FilmClubPage
