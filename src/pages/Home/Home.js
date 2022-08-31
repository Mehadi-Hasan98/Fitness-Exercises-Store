import React, { useState } from 'react';
import Featured from '../Featured/Featured';
import Loading from '../Shared/Loading';

import Banner from './Banner';
import Review from './Review';
import Services from './Services';
import Slider from './Slider';
import Stat from './Stat';

const Home = () => {
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading/>
    }
    else{
      setLoading(false);
    }
    return (
        <div>
            <Banner/>
            <Services/>
            <Slider/>
           
            <Review/>
            <Featured/>
            <Stat/>
        </div>
    );
};

export default Home;