import CircleDivider from '@/Components/CircleDivider'
import Image from 'next/image'
import React from 'react'
import image from '../../../../assets/ar.png'
import image2 from '../../../../assets/project-cover.jpg'
import facebook from '../../../../assets/facebook.svg'
import instagram from '../../../../assets/instagram.svg'
import whatsapp from '../../../../assets/whatsapp.svg'
import telegram from '../../../../assets/telegram.svg'
import github from '../../../../assets/github.svg'
import dpu from '../../../../assets/DPU.svg'
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
  const socialsLinks = [
    { image: facebook, url: "/home/{{userID}}/profile" },
    { image: instagram, url: "/home/{{userID}}/profile" },
    { image: whatsapp, url: "/home/{{userID}}/profile" },
    { image: github, url: "/home/{{userID}}/profile" },
    { image: telegram, url: "/home/{{userID}}/profile" },
  ]
  return (
    <main className='flex flex-col items-start my-6'>
      <section className='grid grid-cols-4 content-stretch gap-4'>
        <div className='bg-white p-6 rounded-2xl col-span-4 lg:col-span-2 xl:col-span-2 mt-16 sm:mt-0'>
          {/* header */}
          <div className='flex flex-col sm:flex-row items-center gap-3 relative'>
            <Image src={'https://randomuser.me/api/portraits/women/87.jpg'} alt='user' width={80} height={80}
              className='rounded-full shrink-0 w-36 sm:w-20 absolute -top-24 sm:top-0 sm:relative' />
            <div className='pt-16 sm:py-0'>
              <h1 className='text-2xl font-semibold opacity-80 text-center sm:text-left'>Siya Raghuwanshi</h1>
              <h3 className='flex flex-wrap text-primary opacity-65 text-base font-medium leading-5 sm:leading-6 gap-1 sm:gap-2 items-center justify-center sm:justify-start'>
                <span>@{"siya_r03"}</span>
                <CircleDivider />
                <span>{"TE-Computer"}</span>
                <CircleDivider />
                <span>{"DYPIT"}</span>
              </h3>
              <h4 className='text-secondary-foreground font-medium opacity-70 text-center sm:text-left'>Tech Lead @DSAII and Ex - Devkraft member</h4>
            </div>
          </div>

          {/* stats */}
          <section className='flex flex-wrap justify-center gap-4 mt-5 max-w-2xl'>
            {
              stats.map((stat, key) => {
                return (
                  <div key={key} className='flex flex-col items-center'>
                    <h1 className="text-2xl sm:text-4xl font-bold text-red-400 ">{stat.value}</h1>
                    <h1 className="">{stat.key}</h1>
                  </div>
                )
              })
            }
          </section>


        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 lg:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Bio</h2>
          <p className='leading-5 mt-1'>In my journey as a computer engineering student, I&apos;ve been exploring the fascinating intersection of data science, UI and UX designing, and machine learning.</p>
        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 sm:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Academics</h2>
          <div className='flex items-start gap-3 mt-1'>
              
                  <Image src={dpu} alt={'dpu'} width={50} height={50} />
                  <div>
                    <h2 className='leading-4 font-medium tracking-tight'>Dr. D. Y. Patil Institute of Technology</h2>
                    <h3 className='leading-5 opacity-80'>Pimpri, Pune</h3>
                  </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 sm:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-1 mt-1'>
            {
              ["React", "MERN stack", "Angular", "UI/UX", "Web3"].map((skill, key) => <>
                <div key={key} className='px-4 py-1 rounded-xl bg-[#C9CBFF] text-[#353DFF]'>{skill}</div>
              </>)
            }
          </div>

        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 sm:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Hobbies</h2>
          <p className='leading-5 mt-1'>Dancing, Cricket, Online Gaming, Reading Books, Finance.</p>
        </div>
        <div className='bg-white p-6 rounded-2xl col-span-4 sm:col-span-2 xl:col-span-1'>
          <h2 className='font-bold'>Socials</h2>
          <div className='flex flex-wrap gap-3 mt-1'>
            {
              socialsLinks.map((s, key) =>
                <Link href={s.url} key={key}>
                  <Image src={s.image} alt={'social'} width={30} height={30} />
                </Link>
              )
            }
          </div>
        </div>
        
      </section>

      {/* projects */}

      <h1 className='text-xl font-semibold my-4 self-center sm:self-start'>Projects</h1>
      <section className='flex gap-4 flex-wrap'>
        <div className='w-80 sm:w-80 h-48 relative rounded-2xl'
          style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${image.src}) no-repeat center/cover` }}>
          <Link href={'/home/{{userID}}/profile'} className='absolute bottom-2 left-2 text-white text-lg'>Virtual World Game</Link>
        </div>
        <div className='w-80 sm:w-80 h-48 relative rounded-2xl'
          style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${image2.src}) no-repeat center/cover` }}>
          <Link href={'/home/{{userID}}/profile'} className='absolute bottom-2 left-2 text-white text-lg'>Virtual World Game</Link>
        </div>
      </section>
    </main>

  )
}
