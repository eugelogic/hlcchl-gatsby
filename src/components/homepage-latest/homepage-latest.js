import React from 'react'
import './homepage-latest.scss'
import GalleryImg from '../gallery-img/gallery-img'

const HomepageLatest = () => (
  <div className="homepage-latest">

    <h3>LATEST ANNOUNCEMENTS:</h3>

    <h4>CORONAVIRUS</h4>

    <div className="copy">

      <p>All our normal activities have been shut down according to Government guidelines. There will be no Monday and Friday lunches, film club or classes until the Government says it is safe to lift restrictions.</p>

      <p><strong>Instead, your Community Centre is directing all its efforts into supporting the vulnerable on the Holly Lodge Estate.  We are working closely with the Holly Lodge Residents Association (HLRA), Holly Lodge Estate (HLE) and Highgate Newtown Community Centre (HNCC).</strong></p>

    <h4>OUR RESPONSE</h4>

    <ul>

    <li>HLRA has set up a “Block Rep” system where all 32 blocks of flats have at least one volunteer to check on and help vulnerable residents. HLE has set up a similar scheme for the houses – “Street Supporters”. These volunteers will make themselves known to you but you can find who your Block Rep is at <a href="mailto:hollylodgera@gmail.com">hollylodgera@gmail.com</a>  and who your Street Supporter is at <a href="mailto:manager@hle.org.uk">manager@hle.org.uk</a></li>

    <li>We are a food hub for HNCC’s food parcel service, which provides fresh fruit and veg and other essentials to families and individuals facing hardship on our Estate. Our Block Reps and Street Supporters are ordering and home-delivering these vital, nutritious food parcels. HNCC also provides a meals-on-wheels service.</li>

    <li>To access these services, please contact your Block Rep or Street Supporter or ring direct to HNCC on <a href="tel:07551798767">07551 798767</a> or <a href="tel:07748091604">07748 091604</a></li>

    <li>Alternatively <a href="https://forms.gle/LLarim5hZhwYQP1y6" target="_blank" rel="noopener noreferrer">order online.</a></li>

    <li>The food parcels are for those in need, so if you can afford it please ask your Block Rep or Street Supporter to shop for essentials and pick up prescriptions for you. There is a Coronavirus Fund that can be accessed through our manager, Mike Towers, at the community centre. This is a loan for residents who may be unable to access their money due to self-isolating. Please don’t hesitate to ask.</li>

    <li>The Community Centre is also the central donation point for non-perishable food and other essential items (dried food, tins, hand sanitisers, loo rolls etc.) These are delivered to HNCC’s food bank and made up into the food parcels distributed to Holly Lodge Estate and the wider Highgate area. The bright yellow bin is outside the Centre, at <a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target="_blank" rel="noopener noreferrer">30 Makepeace Avenue N6 6HL</a>.</li>

    </ul>

    <figure>
      <GalleryImg src={`HLCCHL-food-donation-box.jpg`} />
    </figure>

    <h4>PLEASE DONATE TO OUR CHARITABLE WORK!</h4>

    <p>We are doing everything we can in this crisis, but it all costs money, especially the fresh fruit and veg in the food parcels.  Also, we need to buy our volunteers gloves, masks and sanitisers - the protection they need to keep themselves safe.</p>

    <p>Our income from lunch clubs, music and art lessons, fitness classes and more is now zero. When this crisis is over, we will need to re-establish the services which were so valued by our community. Thinking and planning for the future helps us through the present crisis. Please join us in helping our beautiful Holly Lodge Estate!</p>

    <p className="centre-aligned"><a href="https://uk.virginmoneygiving.com/charity-web/charity/finalCharityHomepage.action?charityId=1017542&pageId=1155738" target="_blank" rel="noopener noreferrer">Please donate on our Virgin Moneygiving page.</a></p>

    <p className="centre-aligned">We are grateful for anything you are able to give.</p>

    <h4>THANK YOU</h4>

    <hr />

    <p>The HLCCHL is a Tenants and Residents Hall, associated with the HLRA, but still registered as Holly Lodge Community Centre. <a href="https://myhlra.org/" target="_blank" rel="noopener noreferrer">Visit the Holly Lodge Residents Association’s website.</a></p>

    <hr />

    <p>Also, Suzuki violin lessons – after school Mondays, Tuesdays and Thursdays. For further information please <a href="http://www.bluebirdsuzuki.com/" target="_blank" rel="noopener noreferrer">see Miks’ website: bluebirdsuzuki.com.</a></p>

    <hr />

    <p>Support our charity organization by starting your shopping at <a href="https://smile.amazon.co.uk/ch/293003-0" target="_blank" rel="noopener noreferrer">smile.amazon.com</a>. Amazon donates 0.5% of the price of your eligible AmazonSmile purchases to us. AmazonSmile is the same Amazon you know. Same products, same prices, same service.</p>

    </div>

  </div>
)

export default HomepageLatest
