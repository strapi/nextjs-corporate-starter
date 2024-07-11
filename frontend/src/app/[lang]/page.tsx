import LangRedirect from './components/LangRedirect';
import componentResolver from './utils/component-resolver';
import {getPageBySlug} from "@/app/[lang]/utils/get-page-by-slug";


export default async function RootRoute({params}: { params: { lang: string } }) {
    try {
      const page = await getPageBySlug('home', params.lang)
      if (page.error && page.error.status == 401)
        throw new Error(
          'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
        )

      if (page.data.length == 0 && params.lang !== 'en') return <LangRedirect />
      if (page.data.length === 0) return null
      const contentSections = page.data[0].attributes.contentSections
      return contentSections.map((section: any, index: number) =>
        componentResolver(section, index)
      )
    } catch (error: any) {
      window.alert('Missing or invalid credentials')
    }
}
