
import type { Metadata } from "next";
import { getStrapiURL, getStrapiMedia } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";
import "./globals.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  
  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "notificationBanner.link",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories"
    ],
  };
  
  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();
  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();
  const { notificationBanner, navbar, footer } = global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data.attributes.url
  );

  return (
    <html lang="en">
      <body>
        <Navbar
          links={navbar.links}
          logoUrl={navbarLogoUrl}
          logoText={navbar.navbarLogo.logoText}
        />

        <main className="dark:bg-black dark:text-gray-100 min-h-screen">
          {children}
        </main>

        <Banner data={notificationBanner} />

        <Footer
          logoUrl={footerLogoUrl}
          logoText={footer.footerLogo.logoText}
          menuLinks={footer.menuLinks}
          categoryLinks={footer.categories.data}
          legalLinks={footer.legalLinks}
          socialLinks={footer.socialLinks}
        />
      </body>
    </html>
  );
}
