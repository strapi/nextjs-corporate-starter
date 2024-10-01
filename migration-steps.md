# How To Migrate From Strapi V4 To V5

This guide will walk you through the steps of migrating our corporate starter website from Strapi V4 to V5.

You can learn more about the Strapi v5 upgrade guide [here](https://docs.strapi.io/dev-docs/migration/v4-to-v5/step-by-step).

To help us accomplish this, we will use our codemods update tool, which will do the majority of the heavy lifting for us.

But before we do that, we need to make sure we have the following:

1. Prepare your project for migration by backing up your code and database.
2. Update your current Strapi version to the latest v4 release.
3. Remove deprecated plugins not yet compatible with Strapi v5.

I have a Strapi v4 project running using SQLite database in my local environment.

I will start by exporting my data via our DTS export tool so I have a backup.

You can also make a backup of your actual sqlite database file.

You will need to back up your database if you are using a different database.

In the strapi v4 root directory, I will run the following command to create my backup file:

```bash
yarn strapi export --no-encrypt -f ../backup
```

This will go ahead and export my data.

```bash
$ strapi export --no-encrypt -f ../backup
Starting export...
✔ schemas: 55 transfered (size: 42.1 KB) (elapsed: 4 ms)
✔ entities: 62 transfered (size: 52.6 KB) (elapsed: 16 ms)
✔ assets: 75 transfered (size: 28.7 MB) (elapsed: 655 ms)
✔ links: 78 transfered (size: 14.6 KB) (elapsed: 5 ms)
✔ configuration: 66 transfered (size: 139.7 KB) (elapsed: 2 ms)
┌─────────────────────────────────────────┬───────┬───────────────┐
│ Type                                    │ Count │ Size          │
├─────────────────────────────────────────┼───────┼───────────────┤
│ schemas                                 │    55 │      42.1 KB  │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- component                            │    33 │ (    13.6 KB) │
├──────────────────────────────���──────────┼───────┼───────────────┤
│ -- contentType                          │    22 │ (    28.5 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ entities                                │    62 │      52.6 KB  │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- api::article.article                 │     7 │ (    21.3 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- api::author.author                   │     2 │ (     333 B ) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- api::category.category               │     3 │ (     604 B ) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- api::global.global                   │     1 │ (     1.4 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- api::page.page                       │     2 │ (     3.3 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- api::product-feature.product-feature │     5 │ (       1 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::i18n.locale                  │     1 │ (     158 B ) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::upload.file                  │    22 │ (    20.8 KB) │
├─────────��───────────────────────────────┼───────┼───────────────┤
│ -- plugin::users-permissions.permission │    16 │ (       3 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- plugin::users-permissions.role       │     3 │ (     677 B ) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ assets                                  │    75 │      28.7 MB  │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- .ico                                 │     1 │ (      15 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- .jpg                                 │    52 │ (      23 MB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- .png                                 │    18 │ (     5.7 MB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ -- .svg                                 │     4 │ (    17.7 KB) │
├─────────────────────────────────────────┼───────┼───────────────┤
│ links                                   │    78 │      14.6 KB  │
├─────────────────────────────────────────┼───────┼───────────────┤
│ configuration                           │    66 │     139.7 KB  │
├─────────────────────────────────────────┼───────┼───────────────┤
│ Total                                   │   336 │        29 MB  │
└─────────────────────────────────────────┴───────┴───────────────┘
Export archive is in ../backup.tar.gz
Export process has been completed successfully!
✨  Done in 2.86s.
```

Now that I have a backup of my data, I can remove any deprecated plugins that are not yet compatible with Strapi v5.

In this case, I am using the following plugins:

1. @strapi/plugin-seo

I will remove the plugin from the `package.json` file.

And the reference to the plugin in the `config/plugins.ts` file.

Finally, in the `package.json` file, I will update all the references to `4.25.6` to the following `4.25.12`, the latest Strapi v4 version when I started this migration.

My updated `package.json` file looks like this:

```json
{
  "name": "corporate-blog-template",
  "private": true,
  "version": "0.1.0",
  "description": "A Strapi application",
  "scripts": {
    "develop": "strapi develop",
    "start": "strapi start",
    "build": "strapi build",
    "strapi": "strapi"
  },
  "devDependencies": {},
  "dependencies": {
    "@strapi/plugin-cloud": "4.25.12",
    "@strapi/plugin-i18n": "4.25.12",
    "@strapi/plugin-users-permissions": "4.25.12",
    "@strapi/strapi": "4.25.12",
    "better-sqlite3": "8.6.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "5.3.4",
    "styled-components": "5.3.3"
  },
  "author": {
    "name": "A Strapi developer"
  },
  "strapi": {
    "uuid": "0f95dc7c-202b-4ab2-a874-3799d23b1640"
  },
  "engines": {
    "node": ">=18.0.0 <=20.x.x",
    "npm": ">=6.0.0"
  },
  "license": "MIT"
}
```

I will remove the `yarn.lock` file and the `node_modules` directory.

```bash
rm -rf yarn.lock
rm -rf node_modules
```

And finally, run the `yarn` command to update our project to the latest Strapi v4 version.

Once your app is updated, run `yarn develop` to ensure everything works correctly.

Once everything works correctly, we can first focus on migrating our **backend**.

But before we do, make sure you commit and save all your changes.

## Using Codemods To Update Strapi V4 To V5

We will start the process by running the following command at the root of our Strapi project:

```bash
  npx @strapi/upgrade major
```

The codemod will show you the changes it will make to your project.

```bash
 backend git:(strapi-5-update-process) npx @strapi/upgrade major
[WARN]  [2024-09-25T16:08:24.314Z] Please make sure you've created a backup of your codebase and files before upgrading
[INFO]  [2024-09-25T16:08:24.977Z] Upgrading from v4.25.12 to v5.0.0
[INFO]  [2024-09-25T16:08:24.979Z] (1/4) Checking requirement...
[INFO]  [2024-09-25T16:08:25.026Z] (2/4) Applying the latest code modifications...
┌────┬─────────┬──────┬────────────────────────────────────────┬──────────┬───────────┬─────────────────────┐
│ N° │ Version │ Kind │ Name                                   │ Affected │ Unchanged │ Duration            │
├────┼─────────┼──────┼────────────────────────────────────────┼──────────┼───────────┼─────────────────────┤
│ 0  │ 5.0.0   │ code │ comment out lifecycle files            │ 0        │ 31        │ 0.440s (cold start) │
│ 1  │ 5.0.0   │ json │ dependency remove strapi plugin i18n   │ 1        │ 40        │ 0.358s              │
│ 2  │ 5.0.0   │ json │ dependency upgrade react and react dom │ 0        │ 41        │ 0.037s              │
│ 3  │ 5.0.0   │ json │ dependency upgrade react router dom    │ 1        │ 40        │ 0.019s              │
│ 4  │ 5.0.0   │ json │ dependency upgrade styled components   │ 1        │ 40        │ 0.019s              │
│ 5  │ 5.0.0   │ code │ deprecate helper plugin                │ 0        │ 31        │ 0.174s              │
│ 6  │ 5.0.0   │ code │ entity service document service        │ 0        │ 31        │ 0.041s              │
│ 7  │ 5.0.0   │ code │ s3 keys wrapped in credentials         │ 0        │ 31        │ 0.018s              │
│ 8  │ 5.0.0   │ json │ sqlite3 to better sqlite3              │ 0        │ 41        │ 0.008s              │
│ 9  │ 5.0.0   │ code │ strapi public interface                │ 0        │ 31        │ 0.027s              │
│ 10 │ 5.0.0   │ code │ use uid for config namespace           │ 0        │ 31        │ 0.034s              │
│ 11 │ 5.0.0   │ code │ utils public interface                 │ 0        │ 31        │ 0.072s              │
└────┴─────────┴──────┴────────────────────────────────────────┴──────────┴───────────┴─────────────────────┘
[INFO]  [2024-09-25T16:08:26.325Z] (3/4) Upgrading Strapi dependencies...
[INFO]  [2024-09-25T16:08:26.326Z] (4/4) Installing dependencies...

```

Depending if you have any custom code, if the codemod is not able to update your code, it will add `__TODO__` comments in the code that you will need to update manually.

In our case, it was pretty straightforward.

Once the codemod is done and all the new dependencies are installed, we can start our project.

```bash
yarn develop
```

You will see the following output in the console:

![Strapi v5 upgrade process](./images/001-starting-project.png)

Now open your browser, navigate to `http://localhost:1337/admin`, and log in to your admin panel.

You can go to the **Settings** tab and confirm that you are running Strapi v5.

![Strapi v5 upgrade process](./images/002-dashboard.png)

Finally, we can go ahead and take a look at our Content Manager page, click on the Articles type, and see that our articles are still there.

![Strapi v5 upgrade process](./images/003-content.png)

Nice!

Now, before we migrate our front end, I want to make sure that our back end is working correctly.

Let's make a post request to get the data to our **Home Page** and see if we get the correct response.

We will make a get request to the following endpoint:

```
http://localhost:1337/api/pages?filters[slug][$eq]=home
```

We are filtering by the slug `home` because we only want to get the data for our home page with that slug.

But we will get the following error.

```bash
page-populate-middleware.js: ctx.query =  {
  populate: {
    contentSections: { populate: [Object] },
    seo: { fields: [Array], populate: [Object] }
  },
  filters: { slug: { '$eq': 'home' } }
}
[2024-09-25 11:25:02.906] error: Invalid nested populate for page.contentSections (api::page.page). Expected a fragment ("on")
```

In our project, I use a custom middleware to populate the data in the backend.

And the query that we used is using Strapi v4 syntax.

If we navigate to the `src/page/middlewares/page-populate-middleware.js` file in our Strapi project, we can see that the query is using the following syntax:

```js
const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};
```

We must update it to use the `on` flag to populate our dynamic zone fields.

You can learn more about this in our documentation [here](https://docs.strapi.io/dev-docs/api/document-service/populate#components--dynamic-zones).

So, let's go ahead and update the query to use Strapi v5 syntax with the following code:

```js
const populate = {
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
        },
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
        },
      },
      "sections.lead-form": {
        populate: "*",
      },
      "sections.heading": {
        populate: "*",
      },
    },
  },
  seo: {
    populate: "*",
  },
};
```

You can see that we are using the `on` flag to populate our dynamic zone fields.

I am using the `*` to populate all the fields for each section that will populate one level deep.

But you can learn more about the `on` flag [here](https://docs.strapi.io/dev-docs/api/document-service/populate#components--dynamic-zones).

We should get a successful response with the following data:

```json
{
  "data": [
    {
      "id": 7,
      "shortName": "Home Page",
      "slug": "home",
      "heading": "Home Page",
      "description": "This is the home page",
      "contentSections": [
        {
          "__component": "sections.hero",
          "title": "Strapi [Starter] with Next JS",
          "description": "This is build with [Strapi] and [Next] JS. A match made in heaven.",
          "picture": {
            "url": "/uploads/undraw_woman_ffrd_b3ac24fb06.svg"
          },
          "buttons": [
            {
              "url": "https://discord.com/invite/strapi",
              "text": "Discord",
              "type": "secondary"
            },
            {
              "url": "https://strapi.io/events",
              "text": "Events",
              "type": "primary"
            }
          ]
        },
        {
          "__component": "sections.features",
          "heading": "Features",
          "description": "Welcome to Strapi Starter",
          "feature": [
            {
              "title": "Discover Next.js",
              "description": "The React Framework for Production: Explore the future of web development with Next.js, the cutting-edge React framework.",
              "url": "https://vercel.com/",
              "text": "Learn more"
            },
            {
              "title": "Strapi",
              "description": "Unleash the power of Strapi, the leading open-source headless CMS that lets you create, manage, and distribute your content across multiple platforms.",
              "url": "https://strapi.io",
              "text": "Learn more"
            },
            {
              "title": "Cloud",
              "description": "Simplify your content management experience with Strapi Cloud, the fully-managed hosting solution for your Strapi projects.",
              "url": "https://strapi.io/cloud",
              "text": "Learn more"
            }
          ]
        },
        {
          "__component": "sections.pricing",
          "title": "Our Plans",
          "plans": [
            {
              "name": "Free",
              "description": "Features",
              "price": 0,
              "pricePeriod": "Monthly",
              "product_features": [
                { "name": "Example Feature 1" },
                { "name": "Example Feature 2" },
                { "name": "Example Feature 3" }
              ]
            },
            {
              "name": "Pro",
              "description": "Features",
              "price": 9.99,
              "pricePeriod": "monthly",
              "product_features": [
                { "name": "Example Feature 1" },
                { "name": "Example Feature 2" },
                { "name": "Example Feature 3" },
                { "name": "Example Feature 4" }
              ]
            },
            {
              "name": "Enterprise ",
              "description": "Features",
              "price": 19.99,
              "pricePeriod": "monthly",
              "product_features": [
                { "name": "Example Feature 1" },
                { "name": "Example Feature 2" },
                { "name": "Example Feature 3" },
                { "name": "Example Feature 4" },
                { "name": "Example Feature 5" }
              ]
            }
          ]
        },
        {
          "__component": "sections.testimonials-group",
          "title": "Testimonials",
          "description": "Hello",
          "testimonials": [
            {
              "text": "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
              "authorName": "Paul Brats",
              "picture": {
                "url": "/uploads/paul_brats_012832af74.jpg"
              }
            },
            {
              "text": "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
              "authorName": "Kit Kat",
              "picture": {
                "url": "/uploads/kit_kat_96feba6636.png"
              }
            }
          ]
        },
        {
          "__component": "sections.lead-form",
          "title": "Join our community.",
          "emailPlaceholder": "Enter your email",
          "location": "main page",
          "description": "Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!",
          "submitButton": {
            "text": "Submit",
            "type": "primary"
          }
        }
      ],
      "seo": {
        "metaTitle": "Home Page",
        "metaDescription": "This is the home page",
        "shareImage": {
          "url": "/uploads/ai_prompt_e43fe026b1.jpg"
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

Nice! Now that we have data from our API, we can start migrating our front end.

## Updating Our Frontend To Work With Strapi V5

So, let's start by starting our frontend project and seeing what error we will get.

Navigate to your next.js project and run the following command to start your frontend:

```bash
yarn dev
```

You will probably see an error, a blank screen, or both.

When migrating, this is a good reminder that it might be a good time to think of possible refactors.

As we continue migrating our front end to strapi v5, we can start by updating our `utils/fetch-api.ts` file.

We will need to update the `fetchAPI` function to the following:

```ts
import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(path: string, query: any, authToken?: string) {
  const baseURL = getStrapiURL();
  const url = new URL("/api" + path, baseURL);
  url.search = qs.stringify(query);

  const baseHeader = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Strapi-Response-Format": "v4",
    },
  };

  const headerWithAuth = {
    ...baseHeader,
    headers: {
      ...baseHeader.headers,
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headerWithAuth : baseHeader);
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
```

Notice that we use the `Strapi-Response-Format` header to tell Strapi to respond in `v4` format.

This will allow us to get the old data format, which we can use to test our front end before we update it to the new format.

Since we added some changes in this file, for instance, instead of using `options,` we are now using `authToken.`

We must update this wherever we use the `fetchAPI` function.

Let's start with our root `layout.tsx` file.

We will update the `getGlobal` function to the following:

```ts
async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;

  const urlParamsObject = {
    populate: [
      "metadata",
      "favicon",
      "notificationBanner.link",
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
  return await fetchAPI(path, urlParamsObject, token);
}
```

The few changes we made are:

1. We removed `metadata.sharedImage` since we removed it when we removed the Strapi SEO plugin earlier.

2. We removed the `options` parameters since we are now setting it directly inside `fethAPI`.

3. Finally, we passed down our token to the `fetchAPI` function.

Nice! With all these changes, we should be able to get our global data.

Which should display **Top Navigation** and **Footer** on our page.

![Top Navigation and Footer](./images/004-global-data.png)

Now let's navigate to our `utils/get-page-by-slug.ts` file and make the following changes:

```ts
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getPageBySlug(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/pages`;
  const urlParamsObject = { filters: { slug }, locale: lang };
  return await fetchAPI(path, urlParamsObject, token);
}
```

We made the following changes:

1. We removed the `options` parameters since we now set them directly inside `fethAPI.`

2 We finally passed down our token to the `fetchAPI` function.

Now, let's refresh our page and see if we get our landing page data.

![Page Data](./images/005-landing-page.png)

Nice! It is working.

Finally, we must update our **Blog Page** to reflect our new changes.

Now, let's navigate to our `blog/page.tsx` file and make the following changes:

On line 41, we will remove the `options` params and pass down our token to the `fetchAPI` function.
Before:

```ts
const options = { headers: { Authorization: `Bearer ${token}` } };
const responseData = await fetchAPI(path, urlParamsObject, options);
```

After:

```ts
const responseData = await fetchAPI(path, urlParamsObject, token);
```

After these changes, we should be able to get our blog page working.

![Blog Page](./images/006-blog-page.png)

Now, we just need to update our `blog/[category]/page.tsx` file to reflect our new changes.

On line 26, we will remove the `options` params and pass down our token to the `fetchAPI` function.

Before:

```ts
const options = { headers: { Authorization: `Bearer ${token}` } };
const responseData = await fetchAPI(path, urlParamsObject, options);
```

After:

```ts
const responseData = await fetchAPI(path, urlParamsObject, token);
```

We also need to make a similar change in the `blog/[category]/[slug]/layout.tsx` file.

Inside the `fetchSideMenuData` function, on line 26, we will remove the `options` params and pass down our token to the `fetchAPI` function.

The `fetchSideMenuData` function should look like this:

```tsx
async function fetchSideMenuData(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const categoriesResponse = await fetchAPI(
      "/categories",
      { populate: "*" },
      token
    );

    const articlesResponse = await fetchAPI(
      "/articles",
      filter
        ? {
            filters: {
              category: {
                name: filter,
              },
            },
          }
        : {},
      token
    );

    return {
      articles: articlesResponse.data,
      categories: categoriesResponse.data,
    };
  } catch (error) {
    console.error(error);
  }
}
```

And in the same file, let's update the `generateStaticParams` function to the following:

```tsx
export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const articleResponse = await fetchAPI(
    path,
    {
      populate: ["category"],
    },
    token
  );

  return articleResponse.data.map(
    (article: {
      attributes: {
        slug: string;
        category: {
          slug: string;
        };
      };
    }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
  );
}
```

Lastly, we need to make a final change in the `blog/[category]/[slug]/page.tsx` file.

Here is what the `getPostBySlug` looks like now:

```tsx
async function getPostBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      cover: { fields: ["url"] },
      authorsBio: { populate: "*" },
      category: { fields: ["name"] },
      blocks: {
        populate: {
          __component: "*",
          files: "*",
          file: "*",
          url: "*",
          body: "*",
          title: "*",
          author: "*",
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}
```

Let's update the `getPostBySlug` function with the following changes:

```ts
async function getPostBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      cover: { fields: ["url"] },
      authorsBio: { populate: "*" },
      category: { fields: ["name"] },
      blocks: {
        on: {
          "shared.media": {
            populate: "*",
          },
          "shared.quote": {
            populate: "*",
          },
          "shared.rich-text": {
            populate: "*",
          },
          "shared.slider": {
            populate: "*",
          },
          "shared.video-embed": {
            populate: "*",
          },
        },
      },
    },
  };
  const response = await fetchAPI(path, urlParamsObject, token);
  return response;
}
```

Now let's update `getMetaData` function to the following:

```tsx
async function getMetaData(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const urlParamsObject = {
    filters: { slug },
    populate: { seo: { populate: "*" } },
  };
  const response = await fetchAPI(path, urlParamsObject, token);
  return response.data;
}
```

And finally, let's update the `generateStaticParams` function to the following:

```tsx
export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/articles`;
  const articleResponse = await fetchAPI(
    path,
    {
      populate: ["category"],
    },
    token
  );

  return articleResponse.data.map(
    (article: {
      attributes: {
        slug: string;
        category: {
          slug: string;
        };
      };
    }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
  );
}
```

Now, you can navigate your blog page, click on a single blog post, and see the data.

![Blog Post](./images/007-blog-post.png)

Nice.

## Closing Thoughts

In this tutorial, we discussed how to migrate a Strapi v4 project to Strapi v5 using the upgrade tool via codemods.

We also went over how to update our frontend to work with Strapi v5 and how to use the `Strapi-Response-Format` header to get the old Strapi v4 response format.

This allows us to quickly migrate our front end to work with Strapi v5 without having to rewrite all our code.

But, like with any migration, this is a good time to refactor and consider what improvements you can make in the front end.

I will keep using the old Strapi v4 response format for this blog post. However, I will update the repo's front end to work with the new Strapi v5 response format.

## Additional Resources

add additional resources here

## LaunchPad App

talk about LaunchPad app here

## Conclusion