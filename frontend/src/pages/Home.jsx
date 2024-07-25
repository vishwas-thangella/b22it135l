import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();

    const getData = () =>{
        setLoading(true);
        axios.get(`http://localhost:8000/products`).then(resp=>{
            console.log(resp)
            if(resp.data.success){
                setLoading(false);
                setProducts(resp.data.allproducts);
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div>
        <img src="https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg" alt="" className='w-full h-70'/>
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>Top in Mobiles</h1>
            {
                (!loading && products) && <div className='flex flex-wrap gap-10 mt-10 justify-center'>
                    {
                        products.map((product,index)=>{
                            if(product.category==="Phone"){
                                return(
                                    <div className='w-52 h-auto border rounded-md' onClick={()=>{
                                        navigate(`/product/${product.dta.productName}`)
                                    }}>
                                        <img src="https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg" alt="" className='w-full object-cover'/>
                                        <div className='p-3'>
                                            <h1 className='font-bold'>{product.dta.productName}</h1>
                                           <div className='flex flex-row gap-5 mb-3'>
                                            <h1 className='line-through'>₹ {product.dta.price}/-</h1>
                                            <h1 className='text-green-600 font-bold'>₹ {product.dta.price - product.dta.discount}/-</h1>
                                           </div>
                                           <span className='p-1 bg-green-600 text-white mt-6 rounded-md'>
                                            {product.dta.rating}
                                           </span>
                                           <h1 className='mt-3'>inStock : <span className='text-red-500'>{product.dta.availability}</span></h1>
                                           <h1 className='mt-2 text-xs'>Manufactured by : {product.comp}</h1>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            }
            <h1 className='text-2xl font-bold'>Top in Computer</h1>
            {
                (!loading && products) && <div className='flex flex-wrap gap-10 mt-10 justify-center'>
                    {
                        products.map((product,index)=>{
                            if(product.category==="Computer"){
                                return(
                                    <div className='w-52 h-auto border rounded-md'>
                                        <img src="https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg" alt="" className='w-full object-cover'/>
                                        <div className='p-3'>
                                            <h1 className='font-bold'>{product.dta.productName}</h1>
                                           <div className='flex flex-row gap-5 mb-3'>
                                            <h1 className='line-through'>₹ {product.dta.price}/-</h1>
                                            <h1 className='text-green-600 font-bold'>₹ {product.dta.price - product.dta.discount}/-</h1>
                                           </div>
                                           <span className='p-1 bg-green-600 text-white mt-6 rounded-md'>
                                            {product.dta.rating}
                                           </span>
                                           <h1 className='mt-3'>inStock : <span className='text-red-500'>{product.dta.availability}</span></h1>
                                           <h1 className='mt-2 text-xs'>Manufactured by : {product.comp}</h1>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            }
            {
                loading && <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className='loader'></div>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    </div>
  )
}

export default Home;