import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import { i18n } from "../../../i18n-config";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import NavigationBar from "./components/NavigationBar";
import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";
// import { useEffect, useState } from "react";


const NavigationBar = dynamic(() => import("./components/NavigationBar"), {
  ssr: false,
});


async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "notificationBanner.link",
      "navigationBar.menuLink",
      "navigationBar.menuLink.links",
      "navigationBar.navigationBarLogo",
      "navigationBar.navigationBarLogo.logoImg",
      "navbar.navbarLogo",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);

  if (!meta.data) return FALLBACK_SEO;

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
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  // console.log(global.data.attributes)
  const { navigationBar, notificationBanner, navbar, footer } =
    global.data.attributes;
  // console.log(navigationBar.data.attributes.menuLink);

  const navigationBarLogoUrl = getStrapiMedia(
    navigationBar.data.attributes.navigationBarLogo.logoImg.data.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data?.attributes.url
  );

  return (
    <html lang={params.lang}>
      <body>
        <NavigationBar
          navigationItems={navigationBar.data.attributes.menuLink}
          logoUrl={navigationBarLogoUrl}
        />
        <div className="bg-red-200 h-[2000px]"></div>
        {/* <Navbar
          links={navbar.links}
          logoUrl={navbarLogoUrl}
          logoText={navbar.navbarLogo.logoText}
        /> */}

        {/* <main className="dark:bg-black dark:text-gray-100 min-h-screen">
          {children}
        </main>

        <Banner data={notificationBanner} /> */}

        {/* <Footer
          logoUrl={footerLogoUrl}
          logoText={footer.footerLogo.logoText}
          menuLinks={footer.menuLinks}
          categoryLinks={footer.categories.data}
          legalLinks={footer.legalLinks}
          socialLinks={footer.socialLinks}
        /> */}
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
