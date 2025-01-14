import AiVideoEngagement from "@/components/screens/home/AiVideoEngagement";
import Dazzle from "@/components/screens/home/Dazzle";
import Engagement from "@/components/screens/home/Engagement";
import GetAFreeDemo from "@/components/screens/home/GetAFreeDemo";
import Hero from "@/components/screens/home/Hero";
import PricingPlan from "@/components/screens/home/PricingPlan";

export const metadata = {
  title: "Flagship | Super Engagement Platform",
  description: "Flagship is a super engagement platform. Engage your customers with a magical experience.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
  keywords: [
    "Flagship",
    "iXP",
    "Intelligent Experience Platform",
    "Engage",
    "Monetize",
    "Retain",
    "Audience",
    "Customer Experience",
    "Intelligent Digital Experiences",
    "Personalized Shorts",
    "No Code",
    "Innovation",
  ],
};

export default function Home() {
  return (
    <main>
      <div className="space-y-200px mb-200px">
        <Hero />

        <AiVideoEngagement />

        <Engagement />

        <Dazzle />

        <PricingPlan />

        <GetAFreeDemo />
      </div>
    </main>
  );
}
