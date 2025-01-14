"use client";

import Image from "next/image";
import Img from "../../../../public/assets/home/dazzle/img.png";
import ImgMobile from "../../../../public/assets/home/dazzle/img-mobile.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import MagicAi from "@/components/icons/MagicAi";

const Dazzle = () => {
  return (
    <div className="space-y-40px">
      <InfoCard2
        title="dazzle your audience with<br class='max-[1070px]:hidden'/> intelligent video experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "just",
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className="container-lg">
        <div className="zoom-in-1-035  ">
          <Image src={Img} alt="create experiences" className="max-sm:hidden" />
          <Image
            src={ImgMobile}
            alt="create experiences"
            className="hidden max-sm:block"
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard2 = ({
  title,
  description,
  heading = "h2",
  className,
  headingClassName,
  descriptionClassName,
  viewport,
  whileInView,
  initial,
}) => {
  const Heading = heading || "h2";

  return (
    <motion.div
      viewport={viewport}
      whileInView={whileInView}
      initial={initial}
      className={cn("space-y-40px overflow-hidden w-full", className)}
    >
      <div className="container-lg space-y-40px">
        <div>
          <Heading
            className={cn(
              "font-120px mx-auto py-[0.15em] font-semibold text-center",
              headingClassName
            )}
          >
            {/* engage customers with a magical experience */}
            <span className="relative">
              <MagicAi className="absolute -left-8 top-[0.3em] inline-block size-7 xs:-left-10 xs:size-9 md:-left-14 md:size-9 lg:size-12 2xl:-left-16 2xl:size-16 " />
              engage
            </span>{" "}<br className="hidden max-sm:block"/>
            customers with a
            <br className="max-sm:hidden"/> magical{" "}
            <br className="hidden max-sm:block"/>
            <span className="relative">
              experience
              <MagicAi className="absolute right-[-1em] top-[0.4em] inline-block size-7 max-xs:-right-8 xs:size-9 md:size-9 lg:size-12 2xl:size-16" />
            </span>
          </Heading>
        </div>
        {description && (
          <p
            className={cn(
              "font-28px font-medium text-center",
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Dazzle;
