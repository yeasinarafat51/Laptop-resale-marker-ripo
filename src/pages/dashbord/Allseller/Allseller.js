import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const Allseller = () => {
  // const [del, setdel] = useState(null)
    const {data: sellerses = [], refetch} = useQuery({
        queryKey: ['sellerses'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sellerses');
            const data = await res.json();
            return data;
        }

    });
    const handleseller = allseller =>{
      console.log(allseller)
      fetch(`http://localhost:5000/users/seller/${allseller._id}`, {
          method: 'DELETE', 
          headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount > 0){
              refetch();
              toast.success('sucess')
          }
      })
  }
    return (
        <div>
            <h1>All Seller</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
        <thead>
      <tr>
       <th></th>
        <th>Name</th>
        <th>Email</th>
        {/* <th>Admin</th> */}
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
     {
        sellerses.map((user, i )=> <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            {/* <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
            <td><button onClick={() => handleseller(user)} className='btn btn-xs btn-danger'>Delete</button></td>
            
          </tr>)
     }
      
      
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default Allseller;