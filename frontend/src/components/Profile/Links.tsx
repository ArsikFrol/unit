import { FaGithub, FaGlobe, FaTelegram, FaVk } from 'react-icons/fa'

import { cn } from "@/lib/utils"
import { creatorLink } from "@/types/creator"
import { LinkType } from '../../../../backend/src/generated/prisma/enums'

type Props = {
    links: creatorLink[]
}

const linkIcon: Record<LinkType, React.ReactNode> = {
    GITHUB: <FaGithub size={30} color="white" />,
    TELEGRAM: <FaTelegram size={30} color="white" />,
    VK: <FaVk size={30} color="white" />,
    PORTFOLIO: <FaGlobe size={30} color="white" />,
}

export function Links({ links }: Props) {
    return (
        <div className="p-[20px] bg-bg rounded-2xl mt-[20px] flex flex-col gap-y-[15px]">
            {
                links.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'flex items-center gap-x-[10px]',
                        )}>
                            <div className=''>{linkIcon[obj.type]}</div>
                            <div className='text-[18px] text-white'>{obj.url}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}