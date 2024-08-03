import LangRedirect from "./components/LangRedirect";
import { sectionRenderer } from "./utils/section-renderer";
import { fetchAPI } from "./utils/fetch-api";

export async function loader(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/pages`;
  const urlParamsObject: {} = {
    populate: {
      seo: {
        populate: "*",
      },
      contentSections: {
        on: {
          "sections.hero": {
            populate: "*",
          },
          "sections.features": {
            populate: "*",
          },
          "sections.bottom-actions": {
            populate: "*",
          },
          "sections.feature-columns-group": {
            populate: "*",
          },
          "sections.feature-rows-group": {
            populate: "*",
          },
          "sections.testimonials-group": {
            populate: {
              testimonials: {
                populate: "*",
              },
            }
          },
          "sections.large-video": {
            populate: "*",
          },
          "sections.rich-text": {
            populate: "*",
          },
          "sections.pricing": {
            populate: {
              plans: {
                populate: "*",
              },
            }
          },
          "sections.lead-form": {
            populate: "*",
          },
          "sections.heading": {
            populate: "*",
          },
        },
      },
    },
    filters: { slug },
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, token);
}

export default async function RootRoute({
  params,
}: {
  readonly params: { lang: string };
}) {
  const errorMessage =
    "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/";

  try {
    const page = await loader("home", params.lang);
    console.dir(page, { depth: null });

    if (page.error && page.error.status == 401) throw new Error(errorMessage);

    if (page.data.length == 0 && params.lang !== "en") return <LangRedirect />;
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;

    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    );
    
  } catch (error: any) {
    return (
      <div className="container mx-auto p-8">
        <h1>Error:</h1>
        <pre>{error.message}</pre>
        <p>{errorMessage}</p>
      </div>
    );
  }
}
