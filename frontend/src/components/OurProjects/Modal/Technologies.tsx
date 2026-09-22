import { GetProject } from "@/types/project";

type Elem = {
    technologyId: string
    name: string              
    slug:     string 
    iconUrl?:  string
    bgColor?: string
    colorText?: string
}

const listTechnologies: Elem[] = [
  { technologyId: 'tech_react',       name: 'React',        colorText: '', slug: 'react',       iconUrl: '/icons/react.svg',       bgColor: '#61DAFB' },
  { technologyId: 'tech_nextjs',      name: 'Next.js',      colorText: '', slug: 'nextjs',      iconUrl: '/icons/nextjs.svg',      bgColor: '#000000' },
  { technologyId: 'tech_typescript',  name: 'TypeScript',   colorText: '#61DAFB', slug: 'typescript',  iconUrl: '/icons/typescript.svg',  bgColor: '#3178C6' },
  { technologyId: 'tech_javascript',  name: 'JavaScript',   colorText: '', slug: 'javascript',  iconUrl: '/icons/javascript.svg',  bgColor: '#F7DF1E' },
  { technologyId: 'tech_tailwind',    name: 'Tailwind CSS', colorText: '', slug: 'tailwind',    iconUrl: '/icons/tailwind.svg',    bgColor: '#06B6D4' },
  { technologyId: 'tech_nodejs',      name: 'Node.js',      colorText: '', slug: 'nodejs',      iconUrl: '/icons/nodejs.svg',      bgColor: '#339933' },
  { technologyId: 'tech_express',     name: 'Express',      colorText: '#61DAFB', slug: 'express',     iconUrl: '/icons/express.svg',     bgColor: '#000000' },
  { technologyId: 'tech_postgresql',  name: 'PostgreSQL',   colorText: '', slug: 'postgresql',  iconUrl: '/icons/postgresql.svg',  bgColor: '#4169E1' },
  { technologyId: 'tech_mongodb',     name: 'MongoDB',      colorText: '', slug: 'mongodb',     iconUrl: '/icons/mongodb.svg',     bgColor: '#47A248' },
  { technologyId: 'tech_prisma',      name: 'Prisma',       colorText: '#61DAFB', slug: 'prisma',      iconUrl: '/icons/prisma.svg',      bgColor: '#2D3748' },
  { technologyId: 'tech_docker',      name: 'Docker',       colorText: '', slug: 'docker',      iconUrl: '/icons/docker.svg',      bgColor: '#2496ED' },
  { technologyId: 'tech_git',         name: 'Git',          colorText: '', slug: 'git',         iconUrl: '/icons/git.svg',         bgColor: '#F05032' },
  { technologyId: 'tech_figma',       name: 'Figma',        colorText: '', slug: 'figma',       iconUrl: '/icons/figma.svg',       bgColor: '#F24E1E' },
  { technologyId: 'tech_photoshop',   name: 'Photoshop',    colorText: '', slug: 'photoshop',   iconUrl: '/icons/photoshop.svg',   bgColor: '#31A8FF' },
  { technologyId: 'tech_illustrator', name: 'Illustrator',  colorText: '', slug: 'illustrator', iconUrl: '/icons/illustrator.svg', bgColor: '#FF9A00' },
  { technologyId: 'tech_aftereffects',name: 'After Effects',colorText: '', slug: 'aftereffects',iconUrl: '/icons/aftereffects.svg',bgColor: '#9999FF' },
  { technologyId: 'tech_premiere',    name: 'Premiere Pro', colorText: '#61DAFB', slug: 'premiere',    iconUrl: '/icons/premiere.svg',    bgColor: '#9999FF' },
  { technologyId: 'tech_blender',     name: 'Blender',      colorText: '', slug: 'blender',     iconUrl: '/icons/blender.svg',     bgColor: '#F5792A' },
  { technologyId: 'tech_python',      name: 'Python',       colorText: '', slug: 'python',      iconUrl: '/icons/python.svg',      bgColor: '#3776AB' },
  { technologyId: 'tech_vite',        name: 'Vite',         colorText: '', slug: 'vite',        iconUrl: '/icons/vite.svg',        bgColor: '#646CFF' },
]; 

export function Technologies({obj}: {obj: GetProject}) {


    return(
        <div className='flex items-center gap-x-[10px] mt-[20px]'>
            <div className='text-white'>Список технологий проекта:</div>
            <div className='flex  gap-x-[10px] gap-y-[10px] items-center flex-wrap w-[800px]'>
                {
                    listTechnologies.map((obj, index) => {
                        return(
                            <div key={index} className="py-[2px] px-[15px] rounded-2xl text-[16px]" 
                                style={{
                                    backgroundColor: obj.bgColor ?? 'black',
                                    color: obj.bgColor && obj.bgColor !== '#000000' ? obj.colorText ?? 'white' : 'white',
                                    }}>
                                {obj.name}
                            </div>
                        )
                    })                   
                }
            </div>
        </div>
    )
}