import { cn } from "@/lib/utils";
import Title from "./UI/Title";

export function Contacts() {
    const baseClassName = [
        'bg-[#5c5c5c] rounded-2xl py-[10px] text-center text-white text-[24px]',
        'hover:translate-y-[-5px] transition-all duration-300 cursor-pointer',
    ]

    return (
        <div className="mb-[100px]">
            <Title title="Контакты" />
            <div className='text-center text-white text-[24px] w-[1000px] mx-auto mb-[20px]'>
                По поводу сотрудничества и по вопросам вступления обращайтесь в наши сообщества. Мы ответим вам в течение 1-3 рабочих дней.
            </div>
            <div className='flex flex-col gap-y-[20px]'>
                <div className='flex items-center gap-x-[40px]'>
                    <div className={cn('w-full', baseClassName)}>
                        Сообщетсово Вконтакте УрГЭУ
                    </div>
                    <div className={cn('w-full', baseClassName)}>
                        Сообщетсово Вконтакте УрФУ
                    </div>
                </div>
                <div className={cn(
                    'text-center text-white text-[24px] w-[700px] mx-auto',
                    baseClassName
                )}>
                    Сообщество Телеграмм
                </div>
            </div>
        </div>
    )
}