import React from 'react';

const Book = ({book, setbooker}) => {
    const {name, img, location, resall,orginal,useof,date,sellername}= book;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img  src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{location}</div>
          </h2>
          <p className='text-primary'>Resale price {resall}$ Orginal price {orginal}$</p>
          <p className='text-primary'>Use of years: {useof}  Post date: {date}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline text-primary">Sellername: {sellername}</div> 
            {/* <div className="badge badge-outline text-secondary">Booking</div> */}
            <label htmlFor="booking-modal" className="btn btn-primary"
            onClick={() =>setbooker(book)}
            >Booking</label>
          </div>
        </div>
      </div>
    );
};

export default Book;