import React from 'react';
import Banner from '../banner/Banner';
import Card from '../card/Card';
import Infocards from '../infocard/Infocards';
import Coursel from '../card/Coursel';
import Cataswip from '../infocard/Cataswip';

const Home = () => {
    return (
        <div className='mx-5'>
            <Coursel></Coursel>
            <Banner></Banner>
            <Card></Card>
            <Infocards></Infocards>
            <Cataswip></Cataswip>
        </div>
    );
};

export default Home;