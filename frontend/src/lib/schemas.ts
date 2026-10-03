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
    linkToVK: z.string()
        .trim()
        .nonempty('Напишите ссылку')
        .min(5, 'Ссылка слишком короткая')
        .refine(
            (val) => /^(https?:\/\/)?(www\.)?(vk\.com|vkontakte\.ru)\/.+$/i.test(val),
            'Введите корректную ссылку на ВК (например, https://vk.com/username)'
        ),

    linkToTG: z.string()
        .trim()
        .nonempty('Напишите ссылку')
        .min(5, 'Ссылка слишком короткая')
        .refine(
            (val) => /^https:\/\/t\.me\/[a-zA-Z0-9_]{5,32}\/?$/.test(val),
            'Ссылка должна быть в формате https://t.me/username'
        ),

    linkToGitHub: z.string()
        .trim()
        .transform((val) => {
            if (!val) return val
            if (!/^https?:\/\//i.test(val)) return `https://${val}`
            return val
        })
        .refine(
            (val) => {
                if (!val) return true
                return /^https:\/\/(www\.)?github\.com\/[a-zA-Z0-9._-]+\/?$/i.test(val)
            },
            'Введите корректную ссылку на GitHub (например, https://github.com/username)'
        )
        .optional()
        .or(z.literal('')),
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;