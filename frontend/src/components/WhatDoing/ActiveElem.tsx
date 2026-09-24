import { cn } from "@/lib/utils"

type Props = {
    selectedIndex: number,
    setSelectedIndex: (value: number) => void

    cols: number
}

export default function ActiveElem(props: Props) {
    const clickElem = (elem: number) => {
        props.setSelectedIndex(elem)
    }

    return (
        <div className="grid gap-x-[30px] mb-[10px]"
            style={{ gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))` }}>
            {
                [...Array(4)].map((_, index) => {
                    return (
                        <div key={index} className={cn(
                            'h-[10px] rounded-2xl transition-all duration-500',
                            props.selectedIndex === index
                                ? 'bg-[#6a6a6a]'
                                : 'bg-bg hover:scale-105 cursor-pointer'
                        )} onClick={() => clickElem(index)} ></div>
                    )
                })
            }
        </div>
    )
}