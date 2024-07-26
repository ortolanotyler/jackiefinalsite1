import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';


const title = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/periodtitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/1.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/2.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/3.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/4.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/5.JPG`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/6.JPG`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/7.JPG`;
const barbie = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/SQUAREMARGOT.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TRENDS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const PeriodDrama = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);
  

  useEffect(() => {
    initGA();
    logPageView('/perioddrama');
}, []);


  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '22px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '500px',
    lineHeight: '1.75',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const blogContent = (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>
      <img src={title} alt="No Makeup-Makeup Spring Edition Title" style={{ width: '100%' }} />
      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

   

      <DropCap text="There's something magical about period dramas—they transport us to different times and places, allowing us to experience the elegance and charm of bygone eras. I love seeing how these shows and filmsinterpret no-makeup makeup and historical hairstyles, often with a modern twist for real-life inspiration. If you enjoyed my previous article on no- makeup makeup spring inspiration, you're going to love this deep dive into period drama styles." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
We'll start with the oldest time period we will cover: <strong> The Tudor era. </strong>
</p>

<h2 style={headingStyle}>Time Period: Tudor Era (1485-1603)</h2>

<p style={paragraphStyle}>
<strong> The Tudor Period </strong>The Tudor period marked the end of the <strong> medieval era </strong>and the beginning of the <strong> English Renaissance. </strong> It was characterized by significant political, social, and religious changes, with the monarchy's power being a central theme. The real story of Lady Jane Grey is beyond tragic—she was a teenager thrust onto the throne as a political pawn in the schemes of powerful nobles. She reigned as queen for just nine days in July 1553 before being deposed by Mary I. Jane was eventually executed in 1554 for treason after refusing to renounce her Protestant faith.
</p>

<h2 style={headingStyle}>My Lady Jane on Prime Video (2024)</h2>



      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.youtube.com/watch?v=1NAwgv09ctY&t=353s" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

      Original Makeup by Tamara Mae Richards-Bloomfield and Hair Design by Monica Montalvo from 'My Lady Jane,' recreation by Jackie Wyers.
            </p>

      <p style={paragraphStyle}>
      The TV series “My Lady Jane” (2024) rewrites Jane’s fate, transforming her from a damsel-in-distress into a heroine who saves herself and her kingdom. This uplifting series has created a modern #TudorCore aesthetic with styling traits of soft, whimsical, and slightly undone hairstyles, reflecting the natural beauty ideal of the time. It was common for women to wear their hair long and loose or in intricate braids, adorned with flowers and ribbons. In the show, Jane’s no-makeup makeup look includes dewy skin, rustic tones like burnt orange on the lids, and deep pink lip stains, emphasizing a natural yet polished appearance as seen in my tutorial with Prime Video <a href ='https://www.youtube.com/shorts/1Z6kTaWnM_o' > here</a> 
      </p>

<h2 style={headingStyle}> Time Period: 18th Century, Golden Age of Piracy (1650-1730)
    </h2>

<p style={paragraphStyle}>
The Golden Age of Piracy was a time of adventure and danger on the high seas, spanning from the late 17th to early 18th centuries. This era was
    marked by infamous pirates like Blackbeard and Anne Bonny, and the bustling port towns where they plied their trade. Fashion from this period was influenced by both practicality and the opulent styles of the European courts, merging functionality with flamboyance.


</p>
   
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>






      <h2 style={headingStyle}>Walt Disney Picture’s Pirates of the Caribbean: The Curse Of The Black Pearl (2003):</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.youtube.com/watch?v=BZ2hu_4_1dE&t=150s" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Daphne Bridgerton - Bridgerton" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup by Ve Neill and Martin Samuel, Hair Design by Martin Samuel from 'Pirates of the Caribbean: The Curse of the Black Pearl,' recreation by Jackie Wyers
            </p>

      <p style={paragraphStyle}>
      "Pirates of the Caribbean”(2003) with its daring adventures and iconic characters, brings to life the romance and peril of this period. Elizabeth
      Swann, portrayed by Keira Knightley, stands out as a symbol of both elegance and strength, embodying the spirit of a young woman who defies societal expectations.
            </p>

            <p style={paragraphStyle}>

            Elizabeth Swann’s hairstyles in the films often feature rolled updos reminiscent of the 18th century. These styles were elegant and functional as seen in <a href = 'https://www.youtube.com/watch?v=BZ2hu_4_1dE&t=150s'> two tutorials </a> I’ve posted on my channel to keep hair out of the way while still looking polished. Her hair often included intricate curls and was sometimes accessorized with hats, reflecting the opulent yet practical nature of the era.
           </p>

            <p style={paragraphStyle}>

            While historical accuracy might lean towards minimal makeup, the films enhance Elizabeth’s adventurous and bold character with a slightly more dramatic look. For a modern interpretation, a deeper eye makeup can add a sultry touch. Try Smoky eyes paired with a natural lip colour to balance the look as seen in my recreation tutorial <a href = 'https://www.youtube.com/watch?v=BZ2hu_4_1dE&t=150s'> here </a>.
                </p>
                <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

      <h2 style={headingStyle}>Time Period: Regency Era (1811-1820)</h2>


      <p style={paragraphStyle}>

The Regency era, spanning from 1811 to 1820, was a period of elegance and refinement in British history, renowned for its distinctive fashion and
beauty trends, heavily influenced by classical antiquity, with a focus on simplicity, grace, and natural beauty.
    </p>
    
    <h2 style={headingStyle}>Universal Pictures' Pride and Prejudice (2005)</h2>

    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.youtube.com/watch?v=1NAwgv09ctY&t=353s                 " target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="Rose Dawson - Titanic" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>


      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup & Hair Design by Fae Hammond from the 2005 film 'Pride and Prejudice,' recreation by Jackie Wyers.     </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
"Pride and Prejudice”(2005) based on the beloved novel by Jane Austen, is a timeless story that captures the social intricacies and romantic entanglements of the Regency period. The novel, published in 1813, follows the intelligent and spirited Elizabeth Bennet as she navigates issues of marriage, morality, and love in the British gentry. Austen's observations of her time provide a rich backdrop for the characters and their interactions.
</p>
<p style={paragraphStyle}>
The styling in "Pride and Prejudice," particularly for Elizabeth Bennet, epitomizes the understated elegance of the Regency era. Hair was often styled in soft, natural curls and undone styles. Her most iconic hairstyle featured little pearls on a string, hung over the curly updo to add interest against her dark, brunette locks maintaining a sense of refinement and grace.
</p>

<p style={paragraphStyle}>
In terms of makeup, the Regency look was characterized by a fresh and natural complexion as all the styles in this period drama makeup master- post. English rose is a good shade to lean towards for a harmonious look on the eyes, lips, and cheeks as seen in my step-by-step <a href = 'https://www.youtube.com/watch?v=1NAwgv09ctY&t=353s' > tutorial. </a>
</p>



      <h2 style={headingStyle}>Netflix's Bridgerton (2020)</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image4} alt="Amy March - Little Women" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup and Hair Design by Marc Pilcher and Erika Ökvist from Bridgerton,' recreation by Jackie Wyers.
        </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
      Still remaining in the Regency Era, this time with a focus on high society; the period was marked by strict social hierarchies and elaborate balls, which are prominently featured in “Bridgerton."      
      </p>
      <p style={paragraphStyle}>

      In the TV series “Bridgerton” (2020), Daphne Bridgerton is crowned “The Diamond of the Season” and wore delicate updos with accessories such as feathers, ribbons, and jewelled pins. There are no shortage of hair accessories on the set! While not necessarily historically accurate, the feel of Daphne’s season 1 and 2 looks are very high society yet youthful, and can easily be worn today. For makeup, her fresh and subtle look consisted of soft peach tones, light blush, and minimal eye makeup. Highlighting and lip liner became more pronounced in later seasons of "Bridgerton," adding a touch of modern glamour for those who prefer a bolder look. Get the elevated Daphne look with the Pat McGrath x Bridgerton Collection <a href = 'https://www.youtube.com/watch?v=IIjMH5bnq8k'> here. </a> 
   </p>



      <h2 style={headingStyle}>Time Period: Late 19th Century, South Pacific Setting</h2>
      <p style={paragraphStyle}>
      The late 19th century was a time of exploration and colonial expansion, with many romanticized tales of untouched tropical paradises. Beauty trends during this period were influenced by the desire for a natural and modest look, often emphasizing a pale complexion and minimal makeup. However, in "The Blue Lagoon”(1980) the setting shifts focus to the natural beauty and simplicity of island life.   
    </p>

    <h2 style={headingStyle}>Columbia Pictures’ The Blue Lagoon (1980)</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.youtube.com/watch?v=yC8Sf9U3Aww&list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB" target="_blank" rel="noopener noreferrer">
          <img src={image5} alt="Rosie Dunne - Love, Rosie" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

      Original Makeup by Barbara Daly and Hair Design by Leonard George from 'The Blue Lagoon,' recreation by Jackie Wyers.
            </p>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <p style={paragraphStyle}>
            "The Blue Lagoon”(1980) set during this time, tells the story of two young
            cousins, Emmeline and Richard, who are marooned on a deserted tropical island. This romantic adventure film, based on the 1908 novel by Henry De Vere Stacpoole, captures the simplicity and natural beauty of island life as the characters grow up, learn to survive, and eventually fall in love, untouched by the outside world. Incest but whatever, they didn’t have a clue ok?!
            </p>
            
            <p style={paragraphStyle}>
            The styling in "The Blue Lagoon," particularly for Brooke Shields’ character, Emmeline, epitomizes the natural and carefree beauty of the island setting. Hair was styled in long, tousled beach waves, capturing the essence of a natural, effortless look. This style is perfect for modern inspiration, and using a sea salt spray can enhance the natural texture of the hair, giving it that sun-kissed, windswept appearance.
            </p>

<p style={paragraphStyle}>
During the late 19th century, popular hairstyles included elaborate updos such as the Gibson Girl look, which featured soft, voluminous hair piled
loosely on top of the head. However, in the context of "The Blue Lagoon," the emphasis is on simplicity and practicality, reflecting the characters' isolated and natural lifestyle. Loose, flowing hair are key elements of Emmeline's look. Learn how to recreate the no-makeup makeup style <a href = 'https://www.youtube.com/shorts/nVJrswnpjzA'> here.</a>
</p>

          
      <h2 style={headingStyle}>Time Period: 1860s, American Civil War Era</h2>

      <p style={paragraphStyle}>
      The 1860s, marked by the American Civil War was a time of significant social upheaval and change. Fashion and beauty trends were influenced by the need for practicality and modesty, but also reflected the romantic ideals of the Victorian era.
        </p>
        <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
        <h2 style={headingStyle}> Sony Pictures' Little Women (2019)</h2>

       
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.youtube.com/watch?v=BuElhuhaMXw&t=501s" target="_blank" rel="noopener noreferrer">
          <img src={image6} alt="Alaska Young - Looking For Alaska" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

      Original Makeup & Hair Design by Ivana Primorac from the 2019 film 'Little Women,' recreation by Jackie Wyers.
            </p>

      <p style={paragraphStyle}>
      Louisa May Alcott, published in 1868. The story follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—as they grow up during and after the Civil War. The novel draws from Alcott's own experiences with her three sisters, offering a poignant look at family, love, and personal growth.
            </p>

            <p style={paragraphStyle}>

The looks in the film "Little Women,”(2019) especially Amy’s, feature beautiful twisted and braided updos that are soft and perfect for a hot
summer day. These styles offer an elegant and practical solution for managing long hair in the heat and are often adorned with ribbons and flowers for a soft, romantic look. The makeup palette was muted, with just touches of pink on the cheeks and lips, emphasizing natural beauty. A tip for achieving the no-makeup makeup look is to focus on well-groomed, fuller brows, especially if the hair is pulled off the face. Fuller, youthful brows can frame the face and allow your natural features to shine without heavy makeup.
            </p>
  
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

      <h2 style={headingStyle}>Time Period: Early 20th Century, Edwardian Era (1901-1910)</h2>

      <p style={paragraphStyle}>
      The Edwardian era, spanning from 1901 to 1910, was a time of transition where a blend of Victorian formality met the beginnings of modern fashion. This period was characterized by a sense of romanticism and elegance, with societal changes reflecting in the evolving styles of dress and beauty.

      </p>

      <h2 style = {headingStyle}> Walt Disney Pictures' Tuck Everlasting (2002) </h2>

  
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.youtube.com/watch?v=0-G6vbDjMo4&t=11s" target="_blank" rel="noopener noreferrer">
          <img src={image7} alt="Winnie Foster - Tuck Everlasting" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        Original Makeup & Hair Design by Hallie D'Amore from the 2002 film 'Tuck Everlasting,' recreation by Jackie Wyers.
      </p>

      <p style={paragraphStyle}>
      "Tuck Everlasting”(2002) based on the novel by Natalie Babbitt, captures the essence of this era through its story of timeless love and eternal youth and Edwardian styling. The film follows the journey of Winnie Foster, a young girl who discovers the Tuck family and their secret of immortality. The story is imbued with a sense of wonder and the enchanting beauty of the natural world.
            </p>

            <p style={paragraphStyle}>
            The makeup and hair in "Tuck Everlasting," particularly for Winnie Foster, epitomizes the youthful and romantic aesthetic of the Edwardian era. Long, undone curls and braids with bows were popular, reflecting the innocence and charm of youth. These styles were soft and natural, often worn down or loosely pinned up, allowing for a whimsical and effortless look that is perfect for modern-day inspiration.
           </p>
           

           <p style={paragraphStyle}>
           In terms of makeup, the Edwardian look, try fresh-faced makeup with a focus on naturally flushed cheeks. The “boyfriend blush” technique is great for this look, brining the blush through the cheekbone, and subtly faded to the jawline. 
            </p>

            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>

  
</div>


      <h2 style={headingStyle}>A Final Note 🌸</h2>
      <p style={paragraphStyle}>
      Embrace history with these character-inspired hair, makeup, and style inspirations—a delightful way to relive your favorite period dramas while adding timeless elegance to your look.
            </p>
      <p style={paragraphStyle}>

      Follow along for tutorials linked to each look and don’t forget to share your recreations with me by tagging me on socials @jackiewyers—I love seeing your versions of these looks and would be thrilled to feature them on my site!
            </p>

            <p style={paragraphStyle}>

            For more period drama and makeup inspiration, subscribe to the newsletter to stay updated with me! Don’t hesitate to leave a comment below if there are any period dramas or historical icons I've missed that are your favourites! I haven’t covered one of my all time favorite period drama’s Outlander (18th Century) and will have to at some point. Thanks for reading, and I hope your days are filled with beautiful, timeless moments.
                  </p>

                  <div>
        <img src={signature} alt="Victoria's Secret Fashion Show 2013" style={{ width: '100%' }} />
      </div>
     
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/margotbarbie" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={barbie} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE BEAUTY →
        </a>
      </div>

      <Comments website-id={websiteId} page-id={"No-Makeup-Period"} />

      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Period Drama No Makeup Inspiration"
        description="A Guide to Period Drama No-Makeup Makeup and Wearable Historical Hairstyles"
        blogContent={blogContent}
      />
    </div>
  );
};

export default PeriodDrama;
