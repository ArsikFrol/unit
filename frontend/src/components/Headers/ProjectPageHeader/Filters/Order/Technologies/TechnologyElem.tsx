import { type Technology } from "@/types/technology";

type Props = {
    obj: Technology,
    setListAddTech: (value: Technology[]) => void
}

export function TechnologyElem({obj}: Props) {
    return (
        <div className="rounded-2xl px-[10px] py-[5px] w-fit h-[35px]"
            style={{
                background: obj.bgColor ?? 'black',
                color: obj.colorText ?? 'white'
            }}>
            {obj.name}
        </div>
    )
}