import { cn } from "@/lib/utils"
import { GetCreator } from "@/types/creator"
import { UserCircle2 } from "lucide-react"

type Props = {
    creator: GetCreator
}

export function Logo({ creator }: Props) {
    return (
        <div className='w-[500px] h-[calc(100vh-40px)] overflow-y-auto'>
            <UserCircle2 size={200} color="white" strokeWidth={0.5} className="mx-auto" />
            <div className='text-white text-[30px] text-center'>{creator.name}</div>
            <div className='text-gray-400 text-[18px] my-[20px] bg-bg p-[20px] rounded-2xl whitespace-pre-line'>
                {creator.bio}
            </div>
            <div className='text-[20px] text-white bg-bg rounded-2xl p-[20px] flex items-center gap-x-[10px]'>
                Роль:
                <div className={cn()} style={{ color: creator.colorText }}>{creator.role}</div>
            </div>
        </div>
    )
}