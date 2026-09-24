import { formatDate } from "@/lib/formatDate"
import { GetProject } from "@/types/project"

export default function Date({ obj }: { obj: GetProject }) {
    return (
        <div className='flex flex-col gap-y-[20px]'>
            <div className=''>
                <div className='text-[22px] text-white/70'>Дата начала разработки:</div>
                <div className='text-right text-[26px] text-white'>{formatDate(obj.startOfDevelopment)}</div>
            </div>
            {obj.endOfDevelopment &&
                <div className=''>
                    <div className='text-[22px] text-white/70'>Дата конца разработки:</div>
                    <div className='text-right text-[26px] text-white'>{formatDate(obj.endOfDevelopment)}</div>
                </div>
            }
        </div>
    )
}