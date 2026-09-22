import { cn } from "@/lib/utils";

export default function Title({ title }: { title: string }) {
    return (
        <div className={cn(
            "lg:text-[96px] font-extralight text-center text-white pb-[25px]",
            'md:text-[52px]',
            'max-md:text-[40px]'
        )}>
            {title}
        </div>
    )
}