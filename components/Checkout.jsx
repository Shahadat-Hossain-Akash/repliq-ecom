'use client'
import React from 'react'
import {Button, Divider, Input} from "@nextui-org/react"
import {FaGooglePay} from "react-icons/fa"
import {RiVisaLine} from "react-icons/ri";
import {GetTotalAmount, GetTotalItems} from '@/utils/getCartStatus';

export default function Checkout() {
    return (
        <div className='w-full h-full flex-col md:flex-row flex'>
            <div className='w-full md:w-2/3 h-full flex flex-col items-center'>
                <div className='flex w-full gap-2 py-4 px-2 items-center flex-col'>
                    <Button className='w-full md:w-2/3 bg-black'><FaGooglePay size={32} color='white'/></Button>
                    <Button className='w-full md:w-2/3 bg-orange-400'><RiVisaLine size={32}/></Button>
                    <Divider className='w-full md:w-2/3 mt-2'/>
                </div>
                <div
                    className='flex md:w-2/3 w-full h-full gap-2 py-4 px-2 flex-col bg-zinc-100/30 rounded-large'>
                    <form className='w-full flex flex-col gap-4 text-black'>
                        <span className='text-2xl'>Delivery</span>
                        <Input
                            label="Name"
                            labelPlacement='outside'
                            className='w-full'
                            placeholder='Enter you name'/>
                        <Input
                            label="Email"
                            labelPlacement='outside'
                            className='w-full'
                            placeholder='Enter you email'/>
                        <Input
                            label="Address"
                            labelPlacement='outside'
                            className='w-full'
                            placeholder='Enter you address'/>
                        <Input
                            label="Phone"
                            labelPlacement='outside'
                            className='w-full'
                            placeholder='Enter you phone'/>
                        <Input
                            disabled="disabled"
                            label="Payment"
                            labelPlacement='outside'
                            className='w-full'
                            placeholder='cash on delivery'/>
                        <Button color='primary' className='text-white'>Proceed to payment</Button>
                    </form>
                </div>
            </div>
            <div className='w-full md:w-1/3 min-h-screen p-2 flex flex-col gap-2'>
                <span className='text-4xl'>Payment Receipt</span>
                <div className='w-full flex justify-between flex-col gap-2'>
                    <div className='w-full flex justify-between'>
                        <span>Total price</span>
                        <div>{GetTotalAmount()}</div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <span>Total unit</span>
                        <div>{GetTotalItems()}</div>
                    </div>
                    <Divider className='mt-4'/>
                    <div className='w-full flex justify-between mt-2'>
                        <span>Bill</span>
                        <div>{GetTotalAmount()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
