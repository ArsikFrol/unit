import { GetCreator } from "@/types/creator"
import { UserCircle2 } from "lucide-react"

type Props = {
    creator: GetCreator
}

export function Logo({ creator }: Props) {
    return (
        <div className=''>
            <UserCircle2 size={200} color="white" strokeWidth={0.5} />
            <div className='text-white text-[30px]'>{creator.name}</div>
            <div className='text-gray-400'>{creator.bio}</div>
            <div className='text-white'>Роль: {creator.role}</div>
        </div>
    )
}