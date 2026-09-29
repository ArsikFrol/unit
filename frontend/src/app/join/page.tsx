import Header from "@/components/Headers/Header";
import { Join } from "@/components/Join/Join";
import Title from "@/components/UI/Title";

export default function page() {
    return (
        <>
            <Header showIdModal="" />
            <Title title="Анкета для вступления в ЮНИТ" />
            <Join />
        </>
    )
}