import React, {  useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import ResponsiveIframe from '../../Components/ResponsiveIframe';
import '../ExampleTutorial.css';


const BonBon1A = `${process.env.PUBLIC_URL}/Images/BonBon1A.png`;
const BonBon2 = `${process.env.PUBLIC_URL}/Images/BonBon2.png`;
const BonBon3 = `${process.env.PUBLIC_URL}/Images/BonBon3.png`;
const Signature = `${process.env.PUBLIC_URL}/Images/Signature.png`;


const Card = ({ blogContent }) => {
    return (
      <div>   <div><TextReveal text = "BONBON // VIKTOR & ROLF"/></div>
      <div className="card" style={{ maxWidth: '100%' ,  display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
          
          <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
      </div></div>
    );
};

const BonBonReview = () => {

    const websiteId = "10910"; 
    const blogRef = useRef(null);
  


    const blogContent = (
      <div className="container" style={{ textAlign:'left' , maxWidth: '100%', margin: '20em' }}>
   
   <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', marginTop: '1em', lineHeight: '1.5rem', marginBottom: '2.5em', color: 'black', textDecoration: 'none' }}>
    BEAUTY // REVIEWS // FRAGRANCES
  </a>

<div>    <img src= {BonBon1A} alt = 'b1' style={{marginTop:'2.4em' , justifyContent: 'center',width:'100%'}}></img></div>
<div>    <img src= {BonBon2} alt = 'b1' style={{maxBlockSize:'800px', justifyContent:'center', width:'100%'}}></img></div>

   

<div
style = {{
  margin : '5em',
}}
>




<p style={{ fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
🍑 Background Information
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
            

<span style={{ color: '#745B4F' , float: 'left', fontSize: '5rem', lineHeight: '0.9', marginRight: '0.05em', marginTop: '0.01em' }}>B</span>onbon
 is a celebration of self-indulgence, a fragrant ode to the joy of
savouring life's sweet moments. Its timeless appeal beckons one to a world
of pure, unadulterated pleasure.
</p>

<p style={{ fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
🍬 Fragrance Profile
</p>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth: '100%', marginLeft: '0em' }}>
  <div style={{ marginBottom: '0.7rem' }}>
    <strong>Concentration:</strong> Eau de Parfum
  </div>
  <div style={{ marginBottom: '0.7rem' }}>
        <strong>Fragrance Family:</strong> Floral Fruity Gourmand
  </div>
  <div style={{ marginBottom: '0.7rem' }}>
        <strong>Top Notes:</strong> Mandarin, Orange, Peach
  </div>
  <div style={{ marginBottom: '0.7rem' }}>
        <strong>Heart/Middle Notes:</strong> Caramel, Jasmine, Orange blossom
  </div>
  <div style={{ marginBottom: '0.7rem' }}>
        <strong>Base Notes:</strong> Amber, Guaïac wood, Cedarwood, Sandalwood
  </div>
</div>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
Overall Scent Profile: A luscious peach opening gives way to a heart
overflowing with caramel's sweet embrace, tempered by delicate floral
whispers. The base, a comforting blend of warm woods, anchors the
fragrance in sophistication.
</p>

<p style={{ fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
🎀 Personal First Impressions:
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
My first brush with Bonbon took place in a Nordstrom back in 2015. Before
that moment, the realm of high-end perfumes was uncharted territory for
me. Yet, as I passed by the counter, the luxurious packaging caught my eye—
a whimsically wrapped candy in deep magenta hues, cradled in an equally
charming pink and black box. It was love at first sight!
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
Upon the first whiff of Bonbon's sweet, sophisticated aroma, I was
hooked. This eau de parfum is described as a gourmand fragrance with
notes of Peach, Caramel, and Amber. I eagerly picked up a bottle, and the
staff sent me on my way with a bag filled with tissue paper lightly spritzed
with the fragrance. Walking through the mall that day, the number of
compliments I received was unparalleled 🎀 🍬
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
As a young adult at the time with a fondness for sweet, playful scents, I
steered away from body sprays and anything too fruity. I’ve always been
drawn to fragrances that lay on a foundation of sandalwood as they feel
warm, woody, and inviting alongside the sweetness. This is why Bonbon was
the perfect, first-luxury perfume buy that I’d recommend for teens or young
adults who love a mature, but sweet scent.
</p>



<a href='https://www.sephora.com/ca/en/product/bonbon-P397836?om_mmc=aff-linkshare-redirect-8yaPBDQV8ls&c3ch=Linkshare&c3nid=8yaPBDQV8ls&affid=8yaPBDQV8ls-lULgeczx0VBmRu1SgSBcPA&ranEAID=8yaPBDQV8ls&ranMID=2417&ranSiteID=8yaPBDQV8ls-lULgeczx0VBmRu1SgSBcPA&ranLinkID=10-1&browserdefault=true&skuId=1619972' style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={BonBon3} alt='b1' style={{ width: '50%', height: 'auto' }} />
</a>


    <p style={{ fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
💗 Review & Recommendations
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

Longevity:


 A commendable 6 to 8 hours on the skin, though individual
experiences may vary.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>



Sillage:
 

 Its presence is assertive yet not overpowering, leaving a trail of
intrigue.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>



Occasions and Seasonality:



 Ideal for the cooler embrace of autumn and
winter, Bonbon transitions seamlessly from daytime charm to evening
elegance
</p>

<p style={{ fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
⚖ Comparisons
</p>

<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 auto', maxWidth: '100%', marginRight: '1rem' }}>
        <ResponsiveIframe src="https://shopmy.us/collections/embed/516464?noHeader=true" title="Final Touches" />
    </div>
    <div style={{ flex: '0 0 auto', maxWidth: '50%', fontSize: '1.5rem', fontFamily: 'GFS Didot, serif' }}>
        Lovers of sweet gourmands and vanilla will find joy in exploring similar fragrances, like Bianco Latte Giardini Di Toscana, with its own take on caramel. Yet, Bonbon's fruity opening sets it apart, offering a distinctive allure.
    </div>
</div>


<p style={{ fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
📝 Final Thoughts
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

Pros and Cons:



 While its gourmand charm and lasting warmth are
undeniable, those in search of spicier or more subdued scents might look
elsewhere, perhaps to the likes of Legacy of Petra by Penhaligon's for a
woodsy, spicy alternative.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

Value for Money:



 Bonbon is a testament to its craftsmanship, offering a
unique and enduring fragrance that justifies its price tag.
Who Would Enjoy It: A must-try for gourmand fragrance aficionados
seeking a sophisticated twist on sweetness.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

Who Would Enjoy It:
A must-try for gourmand fragrance aficionados
seeking a sophisticated twist on sweetness.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

Bonbon by Viktor & Rolf
  is a masterful creation that offers
more than just a sweet fragrance; it's a statement of indulgence and
pleasure. Its lasting power, unique scent profile, and beautiful packaging
make it a fragrance worth exploring for those drawn to sweet, gourmand
scents.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
Have you tried Viktor & Rolf fragrances? Let me know your thoughts below,
I’d love to hear your experience.
</p>

<div>  <img src= {Signature} alt = 'b1' style={{width:'100%'}}></img></div>





</div></div>
    );

    return (
    
    
  
      
        <div ref={blogRef}>
<Card
            title="Margot Robbie's BARBIE Makeup & DIY ‘90s Roller skate Costume!"
            description="Come on Barbie, Let’s get Glam!"
            blogContent={blogContent}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'center'
            }}
        />
  
      <Comments
website-id={websiteId}
page-id={'BonBon'}
/>
      
      </div>
    );
};

export default BonBonReview;
