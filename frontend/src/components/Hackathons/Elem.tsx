import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Hack } from "./Hackathons";
import { cn } from "@/lib/utils";

export default function Elem({ obj }: { obj: Hack }) {
    return (
        <div className='bg-bg rounded-2xl h-[470px] grid grid-cols-[auto_835px]'>
            <div className='py-[40px] pl-[40px] flex flex-col justify-between'>
                <div className=''>
                    <Image src={obj.imageTitle} alt='' width={480} height={80} draggable='false' />
                    <div className='text-white mt-[40px] w-[600px]'>{obj.desc}</div>
                </div>
                {obj.link &&
                    <div className={cn(
                        'group w-fit flex items-center gap-x-[10px] text-white/50',
                        'hover:text-white transition-all duration-300 cursor-pointer'
                    )}>
                        {obj.link}
                        <ArrowUpRight strokeWidth={1} className={cn(
                            'group-hover:translate-x-[3px] group-hover:translate-y-[-3px] transition-all duration-300'
                        )} />
                    </div>
                }
            </div>
            <div className="relative rounded-2xl bg-black w-[835px] h-[470px]">
                <iframe
                    src="https://vkvideo.ru/video_ext.php?oid=-237411666&id=456239019&hash=8ed73c96ed290ef1"
                    className="absolute inset-0 w-[835px] h-[470px] rounded-r-2xl"
                    allowFullScreen
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    style={{ border: 0 }} />
            </div>
        </div>
    )
}