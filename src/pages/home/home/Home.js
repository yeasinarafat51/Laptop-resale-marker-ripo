import React from 'react';
import Banner from '../banner/Banner';
import Card from '../card/Card';
import Infocards from '../infocard/Infocards';
import Coursel from '../card/Coursel';

const Home = () => {
    return (
        <div className='mx-5'>
            <Coursel></Coursel>
            <Banner></Banner>
            <Card></Card>
            <Infocards></Infocards>
        </div>
    );
};

export default Home;