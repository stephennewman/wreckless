import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://www.recklesslylovedministries.org";
const SITE_TITLE = "Recklessly Loved Ministries | Dedicated to the One";
const SITE_DESCRIPTION =
  "Reaching the lost, serving the hurting, and showing the love of Jesus with boldness. Founded by Pastors Seth & Amy Newman.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Recklessly Loved Ministries",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Recklessly Loved Ministries",
  url: SITE_URL,
  logo: `${SITE_URL}/30427646_padded_logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: "2019",
  founder: [
    { "@type": "Person", name: "Seth Newman" },
    { "@type": "Person", name: "Amy Newman" },
  ],
  sameAs: [
    "https://www.facebook.com/RecklesslyLoved1313",
    "https://www.instagram.com/recklesslylovedministries",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
