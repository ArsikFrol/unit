'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect } from 'react'
import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { MoveLeft, MoveRight } from 'lucide-react'
import { ElemCarousel } from '../WhatDoing/WhatDoing'

type Props = {
    listObj: ElemCarousel[],

    selectedIndex: number,
    setSelectedIndex: (value: number) => void
}

export function WhatDoingCarousel({ listObj, setSelectedIndex, selectedIndex }: Props) {

    const interval = 12000

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: interval, stopOnInteraction: false })]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    useEffect(() => {
        if (!emblaApi) return
        if (emblaApi.selectedScrollSnap() === selectedIndex) return
        emblaApi.scrollTo(selectedIndex)
    }, [emblaApi, selectedIndex])

    return (
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex -mx-[30px]">
                {listObj.map((obj, index) => (
                    <div key={index} className={cn(
                        "flex-[0_0_calc(100%-60px)] min-w-0 flex gap-x-[50px] h-[450px]",
                        'bg-bg rounded-2xl pl-[30px] mx-[30px]'
                    )}>
                        <div className='py-[40px] flex flex-col justify-between'>
                            <div className='text-[36px] text-white'>{obj.title}</div>
                            <div className='text-[#A3A3A3] text-[18px] w-[600px]'>{obj.desc}</div>
                            <div className='flex items-center gap-x-[50px] '>
                                <div className={cn(
                                    'group px-[20px] bg-[#5c5c5c] rounded-2xl',
                                    'hover:bg-[#6a6a6a] transition-transform duration-300 cursor-pointer'
                                )} onClick={() => setSelectedIndex(selectedIndex - 1)}>
                                    <MoveLeft size={50} strokeWidth={1}
                                        className={cn(
                                            'group-hover:translate-x-[-5px] transition-all duration-300',
                                            'group-hover:text-white/50'
                                        )} />
                                </div>
                                <div className={cn(
                                    'group flex items-center gap-x-[20px] text-[25px] px-[20px] bg-[#5c5c5c] rounded-2xl',
                                    'hover:text-white/50',
                                    'hover:scale-101 hover:bg-[#6a6a6a] transition-all duration-300 cursor-pointer'
                                )} onClick={() => setSelectedIndex(selectedIndex + 1)}>
                                    А еще?
                                    <MoveRight size={50} strokeWidth={1}
                                        className='group-hover:translate-x-[5px] transition-transform duration-300' />
                                </div>
                            </div>
                        </div>
                        <Image src={obj.image} alt={obj.altImage} draggable="false"
                            className="w-full h-full object-cover rounded-2xl" />
                    </div>
                ))}
            </div>
        </div>
    )
}