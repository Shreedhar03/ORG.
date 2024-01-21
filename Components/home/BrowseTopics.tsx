import React from 'react'
import { Button } from '../ui/button';

export default function BrowseTopics() {
    interface Topic {
        title: string
    }
    const topics: Topic[] = [
        { title: "JS Frameworks" },
        { title: "Python/Ruby" },
        { title: "Swift iOS" },
        { title: "Java Updates" },
        { title: "Functional Programming and something with it" },
        { title: "TypeScript Basics" },
        { title: "Rust Language" },
        { title: "ML & AI" },
        { title: "Kotlin Android" },
        { title: "WebAssembly Intro" },
        { title: "GraphQL Basics" },
        { title: "Go (Golang)" },
        { title: "C# .NET" },
        { title: "Scala Fundamentals" },
        { title: "JS PWAs" },
        { title: "Blockchain Overview" },
        { title: "Cloud Computing" },
        { title: "Cybersecurity Trends" },
        { title: "DevOps Practices" },
        { title: "API Security" },
        { title: "IoT Innovations" },
        { title: "Big Data Analytics" },
        { title: "UI/UX Design" },
        { title: "Augmented Reality" },
    ];

    return (
        <>
            <div className="bg-white top-28 rounded-2xl p-5 self-start hidden xl:flex flex-col gap-3 h-[calc(100vh-150px)] overflow-y-scroll">
                <h1 className='text-lg font-semibold mb-2'>Browse Topics</h1>
                {
                    topics.map((t,key)=>{
                        return(
                            <div key={key} className='flex items-center justify-between gap-4 border-2 border-border rounded-xl p-3'>
                                <h2 className='text-[15px] font-medium w-72 text-ellipsis'>{t.title}</h2>
                                <Button className='rounded-3xl text-xs h-8'>Follow</Button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
