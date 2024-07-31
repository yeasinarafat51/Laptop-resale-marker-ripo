import React from 'react';
import baner1 from '../../../assets/lal3.jfif'

const Card = () => {
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-xl my-12">
  <figure className=' flex justify-center'><img className='w-1/2 h-full object-cover' src={baner1}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">About Us</h2>
    <p>Our website very harmfull.This website Buyers , Sellers both worked List the specifications of your laptop like screen size, CPU, graphics card, RAM, and hard drive space for the viewers to analyse. Be sure to list the best features first, but if there are any issues, it is best to list those as well, near the bottom. That way you won't be ripping anyone off.</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
    );
};

export default Card;