'use client'
import Link from "next/link"
import { useState } from 'react'
import { db } from '../firebase.js'
import { collection, addDoc } from "firebase/firestore";


export default function Navbar() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const registerUser = async () => {
        try {
            console.log('clicked')
            const docRef = await addDoc(collection(db, "users"), {
                username,
                password,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <h1 className="text-5xl mb-6">Register User</h1>
            <div className='flex flex-col'>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" placeholder="Enter your Name" 
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                />

                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Your Password" />
                <button className="rounded-full" onClick={() => registerUser()}>Register User</button>
            </div>
        </div>
    )
}


