import React from 'react';
import baner1 from '../../../assets/baner1.jpg'

const Card = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
  <figure><img className='w-full h-full' src={baner1}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">About Us</h2>
    <p>Our website very harmfull.This website Buyers , Sellers both worked</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
    );
};

export default Card;