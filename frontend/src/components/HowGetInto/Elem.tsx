import { Step } from "./HowGetInto"

type Props = {
    obj: Step
}

export function Elem({ obj }: Props) {
    return (
        <div className="bg-bg rounded-2xl p-[20px]">
            <div className='flex gap-x-[30px] items-center'>
                <div className='w-fit text-[36px] text-white py-[10px] px-[40px] rounded-4xl bg-[#151515]'>{obj.id}</div>
                <div className='text-[36px] text-white'>{obj.title}</div>
            </div>
            <div className='text-[18px] text-[#a3a3a3] mt-[20px]'>{obj.desc}</div>
        </div>
    )
}