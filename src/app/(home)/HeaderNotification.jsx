"use client";
import Chevron from "@/components/icons/Chevron";
import { fadeTop } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderNotification = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-30px",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "just",
          duration: 0.5,
        },
      }}
      variants={fadeTop}
      viewport={{ once: true }}
      className="bg-grad-primary sticky top-0 z-50 grid h-10  w-full items-center justify-center text-center text-[#1C2B33] max-lg:hidden 2xl:h-[46px] 3xl:h-16"
    >
      <Link
        href="/get-demo"
        className="flex w-fit items-center justify-center gap-2"
      >
        <Button variant="outlineSecondary" size="sm">
          New
        </Button>
        <p className="font-18px !tracking-tight">
          <span className="font-semibold">we launched flagship shorts -</span>{" "}
          convert your apps & websites into hyper engagement & sales machines -
          book a demo today
        </p>
        <Chevron className="h-3 w-auto cursor-pointer 2xl:h-3.5 3xl:h-4" />
      </Link>
    </motion.div>
  );
};

export default HeaderNotification;
