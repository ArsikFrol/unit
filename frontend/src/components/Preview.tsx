import Image from "next/image";

import preview from '../../public/preview.svg'

export default function Preview() {
    return(
        <Image alt="preview" src={preview} className="mt-[90px]"/>
    )
}