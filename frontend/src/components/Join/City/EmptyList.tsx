import { cn } from "@/lib/utils"

type Props = {
    open: boolean
}

export function EmptyList({ open }: Props) {
    return (
        <div className={cn(
            'z-10 bg-bg px-[20px] py-[10px] rounded-2xl w-[600px] text-white text-[18px]',
            'flex flex-col gap-y-[10px]',
            'absolute top-[120px] transition-[opacity,h] duration-300',
            open
                ? 'opacity-100 h-[250px] overflow-y-auto'
                : 'opacity-0 h-[0px] invisible'
        )}>
            Список пуст
        </div>
    )
}