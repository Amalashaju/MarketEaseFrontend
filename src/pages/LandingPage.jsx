import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function LandingPage() {
    return (
        <>
            <div className='min-h-screen bg-white '>
                <nav className='flex justify-between shadow-xl px-6 sm:px-10 py-4 '>
                    <div className='flex items-center gap-x-2 text-2xl font-bold'>
                        <FontAwesomeIcon icon={faCartShopping} className="text-red-600" />
                        <h1>MarketEase</h1>
                    </div>
                    <div>
                        <Link to={'/login'}> <button className="text-white bg-black rounded-md py-2 px-4">Login</button></Link>
                    </div>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-10 lg:px-20 py-10 mt-10 gap-6">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-800">Welcome to MarketEase</h1>
                        <p className="text-gray-600 mt-4 max-w-md text-2xl pt-3">
                            Your one-stop shop for all your daily needs. Fast delivery, best deals, and a great shopping experience.
                        </p>
                        <Link to={'/login'}><button className='bg-red-400 p-3 rounded font-bold text-black mt-5 pt-4'>Get Started</button></Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <img src="https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg" alt="Electronics" className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Cosmetics</h3>
                                <p className="text-gray-600 mt-2 text-sm">Latest Products</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e" alt="Fashion" className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Fashion</h3>
                                <p className="text-gray-600 mt-2 text-sm">Trendy styles and outfits.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <img src="https://cdn.pixabay.com/photo/2019/12/05/05/50/bread-4674349_1280.jpg" alt="Groceries" className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Groceries</h3>
                                <p className="text-gray-600 mt-2 text-sm">Fresh items delivered daily.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <img src="https://cdn.pixabay.com/photo/2017/03/25/23/32/kitchen-2174593_1280.jpg" alt="Home Appliances" className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">Home Appliances</h3>
                                <p className="text-gray-600 mt-2 text-sm">Smart tools for your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;
