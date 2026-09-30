import { Technology } from "@/types/technology";

export function AddedElem({obj}: {obj: Technology}) {
    return(
        <div className="">
            {obj.name}
        </div>
    )
}