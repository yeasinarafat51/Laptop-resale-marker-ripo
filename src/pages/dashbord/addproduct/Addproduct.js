import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../shared/confirmationmodal/ConfirmationModal';
import Loading from '../../shared/loading/Loading';

const Addproduct = () => {
    const [deleteproduct, setdeleteproduct] =useState(null);
   
    const {data: order, isLoading, refetch} = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            try{
                const res = await fetch('https://laptop-server-inky.vercel.app/order', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            }
            catch(error){
                console.log(error)

            }
        }
    })
    const handlesuccess = orders =>{
        console.log(orders)
        fetch(`https://laptop-server-inky.vercel.app/order/${orders._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Doctor ${orders.name} deleted successfully`)
            }
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>My product: {order?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
        <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product Type</th>
        <th>Price</th>
        <th>Use of years</th>
        <th>Location</th>
        <th>Phone Number</th>
        <th>Discription</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        order.map((orders,i) => <tr key={orders._id}>
            <th>{i+1}</th>
            <td>{orders.name}</td>
            <td>{orders.seller}</td>
            <td>{orders.price}</td>
            <td>{orders.useof}</td>
            <td>{orders.location}</td>
            <td>{orders.phone}</td>
            <td>{orders.discription}</td>
            <td>
            <label onClick={() => setdeleteproduct(orders)}  htmlFor="confirmation-modal" className="btn btn-active btn-accent">Delete</label>
               </td>
           
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
{
    deleteproduct && <ConfirmationModal
    title={`delete`}
    message={`delete ${deleteproduct.name}`}
    successAction = {handlesuccess}
    successButtonName="Delete"
    modalData = {deleteproduct}
    >

    </ConfirmationModal>
}
        </div>
    );
};

export default Addproduct;