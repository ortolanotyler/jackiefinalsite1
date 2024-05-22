import React, { useRef } from 'react';
import './ExampleTutorial.module.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import DropCap from '../../Components/DropCap';
import TextReveal from '../../Components/TextReveal';

const title = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/DiaryPostTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/Diary2.png`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const imageStyle = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '100%',
  maxHeight: '900px',
  objectFit: 'cover',
};

const Card = ({ blogContent }) => (
    <div>
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blogContent" style={{ }}>{blogContent}</div>
        </div>
    </div>
);

const DiaryPost1Fillers = () => {
    const websiteId = '10910';
    const blogRef = useRef(null);

    const blogContent = (
        <div className="container" style={{ lineHeight: '1.5rem', maxWidth: '100%', margin: '30rem', marginTop: '5rem', color: 'black' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <a href="/diary" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    DIARY // FILLERS
                </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={title} alt="Sophia Loren in Arabesque" style={imageStyle} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image2} alt="Sophia Loren in Arabesque" style={imageStyle} />
            </div>

            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>                <DropCap text="Welcome back to my blog for my first-ever 'Diary' entry, where I dive deep into my personal experience with getting injectable fillers at a young age. In today's social media-driven world, it's increasingly common to see teens and young women experimenting with cosmetic enhancements. Platforms like Instagram flood us with transformation reels and personal stories from influencers, making such procedures seem both normal and desirable. While this transparency can be enlightening, it also carries significant influence, shaping perceptions and expectations about beauty." />


            </div>

                     <div style={{ margin: '2rem', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>

            <h2 className="heading">
                Early Insecurities and the Drive for Control
            </h2>
            </div>

            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>
            <p className="paragraph">
                Starting at 12, I struggled with my self-image, especially during the awkward stages of puberty. Unlike some friends, who were excited about their teen years, I felt an overwhelming shame about the changes in my body.
            </p>
</div>

<div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>

            <p className="paragraph">
                This self-criticism deepened during an abusive romantic relationship, further eroding my self-esteem. I fixated on my perceived flaws, especially my nose, believing that changing this one feature would alleviate my feelings of inadequacy.
            </p>
</div>

<div style={{ margin: '1rem', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>

            <h2 className="heading">
                The Decision to Change and Its Consequences
            </h2>

            </div>

            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>

            <p className="paragraph">
                At 17, fuelled by modest earnings from my YouTube channel and unable to afford rhinoplasty, I went in for an injectable nose job. The procedure was brief, painless, and initially seemed like the perfect solution.
            </p>

            <p className="paragraph">
                However, the immediate gratification soon faded, and the deeper issues remained. My insecurities merely shifted as the filler migrated and faded unevenly. Over time, I realized I preferred my original appearance and began to question my perception of myself.
            </p>
</div>

<div style={{ margin: '1rem', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>

            <h2 className="heading">
                Reflection and Growth
            </h2>
</div>
            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>

            <p className="paragraph">
                This experience taught me about the complexities of self-esteem and the ineffectiveness of seeking external solutions for internal problems. I learned to cut ties with toxic influences and appreciate my qualities, both physical and personal. Makeup and styling became healthy outlets for creativity, allowing me to express myself in non-permanent ways. My YouTube channel, focusing on pop culture and beauty, has become a source of joy and a platform for fostering a supportive community that builds confidence—not just for me, but for my audience as well.
            </p>
</div>

<div style={{ margin: '1rem', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>

            <h2 className="heading">
                Conclusion: Embracing Authenticity
            </h2>
</div>
            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>

            <p className="paragraph">
                My experiences underscore a crucial message: our self-worth shouldn’t hinge solely on our appearance. True healing comes from addressing our deeper emotional needs and respecting ourselves, inside and out.
            </p>
            </div>
            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>

            <p className="paragraph">
                While I recognize that cosmetic enhancements can be positive for some, especially informed adults, I worry about young girls who might view these procedures as solutions to deeper feelings of inadequacy, whether they are aware of their motivations or not. It took years to understand that my feelings of worthlessness were not merely physical insecurities. Making informed decisions about our bodies is challenging during confusing teen and young adult years.
            </p>
            </div>
            <div style={{ margin: '5rem', marginTop: '1rem', marginBottom: '1rem' }}>

            <p className="paragraph">
                Through sharing some of my story, I hope to inspire others to reflect on their motivations for physical changes and to embrace their true selves—not just in appearance, but in recognizing how special each personality is and how everyone is worthy of respect and love. I invite you to share your thoughts and reflections below, and I hope you enjoyed my first-ever diary post!
            </p>
</div>
            <div style={{ textAlign: 'center' }}>
                <img src={Signature} alt="Signature" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Comments website-id={websiteId} page-id="Diary-Fillers" />
        </div>
    );

    return (
        <div>
            <div ref={blogRef}>
                <TextReveal text='DIARY' />
                <Card blogContent={blogContent} />
            </div>
            <div>
            </div>
        </div>
    );
};

export default DiaryPost1Fillers;
