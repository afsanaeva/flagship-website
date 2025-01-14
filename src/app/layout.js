import "./globals.css";
import localFont from "next/font/local";

/* src/fonts/roobert/RoobertBold.ttf src/fonts/roobert/RoobertBoldItalic.ttf src/fonts/roobert/RoobertHeavy.ttf src/fonts/roobert/RoobertHeavyItalic.ttf src/fonts/roobert/RoobertLight.ttf src/fonts/roobert/RoobertLightItalic.ttf src/fonts/roobert/RoobertMedium.ttf src/fonts/roobert/RoobertMediumItalic.ttf src/fonts/roobert/RoobertRegular.ttf src/fonts/roobert/RoobertRegularItalic.ttf src/fonts/roobert/RoobertSemiBold.ttf src/fonts/roobert/RoobertSemiBoldItalic.ttf */
const roobert = localFont({
  src: [
    {
      path: "../fonts/roobert/RoobertLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/roobert/RoobertRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/roobert/RoobertMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/roobert/RoobertSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/roobert/RoobertBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/roobert/RoobertHeavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/roobert/RoobertLightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
});

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_DOMAIN,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roobert.className + " text-[#1C2B33]"}>{children}</body>
    </html>
  );
}
