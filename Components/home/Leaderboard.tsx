import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Leaderboard() {
    interface Person {
        name: string,
        username: string
        points: number,
        image: string
    }
    const leaderBoardData: Person[] = [
        { name: "Yash Marathe", username: "yash36", points: 56, image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Smriti Joe", username: "smriti_j", points: 49, image: "https://randomuser.me/api/portraits/women/84.jpg" },
        { name: "Ishan Patil", username: "alex_patil", points: 42, image: "https://randomuser.me/api/portraits/men/70.jpg" },
    ]
    return (
        <section className='bg-white rounded-2xl p-4 h-1/2 overflow-y-scroll w-full'>
            <h1 className='font-semibold text-lg'>Leaderboard</h1>
            {
                leaderBoardData.map((leader, key) => {
                    return (
                        <div key={key} className='flex flex-row lg:flex-col-reverse xl:flex-row justify-between p-3 border-2 border-border rounded-xl mt-1'>
                            <div className='flex items-start gap-2'>
                                <Image src={leader.image} alt='user' width={45} height={45} className='rounded-full object-cover' />
                                <div className='flex flex-col'>
                                    <p className='text-base leading-4 font-medium'>{leader.name}</p>
                                    <p className='text-sm leading-4 text-muted-foreground'>@{leader.username}</p>
                                </div>
                            </div>
                            <h2>
                                <span className='text-primary font-bold justify-self-end text-lg xl:text-base mb-2 lg:mb-0'>{leader.points}</span>
                                <span className='text-muted-foreground'>pts</span>
                            </h2>
                        </div>
                    )
                })
            }
        </section>
    )
}
