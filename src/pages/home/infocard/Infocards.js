import React, { useEffect, useState } from 'react';
import Info from './Info';

const Infocards = () => {
    const [sels, setsel] = useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/seller')
        .then(res=> res.json())
        .then(data => setsel(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-3 my-12'>
            {
                sels?.map(sel =><Info key={sel._id}
                    sel={sel}
                ></Info>)
            }
        </div>
    );
};

export default Infocards;