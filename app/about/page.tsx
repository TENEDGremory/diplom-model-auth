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



const About = () => {
  const className = "w-[300px] h-[450px] object-cover"
  const section = "my-[20px] p-[20px] bg-white bg-opacity-10 rounded-xl shadow-lg"
  const sectionH1 = "mb-[10px] text-3xl text-cyan-500"
  const sectionPUl = "mb-[10px] text-white text-2xl"

  return (
    <main className="font-sans leading-relaxed text-white flex justify-center items-center min-h-[100vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 relative">
      <div className="w-[80%] m-5 bg-black bg-opacity-70 p-5 rounded-2xl shadow-lg">
        <h1 className="text-center py-5 border-b-2 border-indigo-900 text-5xl text-cyan-500">О компании WERFEST</h1>
        <section className={section}>
          <p className={sectionPUl}>Добро пожаловать в WERFEST – ваш универсальный магазин косплей одежды! Мы специализируемся на создании высококачественных костюмов, которые помогут вам воплотить в жизнь любимых персонажей из аниме, фильмов, видеоигр и комиксов.</p>
        </section>
        <section className={section}>
          <h1 className={sectionH1} >Наша миссия</h1>
          <p className={sectionPUl}>Наша миссия – помочь вам раскрыть вашу креативность и самовыражение через косплей. Мы верим, что косплей – это не просто хобби, а способ самовыражения и объединения людей, разделяющих общие интересы и страсть к поп-культуре.</p>
        </section>
        <section className={section}>
          <h1 className={sectionH1}>Наши продукты</h1>
          <p className={sectionPUl}>В WERFEST мы предлагаем широкий ассортимент костюмов и аксессуаров, включая:</p>
          <ul className={sectionPUl + " list-disc pl-5 space-y-[10px]"}>
            <li>Аниме косплей: Костюмы для персонажей из популярных аниме-сериалов и фильмов.</li>
            <li>Кино и ТВ: Костюмы для героев из культовых фильмов и телевизионных шоу.</li>
            <li>Видеоигры: Наряды для персонажей из ваших любимых видеоигр.</li>
            <li>Комиксы и супергерои: Костюмы для персонажей из комиксов и супергеройских франшиз.</li>
            <li>Аксессуары: Парики, оружие, обувь и другие аксессуары, чтобы ваш образ был завершённым.</li>
          </ul>
          <Carousel className="mx-10 rounded-3xl px-20 py-10"  >
            <CarouselContent className="items-center" >
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_1.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_2.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_3.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_4.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_5.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_6.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Image src='/costume/about_7.jpg' alt="werfest" width={300} height={450} className={className} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className={section}>
          <h1 className={sectionH1}>Почему выбирают нас</h1>
          <ul className={sectionPUl + " list-disc pl-5 space-y-[10px]"}>
            <li>Высокое качество: Мы используем только качественные материалы и уделяем внимание каждой детали, чтобы вы выглядели великолепно в любом костюме.</li>
            <li>Индивидуальный подход: Наши костюмы изготавливаются с учетом ваших индивидуальных мерок и предпочтений.</li>
            <li>Быстрая доставка: Мы понимаем, как важно получить заказ вовремя, поэтому обеспечиваем быструю и надежную доставку.</li>
            <li>Отличное обслуживание клиентов: Наша команда всегда готова помочь вам с выбором и ответить на все ваши вопросы.</li>
          </ul>
        </section>

        <section className={section}>
          <h1 className={sectionH1}>Наши ценности</h1>
          <p className={sectionPUl}>Мы стремимся к тому, чтобы каждый наш клиент остался доволен своим приобретением. В WERFEST мы придерживаемся принципов честности, прозрачности и уважения к нашим клиентам и партнёрам.</p>
        </section>
        <section className={section}>
          <h1 className={sectionH1}>Присоединяйтесь к сообществу WERFEST</h1>
          <p className={sectionPUl}>Мы приглашаем вас стать частью нашего дружного сообщества косплееров! Следите за нами в социальных сетях, чтобы быть в курсе новинок, акций и мероприятий, а также делитесь своими образами с хештегом #WERFEST.</p>
        </section>
      </div>
    </main>
  )
}


export default About;