import { faBoxOpen, faCartPlus, faCartShopping, faDollar, faDollarSign, faIndianRupeeSign, faShieldAlt, faStar, faTags, faTruck, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';


function ProductView() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching product', err);
                setLoading(false);
            });
    }, [id]);


    return (
        <>
            <div className='min-h-screen    bg-white  '>
                 <Header/>

                {loading ? (
                    <div className='text-center mt-20 text-3xl font-bold'>Loading.......</div>
                ) :

                    (
                        <div className='max-w-6xl w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 shadow-2xl m-10'>
                            <div className='bg-indigo-300'>
                                <img src={product.thumbnail} alt={product.title} className="w-full h-auto rounded-lg shadow-md" />
                            </div>
                            <div className="flex flex-col gap-4 p-6">
                                <h2 className="text-3xl font-bold">{product.title}</h2>
                                <p className="text-sm text-gray-500">{product.brand} | {product.category}</p>
                                <p className="text-gray-700 font-bold">{product.description}</p>

                                <p className="text-2xl font-semibold text-green-600 flex items-center">
                                    <FontAwesomeIcon icon={faDollarSign} className="text-green-600" />
                                    {product.price}
                                </p>

                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faTags} className="text-orange-500" />
                                    Discount: {product.discountPercentage}%
                                </p>

                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                    Rating: {product.rating}
                                </p>

                                <p className={`text-sm font-medium flex items-center gap-2 ${product.stock < 10 ? "text-red-600" : "text-green-600"}`}>
                                    <FontAwesomeIcon icon={faBoxOpen} />
                                    {product.stock < 10 ? 'Low Stock' : 'In Stock'}
                                </p>

                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faShieldAlt} />
                                    Warranty: {product.warrantyInformation }
                                </p>

                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faTruck} />
                                    Shipping: {product.shippingInformation }
                                </p>

                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUndoAlt} />
                                    Return Policy: {product.returnPolicy }
                                </p>

                                <button className="mt-4 bg-indigo-300 hover:bg-indigo-300 text-white py-2 px-6 rounded flex items-center gap-2 w-fit">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )}

            </div>
        </>
    )
}

export default ProductView
