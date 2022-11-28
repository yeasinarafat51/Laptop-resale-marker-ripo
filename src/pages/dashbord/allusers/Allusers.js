import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://laptop-server-inky.vercel.app/users');
            const data = await res.json();
            return data;
        }

    });
    const handleMakeAdmin = id => {
        fetch(`https://laptop-server-inky.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
            console.log(data);
        })
    }
    const handleuser = alluser =>{
        console.log(alluser)
        fetch(`https://laptop-server-inky.vercel.app/users/${alluser._id}`, {
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
            <h1>All Usrers</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
        <thead>
      <tr>
       <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
     {
        users.map((user, i )=> <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button onClick={() => handleuser(user)} className='btn btn-xs btn-danger'>Delete</button></td>
            
          </tr>)
     }
      
      
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default Allusers;