'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { projectFormSchema, type ProjectFormData } from '@/lib/schemas';
import { cn } from '@/lib/utils';

export function Join() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ProjectFormData>({
        resolver: zodResolver(projectFormSchema),
        mode: 'onBlur',
        defaultValues: {
            FIO: '',
        },
    });

    const onSubmit = async (data: ProjectFormData) => {
        console.log('Валидные данные:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="text-center">
                <div className='text-[36px] text-white'>ФИО <span className='text-red-600 text-[36px]'>*</span></div>
                <input {...register('FIO')} placeholder='Введите свое ФИО' className={cn(
                    'border border-white rounded-2xl py-[10px] px-[20px] w-[600px] text-white text-[20px]',
                    'focus:outline-0'
                )} />
                {errors.FIO && <p className="text-red-500 font-light mt-[5px]">{errors.FIO.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Создать проект'}
            </button>
        </form>
    )
}