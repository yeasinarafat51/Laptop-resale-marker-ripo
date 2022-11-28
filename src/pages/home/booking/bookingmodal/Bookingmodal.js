import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Bookingmodal = ({booker, setbooker}) => {
    const {name, date,location,resall} = booker;
    const {user} = useContext(AuthContext);

    const handleBooking =event =>{
        event.preventDefault();
        const form = event.target;
        const locations = form.locations.value;
        const names = form.name.value;
        const email = form.email.value;
        // const price = form.price.value
        const phone = form.phone.value;
        console.log(phone)
        const booking = {
            date,
            phone,
            location,
            locations,
            resall,
            email,
            name,
            names
        }
        // console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setbooker(null);
            toast.success('booking confirm')

            }
            else{
                toast.error(data.message);
            }
                
            
        })
       
    }
    return (
        <>
       <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <input type="text" disabled value={resall} className="input w-full input-bordered " />
                        <input type="text" disabled value={location} className="input w-full input-bordered " />
                        {/* <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select> */}
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        {/* <input name="price" type="text" placeholder="Price" className="input w-full input-bordered" /> */}
                        {/* <input name="useof" type="text" placeholder="Use of years" className="input w-full input-bordered" /> */}
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="locations" type="text" placeholder="Meating Loaction" className="input w-full input-bordered" />
                        {/* <input name="discription" type="text" placeholder="Discription" className="input w-full input-bordered" /> */}
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
    
  </div>
</div>
    </>
    );
};

export default Bookingmodal;