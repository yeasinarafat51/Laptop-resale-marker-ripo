import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Addseller = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)
    const handleAddDoctor = data =>{
        const seller = {
            name:data.name,
            price:data.price,
            discription:data.discription,
            useof:data.useof,
            phone:data.phone,
            seller:data.seller,
            location:data.location

        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(seller)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            toast.success(`${data.name}`)
            navigate('/dashboard/addproduct')
        })


        // const image = data.image[0];
        // const formdata = new FormData();
        // formdata.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body:formdata
        // })
        // .then(res => res.json())
        // .then(imgData => {
        //     if(imgData.success){
        //         console.log(imgData.data.url)
        //     }
        // })
        console.log(data)

    }
    return (
        <div className='w-96 p-7'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="price" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control  input-bordered w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Type</span></label>
                    <select {...register('seller')} className="select select-ghost w-full max-w-xs">
                             
                                  <option>Excellent</option>
                                  <option>Better</option>
                                 <option>Good</option>
                             </select>  
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Number</span></label>
                    <input type="phone" {...register("phone", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="location" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Use of years</span></label>
                    <input type="useof" {...register("useof", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.useof && <p className='text-red-500'>{errors.useof.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Discription</span></label>
                    <input type="discription" {...register("discription", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.discription && <p className='text-red-500'>{errors.discription.message}</p>}
                </div>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div> */}
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default Addseller;