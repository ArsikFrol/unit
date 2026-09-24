import { cn } from "@/lib/utils";
import { GetProject } from "@/types/project";
import Image from "next/image";

export default function Logo({ obj, isSmall }: { obj: GetProject, isSmall: boolean }) {
    return (
        <div className='flex gap-x-[40px]'>
            <Image src={obj.imageLogo} alt='' draggable='false' className="rounded-2xl"
                width={isSmall ? 100 : 160} height={isSmall ? 100 : 160} />
            <div className='flex flex-col gap-y-[10px]'>
                <div className='self-start py-[5px] px-[20px] bg-black rounded-2xl text-white text-center font-medium'>
                    {obj.status === 'completed'
                        ? 'Завершен'
                        : 'В разработке'
                    }
                </div>
                <div className={cn(
                    'text-white',
                    isSmall ? 'text-[25px]' : 'text-[36px]'
                )}>{obj.title}</div>
            </div>
        </div>
    )
}