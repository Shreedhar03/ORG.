import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Events() {
    interface Event {
        organisor: string,
        heading: string
    }
    const eventsData: Event[] = [
        { organisor: "DevKraft", heading: "1 day bootcamp on Python programming by experts." },
        { organisor: "GDSC DIT", heading: "3 day hackathon open for all colleges in pune." },
        { organisor: "GDSC DIT", heading: "3 day hackathon open for all colleges in pune." },
        { organisor: "GDSC DIT", heading: "3 day hackathon open for all colleges in pune." },
        { organisor: "GDSC DIT", heading: "3 day hackathon open for all colleges in pune." },
        { organisor: "GDSC DIT", heading: "3 day hackathon open for all colleges in pune." }
    ]
    return (
        <section className='bg-white rounded-2xl p-4 h-1/2 overflow-y-scroll'>
            <h1 className='font-semibold text-lg'>Events</h1>
            {
                eventsData.map((event, key) => {
                    return (
                        <div key={key} className='p-3 border-2 border-border rounded-xl mt-1'>
                            <p className='text-sm font-medium'>{event.heading}</p>
                            <div className='flex items-center justify-between mt-2'>
                                <p className='text-sm text-secondary-foreground'>by <Link href={'/home'} className='underline underline-offset-4 text-primary'>{event.organisor}</Link></p>
                                <Button className='rounded-2xl text-xs h-8'>Interested</Button>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
