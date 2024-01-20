import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import Projects from './Projects'
import Bootcamps from './Bootcamps'


export default function Feed() {
    return (
        <section className='bg-white rounded-2xl p-5 h-[calc(100vh-150px)] w-full overflow-y-scroll'>
            <Tabs defaultValue="projects" className="w-full">
                <TabsList>
                    <TabsTrigger value="projects" className='data-[state=active]:bg-primary data-[state=active]:text-white'>Projects</TabsTrigger>
                    <TabsTrigger value="bootcamps" className='data-[state=active]:bg-primary data-[state=active]:text-white'>Bootcamps</TabsTrigger>
                </TabsList>
                <TabsContent value="projects">
                    <Projects />
                </TabsContent>
                <TabsContent value="bootcamps">
                    <Bootcamps />
                </TabsContent>
            </Tabs>
        </section>
    )
}
