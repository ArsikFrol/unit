'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { projectFormSchema, type ProjectFormData } from '@/lib/schemas';
import { University } from './University';
import { InputForForm } from '../UI/InputForForm';
import { cn } from '@/lib/utils';
import { City } from './City/City';

export function Join() {
    const defaultValues = {
        FIO: '',
        linkToTG: '',
        linkToVK: '',
        linkToWorks: ''
    }

    const {
        handleSubmit,
        formState,
        control
    } = useForm<ProjectFormData>({
        resolver: zodResolver(projectFormSchema),
        mode: 'onTouched',
        defaultValues,
    });

    const onSubmit = async (data: ProjectFormData) => {
        console.log('Валидные данные:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-[40px]'>
            <InputForForm name="FIO" width={600} control={control}
                placeholder="Введите свое ФИО" title='ФИО'
            />
            <City />
            {/* <University /> */}
            <InputForForm name='linkToVK' width={600} control={control}
                placeholder='https://vk.com/username' title='Ссылка на VK' />
            <InputForForm name='linkToTG' width={600} control={control}
                placeholder='https://t.me/username или @username' title='Ссылка на TG' />
            <InputForForm name='linkToGitHub' width={600} control={control} necessarily={false}
                placeholder='https://github.com/username' title='Ссылка на ваш GitHub' />
            <button type="submit" disabled={formState.isSubmitting}
                className={cn(
                    'text-[36px] bg-white rounded-2xl w-[500px] mx-auto mb-[100px] mt-[50px]',
                    'hover:translate-y-[-3px] transition-transform duration-300 cursor-pointer'
                )}>
                {formState.isSubmitting ? 'Отправка...' : 'Отправить заявку!'}
            </button>
        </form>
    )
}