import { X } from "lucide-react"
import { Control, useController } from "react-hook-form"

import { ProjectFormData } from "@/lib/schemas"
import { cn } from "@/lib/utils"

type Props = {
    width: number,
    control: Control<ProjectFormData>

    title: string
    className?: string,
    placeholder: string,
    necessarily?: boolean

    name: keyof ProjectFormData
}

export function InputForForm({
    className, placeholder, width, name, control, title, necessarily = true
}: Props) {

    const { field, fieldState } = useController({ name, control })
    const error = fieldState.error

    const clickX = () => field.onChange('')

    return (
        <div className="mx-auto" style={{ width: `${width}px` }}>
            <div className='text-white text-[36px] mb-[5px]'>
                {title}
                {necessarily && <span className="text-red-500"> *</span>}
            </div>
            <div className='relative'>
                <input value={field.value} onChange={field.onChange} onBlur={field.onBlur}
                    spellCheck='false' style={{ width: `${width}px` }}
                    className={cn(
                        'border border-white rounded-2xl py-[10px] px-[20px] w-[600px] text-white text-[20px]',
                        'focus:outline-0',
                        error && 'border-red-500',
                        className
                    )} placeholder={placeholder} />
                {error && <p className="text-red-500 font-light mt-[5px]">{error.message}</p>}
                <X size={35} strokeWidth={1} onClick={clickX} className={cn(
                    'absolute right-[20px] top-[7px]',
                    'text-white transition-all duration-300 hover:scale-105 cursor-pointer',
                    field.value
                        ? 'opacity-100 translate-x-[0px]'
                        : 'opacity-0 translate-x-[5px]'
                )} />
            </div>
        </div>
    )
}