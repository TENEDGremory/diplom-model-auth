"use client"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {

  return (
    <main className="relative flex flex-col items-center justify-center h-[90vh] w-full">
      <div className="absolute z-20 top-0">
        <Image
          src="/logo.png"
          alt="werfest"
          width={100}
          height={100}
          className="flex items-center justify-center drop-shadow-lg mx-auto"
        />
        <div className="space-y-6 text-center">
          <h1 className={cn(
            "text-6xl font-semibold drop-shadow-xl text-center text-white",
            font.className
          )}>
            WERFEST
          </h1>
        </div>
      </div>
      <Carousel className="absolute z-10 " plugins={[Autoplay({ delay: 5000 })]}>
        <CarouselContent>
          <CarouselItem className="flex items-center justify-center rounded-lg">
            <Image src="/costume/home_1.jpg" width={1792} height={900} alt="Home image" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image src="/costume/home_2.jpg" width={1792} height={900} alt="Home image" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image src="/costume/home_3.jpg" width={1792} height={900} alt="Home image" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image src="/costume/home_4.jpg" width={1792} height={900} alt="Home image" />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image src="/costume/home_5.jpg" width={1792} height={900} alt="Home image" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
}
