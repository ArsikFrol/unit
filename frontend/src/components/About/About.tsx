import Title from "../UI/Title"
import { ElemOne } from "./ElemOne"
import { ElemTwo } from "./ElemTwo"

export default function About() {

    return (
        <div className="my-[100px]" id='about'>
            <Title title="Кто мы такие" />
            <div className="flex flex-col gap-y-[30px]">
                <ElemOne />
                <ElemTwo />
            </div>
        </div>
    )
}