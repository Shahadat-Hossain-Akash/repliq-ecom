'use client'
import React, {useState} from 'react'
import {Input, Button} from "@nextui-org/react";
import {useRouter} from 'next/navigation';
import Link from 'next/link'

export default function Register() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phone && !password) {
            setError("All fields are required")
            return
        }
        if (!phone) {
            setError("Phone number is required")
            return
        } else if (!password) {
            setError("Password is required")
            return
        }
        router.replace('/')
        setError("");
    }
    return (
        <div className='text-black w-full h-full justify-center flex items-center'>
            <div
                className='w-[500px] h-fit bg-zinc-200 p-4 gap-4 flex flex-col rounded-2xl'>
                <span className=' text-3xl'>Login</span>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <Input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required="required"
                        label='Phone'
                        labelPlacement='outside'
                        type='tel'
                        placeholder='Enter your number'/>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        errorMessage={error}
                        required="required"
                        label='Password'
                        labelPlacement='outside'
                        type='password'
                        placeholder='Enter your password'/>
                    <p className='text-sm text-right'>Don&apos;t have an account,{" "}<Link href={'/register'} className='text-sm text-right underline'>Sign now</Link>
                    </p>
                    <Button type='submit' className='w-full bg-black text-white'>Login</Button>
                </form>
            </div>
        </div>
    )
}
