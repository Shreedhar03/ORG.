import CircleDivider from '@/Components/CircleDivider'
import Image from 'next/image'
import React from 'react'
import image from '../../../../assets/ar.png'
import Link from 'next/link'

interface Stat {
  key: string,
  value: number
}
interface Project {
  title: string,
  image: string
}
export default function page() {

  const stats: Stat[] = [
    { key: "Ideas Posted", value: 7 },
    { key: "Contributions", value: 3 },
    { key: "Topics Followed", value: 12 }
  ]
  const projects: Project[] = [
    { title: "Ideas Posted", image: '' },
  ]
  return (
    <main className='flex flex-col items-start my-6'>
      <section className='grid grid-cols-4 content-stretch gap-4'>
        <div className='bg-white p-6 rounded-2xl col-span-4 lg:col-span-2 xl:col-span-2'>
          {/* header */}
          <div className='flex items-center gap-3'>
            <Image src={'https://randomuser.me/api/portraits/women/87.jpg'} alt='user' width={80} height={80}
              className='rounded-full' />
            <div>
              <h1 className='text-2xl font-semibold opacity-80'>Sayali Karad</h1>
              <h3 className='flex flex-wrap text-primary opacity-65 text-base break-all font-medium leading-6 gap-1 sm:gap-2 items-center'>
                @{"karad_sayali03"}<CircleDivider />
                {"TE-Computer"}<CircleDivider />
                {"DYPIT"}
              </h3>
              <h4 className='text-secondary-foreground font-medium opacity-70'>Secretary @DSAII and Ex - Devkraft member</h4>
            </div>
          </div>

          {/* stats */}
          <section className='flex flex-wrap gap-5 mt-5 max-w-96 mx-auto'>
            {
              stats.map((stat, key) => {
                return (
                  <div key={key} className='flex flex-col items-center'>
                    <h1 className="text-4xl font-bold text-red-400 ">{stat.value}</h1>
                    <h1 className="">{stat.key}</h1>
                  </div>
                )
              })
            }
          </section>


        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 lg:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Bio</h2>
          <p className='leading-5 mt-1'>In my journey as a computer engineering student, I've been exploring the fascinating intersection of data science, UI and UX designing, and machine learning.</p>
        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 lg:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-1 mt-1'>
            {
              ["React", "MERN stack", "Angular", "UI/UX", "Web3"].map((skill, key) => <>
                <div key={key} className='px-4 py-1 rounded-xl bg-[#C9CBFF] text-[#353DFF]'>{skill}</div>
              </>)
            }
          </div>

        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 lg:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Hobbies</h2>
          <p className='leading-5 mt-1'>Gamming, Cricket, Online Gaming, Reading Books, Finance.</p>
        </div>
      </section>

      {/* projects */}

      <h1 className='text-xl font-semibold mt-4 mb-2'>Projects</h1>
      <div className='flex gap-4'>
        <div className='w-80 sm:w-80 h-48 relative rounded-2xl'
          style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${image.src}) no-repeat center/cover` }}>
          <Link href={'/home/{{userID}}/profile'} className='absolute bottom-2 left-2 text-white text-lg'>Virtual World Game</Link>
        </div>

      </div>

    </main>

  )
}
