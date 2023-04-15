import { fetchAPI } from './utils/fetch-api';
import { sectionRenderer } from './utils/section-renderer';

async function getPageBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path = `/pages`;
    const urlParamsObject = { filters: { slug } };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

export default async function RootRoute() {
    const page = await getPageBySlug('home');
    const contentSections = page.data[0].attributes.contentSections;

    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
