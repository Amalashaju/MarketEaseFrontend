import React, { useState } from 'react'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [token, setToken] = useState("")

    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem('existingUser')
        sessionStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
            <nav className="shadow-xl px-10 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 text-2xl font-bold">
                        <FontAwesomeIcon icon={faCartShopping} className="text-indigo-400" />
                        <h1>MarketEase</h1>
                    </div>
                    <div className="hidden md:flex gap-4 text-center font-bold">
                        <Link to="/home" className=" text-black hover:text-gray-500 py-2 px-4 rounded">
                            Home
                        </Link>
                        <Link to="/user-product" className=" text-black hover:text-gray-500 py-2 px-4 rounded">
                            MyProducts
                        </Link>
                        <Link to="/add-product" className=" text-black hover:text-gray-500 py-2 px-4 rounded">
                            Add Product
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={logout} className="text-white bg-black hover:border hover:border-black hover:bg-white hover:font-bold hover:text-black rounded-md py-2 px-4 hidden md:block">
                            Logout
                        </button>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="absolute right-0 mt-2 bg-white border border-red-300 text-black  font-bold rounded shadow-md p-4 flex flex-col  md:hidden">
                        <Link to={'/home'}><div className="  py-2 px-4 rounded-md">Home</div></Link>
                        <Link to="/add-product" ><div className=" py-2 px-4 rounded-md   ">AddProduct</div></Link>
                        <Link to={'/user-product'}><div className="  py-2 px-4 rounded-md">MyProducts</div></Link>
                        <div><button onClick={logout} className="py-2 px-4 rounded-md">Logout</button></div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header
