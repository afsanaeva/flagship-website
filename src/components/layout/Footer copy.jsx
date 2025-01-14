import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1C1E20] py-11">
      <div className="container-lg space-y-28px">
        <Image
          src={"/assets/logo-white.svg"}
          alt="Logo white"
          width={139.82}
          height={40}
          className="w-[125px] 3xl:size-auto"
        />

        <section className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/FlagshipiXP" target="_blank">
              <Image
                src={"/assets/social-icons/facebook.png"}
                alt="facebook"
                width={24}
                height={24}
                className="zoom-in-1-1"
              />
            </Link>
            <Link href="https://x.com/FlagshipiXP" target="_blank">
              <Image
                src={"/assets/social-icons/twitter.png"}
                alt="twitter"
                width={24}
                height={24}
                className="zoom-in-1-1"
              />
            </Link>
            <Link href="https://www.instagram.com/flagshipixp/" target="_blank">
              <Image
                src={"/assets/social-icons/instagram.png"}
                alt="instagram"
                width={24}
                height={24}
                className="zoom-in-1-1"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/flagshipdxp/"
              target="_blank"
            >
              <Image
                src={"/assets/social-icons/linkedin.png"}
                alt="linkedIn"
                width={24}
                height={24}
                className="zoom-in-1-1"
              />
            </Link>
          </div>

          <div className="font-18px space-x-4 font-medium text-[#898989]">
            <Link href="/get-demo">
              <span className="zoom-in-1-035 inline-block !duration-200">
                Get Demo
              </span>
            </Link>

            <Link href="/privacy-policy" target="_blank">
              <span className="zoom-in-1-035 inline-block !duration-200">
                Privacy
              </span>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
