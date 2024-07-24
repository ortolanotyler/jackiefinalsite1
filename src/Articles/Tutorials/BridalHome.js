import React from 'react';
import { Helmet } from 'react-helmet';

import TextReveal from '../../Components/TextReveal';
import Eeebridal from './eeebridal';

const BridalHome = () => {
  return (
    <>
      <Helmet>
        <title>Bridal Inspiration - Jackie Wyers</title>
        <meta name="description" content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks." />
      </Helmet>
      <div>
     
        <TextReveal text='BRIDAL' />
        <Eeebridal />
      </div>
    </>
  );
};

export default BridalHome;