import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({sel}) => {
    const {name, _id}= sel
    return (
        <div className="card w-96 bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
      <Link to={`/booking/${_id}`}><button className="btn">View Product</button></Link>
    </div>
  </div>
</div>
    );
};

export default Info;
 {/* <Link to={`/checkout/${_id}`}>
           <button className="btn btn-primary">Deatail</button>
           </Link> */}