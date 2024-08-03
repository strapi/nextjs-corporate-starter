import {sectionRenderer} from "@/app/[lang]/utils/section-renderer";
import {Metadata} from "next";
import {FALLBACK_SEO} from "@/app/[lang]/utils/constants";
import {fetchAPI} from "@/app/[lang]/utils/fetch-api";


type Props = {
    params: {
        lang: string,
        slug: string
    }
}


export async function loader(slug: string, lang: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    console.log(token)
    const path = `/pages`;
    const urlParamsObject = {filters: {slug}, locale: lang};
    return await fetchAPI(path, urlParamsObject, token);
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const page = await loader(params.slug, params.lang);

    if (!page.data[0].attributes?.seo) return FALLBACK_SEO;
    const metadata = page.data[0].attributes.seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription
    }
}


export default async function PageRoute({params}: Props) {
    const page = await loader(params.slug, params.lang);
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
