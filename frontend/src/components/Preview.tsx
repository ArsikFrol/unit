import Image from "next/image";

import preview from '../../public/preview.svg'
import { cn } from "@/lib/utils";

export default function Preview() {
    return (
        <Image alt="preview" src={preview} className={cn(
            "w-[calc(100%-40px)] h-auto mx-auto"
        )} id="preview" />
    )
}