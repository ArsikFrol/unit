import { z } from 'zod';

export const projectFormSchema = z.object({
    FIO: z.string()
        .trim()
        .min(10, 'ФИО должно быть не короче 10 символов')
        .max(50, 'ФИО должно быть не длиннее 50 символов')
        .regex(/^[А-Яа-яЁёA-Za-z\s-]+$/, 'ФИО может содержать только буквы, пробел и дефис')
        .refine((v) => !/\s{2,}/.test(v), {
            message: 'Несколько пробелов подряд',
        }),

    UNIVERSITY: z.string()
        .trim(),

});

export type ProjectFormData = z.infer<typeof projectFormSchema>;