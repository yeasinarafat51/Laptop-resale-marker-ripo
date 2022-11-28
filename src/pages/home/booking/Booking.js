import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import Bookingmodal from './bookingmodal/Bookingmodal';

const Booking = () => {
    const {_id,category} = useLoaderData();
    const [booker, setbooker] =useState(null);
    // console.log(category)
    // const [{name}]=category
    
    return (
        <section>
             <div className='grid lg:grid-cols-3 my-10 mx-5 gap-3'>
            {
                category?.map(book=><Book book={book}
                    setbooker={setbooker}
                ></Book>)
            }
        </div>
       { booker && <Bookingmodal booker={booker} setbooker={setbooker}></Bookingmodal>}
        </section>
       
        
    );
};

export default Booking;