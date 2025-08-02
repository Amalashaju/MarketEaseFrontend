

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';


function Home() {

    const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {setProducts(res.data.products)
             setLoading(false)
            })
           .catch(err => {
                console.error('Error fetching product', err);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <div className='min-h-screen   bg-white  '>
                <Header/>
               { loading? (<div className='text-center mt-20 text-3xl font-bold'>Loading.......</div>):
                (<div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-5 mx-10   ">
                    {products.map((product) => (
                        <div key={product.id} className=" shadow-2xl rounded p-4 m-3 hover:border   hover:border-red-300  ">
                            <Link to={`/product-view/${product.id}`}><img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded mb-4 bg-red-300" /></Link>
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-600">{product.description.slice(0, 60)}...</p>
                            <p className="text-red-600 font-bold mt-2">$ {product.price}</p>
                        </div>
                    ))}
                </div>)}


            </div>

        </>
    )
}

export default Home
