"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const About = () =>{
  return(
    <main className="flex flex-col items-center h-max w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 relative">
      <div className="md:w-[70%] w-full h-max shadow-lg space-y-10 p-10  text-white ">
        <section>
          <h1 className="mb-4 md:text-6xl text-4xl font-sans">О компании WERFEST</h1>
          <p className="text-2xl">Добро пожаловать в WERFEST – ваш универсальный магазин косплей одежды! Мы специализируемся на создании высококачественных костюмов, которые помогут вам воплотить в жизнь любимых персонажей из аниме, фильмов, видеоигр и комиксов.</p>
        </section>
        <section>
          <h1 className="mb-4 md:text-4xl text-2xl font-sans">Наша миссия</h1>
          <p className="text-2xl">Наша миссия – помочь вам раскрыть вашу креативность и самовыражение через косплей. Мы верим, что косплей – это не просто хобби, а способ самовыражения и объединения людей, разделяющих общие интересы и страсть к поп-культуре.</p>
        </section>
        <section>
          <h1 className="mb-4 text-4xl font-sans">Наши продукты</h1>
          <p className="text-2xl">В WERFEST мы предлагаем широкий ассортимент костюмов и аксессуаров, включая:</p>
          <ul className="text-2xl list-disc pl-10 space-y-4">
            <li>Аниме косплей: Костюмы для персонажей из популярных аниме-сериалов и фильмов.</li>
            <li>Кино и ТВ: Костюмы для героев из культовых фильмов и телевизионных шоу.</li>
            <li>Видеоигры: Наряды для персонажей из ваших любимых видеоигр.</li>
            <li>Комиксы и супергерои: Костюмы для персонажей из комиксов и супергеройских франшиз.</li>
            <li>Аксессуары: Парики, оружие, обувь и другие аксессуары, чтобы ваш образ был завершённым.</li>
          </ul>
          <Carousel className="mx-10 bg-black bg-opacity-40 rounded-3xl px-20 py-10"  >
            <CarouselContent className="items-center" >
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_1.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover" />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_2.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover"/>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_3.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover"/>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_4.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover"/>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_5.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover"/>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_6.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover"/>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_7.jpg' alt="werfest" width={300} height={450} className="max-w-[300px] max-h-[450px] object-cover"/>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section>
          <h1 className="mb-4 text-4xl font-sans">Почему выбирают нас</h1>
          <ul className="text-2xl list-disc pl-10 space-y-4">
            <li>Высокое качество: Мы используем только качественные материалы и уделяем внимание каждой детали, чтобы вы выглядели великолепно в любом костюме.</li>
            <li>Индивидуальный подход: Наши костюмы изготавливаются с учетом ваших индивидуальных мерок и предпочтений.</li>
            <li>Быстрая доставка: Мы понимаем, как важно получить заказ вовремя, поэтому обеспечиваем быструю и надежную доставку.</li>
            <li>Отличное обслуживание клиентов: Наша команда всегда готова помочь вам с выбором и ответить на все ваши вопросы.</li>
          </ul>
        </section>

        <section>
          <h1 className="mb-4 text-4xl font-sans">Наши ценности</h1>
          <p className="text-2xl">Мы стремимся к тому, чтобы каждый наш клиент остался доволен своим приобретением. В WERFEST мы придерживаемся принципов честности, прозрачности и уважения к нашим клиентам и партнёрам.</p>
        </section>
        <section>
          <h1 className="mb-4 text-4xl font-sans">Присоединяйтесь к сообществу WERFEST</h1>
          <p className="text-2xl">Мы приглашаем вас стать частью нашего дружного сообщества косплееров! Следите за нами в социальных сетях, чтобы быть в курсе новинок, акций и мероприятий, а также делитесь своими образами с хештегом #WERFEST.</p>
        </section>
      </div>
    </main>
  )
}


export default About;