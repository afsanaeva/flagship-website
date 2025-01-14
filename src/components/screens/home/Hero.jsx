"use client";
import InfoCard from "@/components/custom-ui/InfoCard";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeTop } from "@/components/layout/Header";
import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="space-y-100px mt-12">
      <div className="space-y-40px flex flex-col items-center">
        <InfoCard2
          title="flagship is a super<br/> engagement platform"
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h1"
          headingClassName="font-210px"
        />
        <Button size="lg" asChild className="md:hidden">
          <Link href="/get-demo">Get a free demo</Link>
        </Button>
      </div>
      <HeroSlides />
    </section>
  );
};

export default Hero;

const HeroSlides = () => {
  const [api, setApi] = useState();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "just",
          duration: 0.5,
          delay: 0.5, // Change this value to set the desired duration in seconds
        },
      }}
      viewport={{ once: true }}
    >
      <Carousel
        setApi={setApi}
        className="pointer-events-none mx-auto w-full max-w-[1920px]"
        plugins={[
          emblaCarouselAutoScroll({
            // stopOnMouseEnter: true,
            stopOnInteraction: false,

            speed: 1.25,
          }),
        ]}
        // onMouseLeave={() => {
        //   setTimeout(() => {
        //     !api?.plugins()?.autoScroll?.isPlaying() &&
        //       api?.plugins()?.autoScroll?.play();
        //   }, 100);
        // }}
        // onTouchEnd={() => {
        //   !api?.plugins()?.autoScroll?.isPlaying() &&
        //     api?.plugins()?.autoScroll?.play();
        // }}
        opts={{
          loop: true,
          dragFree: true,
        }}
        tabIndex={-1}
      >
        <CarouselContent className="items-center py-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Slide
              key={index}
              index={index}
              // isSelected={selectedSlide === index}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

const Slide = ({ title, image, index, isSelected }) => {
  return (
    <CarouselItem
      key={index}
      className={cn("basis-[65%] md:basis-[25%] items-center flex max-md:pl-3")}
      style={{ height: "100%" }} // Ensure consistent height
    >
      <Image
        src={`/assets/home/hero/slide-${index + 1}.png`}
        alt={title}
        width={458}
        height={932}
        className={cn("rounded-40px object-contain object-center w-full", {
          // "w-full": isSelected, // Ensure the image takes full width when selected
        })}
      />
    </CarouselItem>
  );
};
