# How To Migrate From Strapi V4 To V5

In this guide, we will walk you through the steps of migrating our corporate starter website from Strapi V4 to V5.

You can learn more about the Strapi v5 upgrade guide [here](https://docs.strapi.io/dev-docs/migration/v4-to-v5/step-by-step).

To help us accomplish this, we will use our codemods update tool that will do majority of the heavy lifting for us.

But before we do that, we need to make sure we have the following:

1. Prepare your project for migration by backing up your code and database.
2. Update your current Strapi version to the latest v4 release.
3. Remove any deprecated plugins that are not yet compatible with Strapi v5.

In my local environment, I have a Strapi v4 project running using sqlite database.

I will start by exporting my data via our DTS export tool so I have a backup of my data.

You can also make a backup of your actual sqlite database file.

If you are using a different database, you will need to make a backup of your database.

In the strapi v4 root directory, I will run the following command to create my backup file:

``` bash
yarn strapi export --no-encrypt -f ../backup
```

This will go ahead and export my data.

``` bash
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
├─────────────────────────────────────────┼───────┼───────────────┤
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
├─────────────────────────────────────────┼───────┼───────────────┤
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

Now that I have the backup of my data, I can go and remove any deprecated plugins that are not yet compatible with Strapi v5.

In this case, I am using the following plugins:

1. @strapi/plugin-seo

I will go ahead and remove the plugin from the `package.json` file.

And the reference to the plugin in the `config/plugins.ts` file.

Finally, in the `package.json` file, I will update all the references to `4.25.6` to the following `2.25.12`, which was the latest Strapi v4 version when I started this migration.

My updated `package.json` file looks like this:

``` json
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

Now I am going to remove the `yarn.lock` file and the `node_modules` directory.

``` bash
rm -rf yarn.lock
rm -rf node_modules
```

And finally run `yarn` command to update our project to the latest Strapi v4 version.

Once your app is updated, run `yarn develop` to make sure everything is working correctly.

Once everything is working correctly, we can go ahead and focus on migrating our **backend*** first. 

But before we do, make sure you commit and save all your changes.

## Using Codemods To Update Strapi V4 To V5

We will start the process by running the following command in the root of our Strapi project:

``` bash
  npx @strapi/upgrade major
```
Need to install the following packages:
@strapi/upgrade@5.0.1
Ok to proceed? (y) y
[WARN]  [2024-09-25T16:06:00.682Z] Please make sure you've created a backup of your codebase and files before upgrading
[INFO]  [2024-09-25T16:06:01.420Z] Upgrading from v4.25.12 to v5.0.0
[INFO]  [2024-09-25T16:06:01.422Z] (1/4) Checking requirement...
[WARN]  [2024-09-25T16:06:01.490Z] Repository is not clean. Please commit or stash any changes before upgrading
? Ignore optional requirement "REQUIRE_GIT_CLEAN_REPOSITORY" ? › (y/N)






