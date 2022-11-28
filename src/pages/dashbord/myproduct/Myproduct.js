import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Myproduct = () => {
    const {user} = useContext(AuthContext);

    const url = `https://laptop-server-inky.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1>My Products</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
        <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      
     {
        bookings?.map((booking, i) => <tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.names}</td>
            <td>{booking.name}</td>
            <td>{booking.resall}</td>
            <td>{booking.date}</td>
          </tr>)
     }
      
     
       
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Myproduct;