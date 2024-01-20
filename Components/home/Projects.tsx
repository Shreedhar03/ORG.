import { Circle } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import CircleDivider from '../CircleDivider';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function Projects() {
  interface Project {
    ownerName: string,
    ownerUserName: string,
    ownerImage: string,
    ownerDept: string,
    ownerInstitute: string,
    projectTitle: string,
    projectDesc: string,
  }

  const projectData: Project[] = [
    {
      ownerName: 'Aniket Naran',
      ownerUserName: 'john_doe123',
      ownerImage: 'https://randomuser.me/api/portraits/lego/5.jpg',
      ownerDept: 'TE ENTC',
      ownerInstitute: 'PICT',
      projectTitle: 'React Project',
      projectDesc: 'Designed and developed a feature-rich web application using React.js. The project includes stateful components, global state management with Redux, and asynchronous data fetching with Axios. Additionally, responsive design was implemented for optimal user experience on various devices.',
    },
    {
      ownerName: 'Harsh Joshi',
      ownerUserName: 'jane_smith456',
      ownerImage: 'https://randomuser.me/api/portraits/lego/5.jpg',
      ownerDept: 'BE Comp',
      ownerInstitute: 'Another University',
      projectTitle: 'Node.js App',
      projectDesc: 'Architected and implemented a scalable Node.js application, utilizing Express.js for building robust RESTful APIs. Authentication was integrated with JWT tokens, and a real-time chat feature using Socket.io was designed. The application was deployed on Heroku for public access.',
    },
    {
      ownerName: 'Kunal Ketkar',
      ownerUserName: 'alex_j',
      ownerImage: 'https://randomuser.me/api/portraits/lego/5.jpg',
      ownerDept: 'FE IT',
      ownerInstitute: 'DYPIT',
      projectTitle: 'Python Automation',
      projectDesc: 'Developed Python scripts for automating complex tasks, including data processing, file manipulation, and system automation. Popular libraries such as Pandas, NumPy, and Selenium were utilized to enhance efficiency and reduce manual intervention in routine workflows.',
    },
    {
      ownerName: 'Rishabh Gandhi',
      ownerUserName: 'emily_wilson789',
      ownerImage: 'https://randomuser.me/api/portraits/lego/5.jpg',
      ownerDept: 'Biomedical Science',
      ownerInstitute: 'PCCOE',
      projectTitle: 'Data Visualization',
      projectDesc: 'Utilized data visualization libraries to create interactive charts and graphs. The project focused on enhancing the interpretation of complex datasets for research purposes, providing valuable insights through visual representation.',
    },
    {
      ownerName: 'Deepak Gupta',
      ownerUserName: 'sam_b',
      ownerImage: 'https://randomuser.me/api/portraits/lego/5.jpg',
      ownerDept: 'Business Administration',
      ownerInstitute: 'COEP',
      projectTitle: 'E-commerce Platform',
      projectDesc: 'Developed a fully functional e-commerce platform with secure payment integration, product management, and user-friendly interfaces. The project aimed to provide online businesses with a reliable and feature-rich solution for selling products/services.',
    },
  ];

  return (
    <div className='my-8'>
      {
        projectData.map((project, key) => {
          return (
            <div key={key} className='flex flex-col p-3 border-2 border-border mb-3 rounded-xl'>
              {/* Header */}
              <div className='flex items-center gap-3'>
                <Image src={project.ownerImage} width={40} height={40} className='rounded-full' alt='user' />
                <div className=''>
                  <Link href={'/home/{{userID}}/profile'} className='text-lg font-medium'>{project.ownerName}</Link>
                  <h3 className='text-primary opacity-60 text-sm font-semibold leading-3 flex gap-2 items-center'>
                    @{project.ownerUserName}<CircleDivider />
                    {project.ownerDept}<CircleDivider />
                    {project.ownerInstitute}
                  </h3>
                </div>
              </div>
              {/* Content */}
              <h1 className='text-xl opacity-80 font-semibold mt-5'>{project.projectTitle}</h1>
              <p className='mt-1 opacity-90 leading-5'>
                {project.projectDesc.substring(0, 200)}
                <Link href={'/home'} className='text-red-500 opacity-90 font-medium text-sm'>
                  ...show more
                </Link>
              </p>

              <Button className='self-end h-8 rounded-2xl'>Ask to Join</Button>
            </div>
          )
        })
      }
    </div>
  )
}
