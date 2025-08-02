import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProductApi, getAllProductApi, updateProductApi } from '../services/allApi';
import Header from '../components/Header';

function UserProducts() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userProducts, setUserProducts] = useState([]);
    const [token, setToken] = useState("");
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const getAllProduct = async (token) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        };

        try {
            const result = await getAllProductApi(reqHeader);
            if (result.status === 200) {
                setUserProducts(result.data);
            } else {
                console.log("Failed to fetch products:", result.data);
            }
        } catch (error) {
            console.error("Error while fetching products:", error);
        }
    };

    const handleDelete = async (productId) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        };

        try {
            const result = await deleteProductApi(productId, reqHeader);
            if (result.status === 200) {
                alert("Deleted Successfully");
                getAllProduct(token);
            } else {
                alert(result.data.message || "Delete failed");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();

        const reqHeader = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        };

        try {
            const response = await updateProductApi(selectedProduct._id, selectedProduct, reqHeader);
            if (response.status === 200) {
                alert("Product updated successfully");
                setShowUpdateForm(false);
                getAllProduct(token);
            } else {
                alert(response.data.message || "Update failed");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        const tok = sessionStorage.getItem("token");
        if (tok) {
            setToken(tok);
            getAllProduct(tok);
        }
    }, []);

    return (
        <div className='min-h-screen bg-white'>
            
            <Header/>
           
            <div className="p-6 ">
                <h2 className="text-2xl font-bold mb-4 text-center">My Products</h2>
                {userProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {userProducts.map((item, index) => (
                            <div className=" bg-gray-200 p-4 shadow-xl rounded-lg" key={index}
                                hidden={item.status === 'pending' || item.status === 'sold'}>
                                <img src={item.imageurl} alt={item.title} className="h-48 w-full object-cover rounded" />
                                <div className="mt-3">
                                    <h3 className="font-bold text-lg">{item.productName}</h3>
                                    <p className="text-gray-600 text-sm">{item.description?.slice(0, 50)}...</p>
                                    <p className="text-indigo-300font-semibold mt-2">$ {item.price}</p>
                                    <div className='flex justify-end gap-3 font-bold'>
                                        <button
                                            onClick={() => {
                                                setSelectedProduct(item);
                                                setShowUpdateForm(true);
                                            }}
                                            className="mt-3 bg-indigo-400 text-black py-2 px-4 rounded hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition-all"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="mt-3 bg-indigo-400 text-black py-2 px-4 rounded hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition-all"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No Products Found</p>
                )}
            </div>

          
            {showUpdateForm && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm  bg-opacity-10">
                    <div className='w-full max-w-4xl shadow-lg border bg-white p-8 rounded-xl'>
                        <h1 className='text-black text-center font-bold text-2xl mb-6'>Update Product</h1>
                        <form onSubmit={handleUpdateProduct}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6'>
                              
                                <div>
                                    <div className='mb-4'>
                                        <label className='text-gray-700 text-sm font-semibold'>Product Name</label>
                                        <input type="text" value={selectedProduct.productName} onChange={(e) => setSelectedProduct({ ...selectedProduct, productName: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-gray-700 text-sm font-semibold'>Description</label>
                                        <input type="text" value={selectedProduct.description} onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-gray-700 text-sm font-semibold'>Price</label>
                                        <input type="text" value={selectedProduct.price} onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-gray-700 text-sm font-semibold'>Discount Price</label>
                                        <input type="text" value={selectedProduct.dprice} onChange={(e) => setSelectedProduct({ ...selectedProduct, dprice: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                </div>

                               
                                <div>
                                    <div className='mb-2'>
                                        <label className='text-gray-700 text-sm font-semibold'>Image URL</label>
                                        <input type="text" value={selectedProduct.imageurl} onChange={(e) => setSelectedProduct({ ...selectedProduct, imageurl: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-gray-700 text-sm font-semibold'>Category</label>
                                        <input type="text" value={selectedProduct.category} onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='text-gray-700 text-sm font-semibold'>Stock</label>
                                        <input type="text" value={selectedProduct.stock} onChange={(e) => setSelectedProduct({ ...selectedProduct, stock: e.target.value })} className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                                    </div>
                                    <div className="flex justify-end mt-4 gap-3">
                                        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">Save</button>
                                        <button onClick={() => setShowUpdateForm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}

export default UserProducts;
