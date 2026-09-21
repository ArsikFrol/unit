import { GetProject } from "@/types/project";
import Image from "next/image";

export default function Logo({ obj }: { obj: GetProject }) {
    return (
        <div className='flex gap-x-[40px]'>
            <Image src={obj.imageLogo} alt='' width={160} height={160} draggable='false'
                className="rounded-2xl" />
            <div className='flex flex-col gap-y-[10px]'>
                <div className='self-start py-[5px] px-[20px] bg-black rounded-2xl text-white text-center font-medium'>
                    {obj.status}
                </div>
                <div className='text-[36px] text-white'>{obj.title}</div>
            </div>
        </div>
    )
}