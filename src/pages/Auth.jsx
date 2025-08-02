import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { loginApi, registerApi } from '../services/allApi';

function Auth({ register }) {

    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    console.log(userDetails);
    const navigate = useNavigate()

    const handleRegister = async () => {
        console.log("inside register function");

        const { username, email, password } = userDetails
        if (!username || !email || !password) {
            toast.info('please fill the details')
        }
        else {
            const result = await registerApi({ username, email, password })
            console.log(result);
            if (result.status == 200) {
                toast.success('Register successful')
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
                navigate('/login')
            }
            else if (result.status == 409) {
                toast.warning(result.response.data)
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
            }
            else {
                toast.error('Something went wrong')
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
            }
        }

    }

    const handleLogin = async () => {
        const { email, password } = userDetails
        if (!email || !password) {
            toast.info('please enter the complete details')
        }
        else {
            const result = await loginApi({ email, password })
            console.log(result);

            if (result.status == 200) {
                toast.success('login successfull')
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                navigate('/home')

            }
            else if (result.status == 401) {
                toast.warning(result.response.data);
                setUserDetails({
                    username: "",
                    email: "",
                    password: "",
                });
            }

            else if (result.status == 404) {
                toast.warning(result.response.data);
                setUserDetails({
                    username: "",
                    email: "",
                    password: "",
                });
            }

            else {
                toast.error("Something went wrong");
                setUserDetails({
                    username: "",
                    email: "",
                    password: "",
                });
            }
        }
    }

    return (
        <>
            <div
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center "
                style={{
                    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg')"
                   
                }}
            >
                <div className=' md:w-full max-w-md shadow-md bg-white p-8  rounded-xl'>
                    {register ? <h1 className='text-black text-center font-bold text-2xl mb-6 mt-4'>Registration</h1> :
                        <h1 className='text-black text-center font-bold text-2xl mb-6 mt-4'>Login</h1>}
                    {register && <div className='m-3'>
                        <label className='text-gray-700 text-sm font-semibold'>Username</label>
                        <input type="text" value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} className='w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 px-4 py-2 ' />
                    </div>}
                    <div className='m-3'>
                        <label className='text-gray-700 text-sm font-semibold'>Email</label>
                        <input type="email" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} className='w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 px-4 py-2' />
                    </div>
                    <div className='m-3'>
                        <label className='text-gray-700 text-sm font-semibold'>Password</label>
                        <input type="password" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} className='w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 px-4 py-2' />
                    </div>

                    <div className='m-3 '>
                        {register ? <button onClick={handleRegister} className='bg-black w-full rounded-lg text-white px-4 py-2'>Register</button> :
                            <button onClick={handleLogin} className='bg-black w-full rounded-lg text-white px-4 py-2'>Login</button>}
                    </div>

                    {register ? <h3 className='text-center'>Already have an account? <Link to={'/login'}><span className='text-red-400 font-bold' >Login</span></Link></h3> :
                        <h3 className='text-center'>Are you a new user? <Link to={'/register'}><span className='text-red-400 font-bold'>Register</span></Link></h3>
                    }
                </div>


            </div>
            <ToastContainer theme="colored" position="top-center" autoClose={2000} />

        </>
    )
}

export default Auth
