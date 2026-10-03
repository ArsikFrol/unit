import { cn } from "@/lib/utils";
import { Technology } from "@/types/technology";
import { TechSlug } from "../../../../../../../../backend/prisma/constans";

type Props = {
    obj: Technology,
    clickRemoveTech: (slug: TechSlug) => void
}

export function AddedElem({ obj, clickRemoveTech }: Props) {
    return (
        <div className={cn(
            "rounded-2xl px-[10px] py-[5px] w-fit h-[35px]",
        )} style={{
            background: obj.bgColor ?? 'black',
            color: obj.colorText ?? 'white'
        }} onClick={() => clickRemoveTech(obj.slug)}>
            {obj.name}
        </div>
    )
}