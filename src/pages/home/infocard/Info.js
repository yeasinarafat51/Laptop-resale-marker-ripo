import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({sel}) => {
  console.log(sel)
    const {name, _id,pic}= sel
    return (
        <div className="card w-96 bg-success text-primary-content ">
  <div className="card-body " >
    <img className='h-[200px]' src={pic} alt=''/>

    <h2 className="card-title">{name}</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
      <Link to={`/booking/${_id}`}><button className="btn btn-accent">View Product</button></Link>
    </div>
  </div>
</div>
    );
};

export default Info;
