import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import Projects from './Projects'
import Bootcamps from './Bootcamps'


export default function Feed() {
    return (
        <section className='bg-white rounded-2xl pb-5 h-[calc(100vh-150px)] w-full overflow-y-scroll'>
            <Tabs defaultValue="projects" className="w-full">
                <TabsList className='sticky top-0 bg-white z-30 w-full py-8 px-5 flex justify-start'>
                    <TabsTrigger value="projects" className='data-[state=active]:border-b-2 data-[state=active]:border-b-primary w-1/2 md:w-auto data-[state=active]:text-primary rounded-none'>Projects</TabsTrigger>
                    <TabsTrigger value="bootcamps" className='data-[state=active]:border-b-2 data-[state=active]:border-b-primary w-1/2 md:w-auto data-[state=active]:text-primary rounded-none'>Bootcamps</TabsTrigger>
                </TabsList>
                <TabsContent value="projects" className='px-5 pb-5'>
                    <Projects />
                </TabsContent>
                <TabsContent value="bootcamps" className='px-5 pb-5'>
                    <Bootcamps />
                </TabsContent>
            </Tabs>
        </section>
    )
}
