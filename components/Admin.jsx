'use client'
import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import {Card, CardBody} from "@nextui-org/react"
import { chart as data, activities, info } from '@/data/data'

export default function Admin() {

    return (
        <div className="w-full px-4 md:flex-grow">
            <div className="px-4 min-h-full gap-4 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        info.map((item) => (
                            <div key={item.title} className="bg-zinc-100/70 p-4 py-6 h-32 rounded-2xl">
                                <h2 className="text-xl font-medium text-gray-800">{item.title}</h2>
                                <p className="text-4xl font-medium text-black">{item.value}</p>
                            </div>
                        ))
                    }

                </div>
                <div className="p-4 px-0 rounded-lg flex flex-col gap-4">
                    <h2 className="text-xl font-medium text-gray-800">Monthly Revenue Trends</h2>
                    <div className="w-full h-64 ">
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                            className='bg-zinc-100/30 rounded-2xl flex items-center justify-center p-6 px-0'>
                            <LineChart
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}>
                                <CartesianGrid strokeOpacity={0}/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    activeDot={{
                                        r: 8
                                    }}/>
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className=" p-4 px-0 rounded-lg flex flex-col gap-4">
                <h2 className="text-xl font-medium text-gray-800">Recent</h2>
                {
                    activities.map((activity) => (
                        <Card key={activity.title} className=' shadow-none bg-zinc-100/50'>
                        <CardBody className='flex-row justify-between' >
                            <div>
                            <span className='text-2xl'>{activity.title}</span>
                            <p className='text-sm'>{activity.user}</p>
                            </div>
                            <span>{activity.date}</span>
                        </CardBody>
                    </Card>
                    ))
                }
                    
                </div>
            </div>
        </div>
    );
};