import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import X from "../icons/social/X";
import Instagram from "../icons/social/Instagram";
import Linkedin from "../icons/social/Linkedin";
import Facebook from "../icons/social/Facebook";

const Footer = () => {
  return (
    <footer className="w-full pb-8 2xl:pb-9 3xl:pb-12 ">
      <div className="container-lg space-y-56px relative flex w-full flex-col md:flex-row md:items-baseline md:justify-between">
        <Link href="/">
          <LogoIcon className="size-12 xs:size-14 md:size-9 2xl:size-10 3xl:size-14" />
        </Link>
        <div>
          <div className="font-22px px-48px absolute inset-x-0 bottom-0 ml-auto w-fit space-x-4 font-medium md:mx-auto">
            <Link href="/privacy-policy" target="_blank">
              <span className="zoom-in-1-035 inline-block !duration-200">
                Privacy
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4 self-end xs:gap-6 md:gap-4 2xl:gap-5 3xl:gap-6">
            <Link
              href="https://www.linkedin.com/company/flagshipdxp/"
              target="_blank"
            >
              <Linkedin className="zoom-in-1-1 size-9 xs:size-11 md:size-8 2xl:size-9 3xl:size-11" />
            </Link>
            <Link href="https://www.instagram.com/think_flagship/" target="_blank">
              <Instagram className="zoom-in-1-1 size-9 xs:size-11 md:size-8 2xl:size-9 3xl:size-11" />
            </Link>
            <Link href="https://x.com/thinkflagship" target="_blank">
              <X className="zoom-in-1-1 size-9 xs:size-11 md:size-8 2xl:size-9 3xl:size-11" />
              {/* <Image
                src={"/assets/social-icons/twitter.png"}
                alt="twitter"
                width={120}
                height={120}
                className="zoom-in-1-1 size-9 xs:size-11 md:size-8 2xl:size-9 3xl:size-11"
              /> */}
            </Link>

            <Link href="https://www.facebook.com/flagshipoffficial/" target="_blank">
              <Facebook className="zoom-in-1-1 size-9 xs:size-11 md:size-8 2xl:size-9 3xl:size-11" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
