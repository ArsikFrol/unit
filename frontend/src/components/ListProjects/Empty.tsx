import { cn } from "@/lib/utils";

export function Empty() {
    return(
        <div className="relative h-screen">
                    <div className={cn(
                        'text-white text-[25px]',
                        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    )}>
                        Список проектов пуст
                    </div>
                </div>
    )
}