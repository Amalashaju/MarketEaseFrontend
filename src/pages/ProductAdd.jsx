import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { addproductApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ProductAdd() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productDetails, setProductDetails] = useState({
        productName: "", description: "", price: "", dprice: "", imageurl: "", category: "", stock: ""
    })
    console.log(productDetails);
    const [token, setToken] = useState([])


    const handleReset = () => {
        setProductDetails({
            productName: "", description: "", price: "", dprice: "", imageurl: "", category: "", stock: ""

        })

    }

    const handleSubmit = async () => {
        const { productName, description, price, dprice, imageurl, category, stock } = productDetails;

        if (!productName || !description || !price || !dprice || !imageurl || !category || !stock) {
            toast.info('Please fill all the fields completely');
        } else {
            const reqHeader = {
                "Authorization": `Bearer ${token}`

            };

            const reqBody = {
                productName,
                description,
                price,
                dprice,
                imageurl,
                category,
                stock
            };

            try {
                const result = await addproductApi(reqBody, reqHeader); 
                console.log(result);

                if (result.status === 401) {
                    toast.info(result.response.data);
                } else if (result.status === 200) {
                    toast.success('Product added successfully');
                    handleReset();
                } else {
                    toast.error('Something went wrong');
                }
            } catch (error) {
                toast.error('Server error');
                console.error(error);
            }
        }
    };

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    return (
        <>
            <div className='min-h-screen bg-white'>
                <Header/>

                <div className='flex items-center justify-center mt-20 px-4'>
                    <div className='w-full max-w-4xl shadow-md bg-indigo-300 p-8 rounded-xl'>
                        <h1 className='text-black text-center font-bold text-2xl mb-6'>Add Products</h1>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6'>
                            <div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 text-sm font-semibold '>Product Name</label>
                                    <input type="text"  value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 text-sm font-semibold'>Description</label>
                                    <input type="text" value={productDetails.description} onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 text-sm font-semibold'>Price</label>
                                    <input type="text" value={productDetails.price} onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 text-sm font-semibold'>Discount Price</label>
                                    <input type="text" value={productDetails.dprice} onChange={(e) => setProductDetails({ ...productDetails, dprice: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                            </div>
                            <div>
                                <div className='mb-2'>
                                    <label className='text-gray-700 text-sm font-semibold'>Image Url</label>
                                    <input type="text" value={productDetails.imageurl} onChange={(e) => setProductDetails({ ...productDetails, imageurl: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 text-sm font-semibold'>Category</label>
                                    <input type="text" value={productDetails.category} onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                                <div className='mb-4'>
                                    <label className='text-gray-700 text-sm font-semibold'>Stock</label>
                                    <input type="text" value={productDetails.stock} onChange={(e) => setProductDetails({ ...productDetails, stock: e.target.value })} className='w-full bg-white  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ' />
                                </div>
                                <div className='mt-4 flex justify-end gap-3'>
                                    <button onClick={handleSubmit} className='bg-black rounded-lg text-white px-5 py-2'>Submit</button>
                                    <button onClick={handleReset} className='bg-black rounded-lg text-white px-5 py-2'>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer theme="colored" position="top-center" autoClose={2000} />
        </>

    )
}

export default ProductAdd
