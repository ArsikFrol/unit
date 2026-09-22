'use client'

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image, { StaticImageData } from "next/image"

type Props = {
    images: StaticImageData[],
    interval?: number
}

export default function Carousel({ images, interval = 3000 }: Props) {

    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [Autoplay({
            delay: interval,
            stopOnInteraction: false
        })]
    )

    return (
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
                {images.map((img, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                        <Image src={img} alt="" draggable="false" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                ))}
            </div>
        </div>
    )
}