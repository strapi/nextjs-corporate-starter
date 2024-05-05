# Strapi Starter Next 13, Tailwind, Typescript and Strapi

note: This project was started with love by [Trecia](https://github.com/TreciaKS), [Daniel](https://github.com/malgamves) and [Paul](https://github.com/PaulBratslavsky). We were all new to Next 13 and Typescript. If you find any bugs or improvements feel free to create an issue. Thank you all for your support and participation.

![demo-site](https://user-images.githubusercontent.com/6153188/231865321-0da5e81f-4832-4cce-bcd1-ecd79e9b9cc3.gif)


## Hello Strapi

Strapi Community Edition is a free and open-source headless CMS enabling you to manage any content, anywhere.

- **Self-hosted or Cloud**: You can host and scale Strapi projects the way you want. You can save time by deploying to [Strapi Cloud](https://cloud.strapi.io/signups?source=github1) or deploy to the hosting platform you want**: AWS, Azure, Google Cloud, DigitalOcean.
- **Modern Admin Pane**: Elegant, entirely customizable and a fully extensible admin panel.
- **Multi-database support**: You can choose the database you prefer: PostgreSQL, MySQL, MariaDB, and SQLite.
- **Customizable**: You can quickly build your logic by fully customizing APIs, routes, or plugins to fit your needs perfectly.
- **Blazing Fast and Robust**: Built on top of Node.js and TypeScript, Strapi delivers reliable and solid performance.
- **Front-end Agnostic**: Use any front-end framework (React, Next.js, Vue, Angular, etc.), mobile apps or even IoT.
- **Secure by default**: Reusable policies, CORS, CSP, P3P, Xframe, XSS, and more.
- **Powerful CLI**: Scaffold projects and APIs on the fly.

## Features

- **Content Types Builder**: Build the most flexible publishing experience for your content managers, by giving them the freedom to create any page on the go with [fields](https://docs.strapi.io/user-docs/content-manager/writing-content#filling-up-fields), components and [Dynamic Zones](https://docs.strapi.io/user-docs/content-manager/writing-content#dynamic-zones).
- **Media Library**: Upload your images, videos, audio or documents to the media library. Easily find the right asset, edit and reuse it.
- **Internationalization**: The Internationalization (i18n) plugin allows Strapi users to create, manage and distribute localized content in different languages, called "locales
- **Role Based Access Control**: Create an unlimited number of custom roles and permissions for admin and end users.
- **GraphQL or REST**: Consume the API using REST or GraphQL

You can unlock additional features such as SSO, Audit Logs, Review Workflows in [Strapi Cloud](https://cloud.strapi.io/login?source=github1) or [Strapi Enterprise](https://strapi.io/enterprise?source=github1).


## Getting Started

If you prefer videos that guide you through the setup process you can find them [here](https://github.com/strapi/nextjs-corporate-starter/issues/71)

1. Clone the repository locally:

```bash
  git clone https://github.com/strapi/nextjs-corporate-starter.git
    or
  gh repo clone strapi/nextjs-corporate-starter
```

2. Run `setup` command to setup frontend and backend dependencies:

```bash
  yarn setup
```

3. Next, navigate to your `/backend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. Start your project by running the following command:

```bash
  yarn build
  yarn develop
```

You will be prompted to create your first admin user.

![admin-user](https://user-images.githubusercontent.com/6153188/231865420-5f03a90f-b893-4057-9634-9632920a7d97.gif)

Great. You now have your project running. Let's add some data.

## Seeding The Data

We are going to use our DEITS feature which will alow to easily import data into your project.

You can learn more about it in our documentation [here](https://docs.strapi.io/dev-docs/data-management).

In the root of our project we have our `seed-data.tar.gz` file. We will use it to seed our data.

1. Open up your terminal and make sure you are still in you `backend` folder.

2. Run the following command to seed your data:

```bash
  yarn strapi import -f ../seed-data.tar.gz
```

![after-import](https://user-images.githubusercontent.com/6153188/231865491-05cb5818-a0d0-49ce-807e-a879f7e3070c.gif)

This will import your data locally. Log back into your admin panel to see the newly imported data.

Here is a quick video covering initial setup and data seeding.

https://github.com/strapi/nextjs-corporate-starter/assets/6153188/80f00bf5-d17b-449d-8a0d-7f0d9614f40b

## Setting Up The Frontend

Next we need to switch to our `/frontend` directory and create our `.env` file and paste in the following.

```bash
NEXT_PUBLIC_STRAPI_API_TOKEN=your-api-token
NEXT_PUBLIC_PAGE_LIMIT=6
NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN=your-form-submission-token
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337

```

Before starting our Next JS app we need to go inside our Strapi Admin and create two tokens that we will be using for **form submission** and displaying our **content**.

Inside your Strapi Admin Panel navigate to Settings -> API Tokens and click on the `Create new API Token`.

![api-tokens](https://user-images.githubusercontent.com/6153188/231865572-cebc5538-374c-4050-91cd-c303fae25a3d.png)

Here are our Token Settings

Name: Public API Token Content
Description: Access to public content.
Token duration: Unlimited
Token type: Custom

In Permissions lets give the following access.

| Content         |   Permissions    |
| --------------- | :--------------: |
| Article         | find and findOne |
| Author          | find and findOne |
| Category        | find and findOne |
| Global          |       find       |
| Page            | find and findOne |
| Product-feature | find and findOne |

![permissions](https://user-images.githubusercontent.com/6153188/231865625-a3634d89-0f40-4a6d-a356-8f654abd88b9.gif)

Once you have your token add it to your `NEXT_PUBLIC_STRAPI_API_TOKEN` variable name in the `.env` file.

**Alternatively:** you can create a READ only Token that will give READ permission to all your endpoints.

In this particular project this is not an issue. Although the above is the recommended way, just wanted to show you this option here as well.

When creating a Token, just select the `Read-only` option from token type drop down.

<img width="1093" alt="create-read-only-token" src="https://github.com/strapi/nextjs-corporate-starter/assets/6153188/3ea6c029-b296-4bbc-a5ce-33eedac52a03">

Next create a token that will allow us to submit our form.

Name: Public API Form Submit
Description: Form Submission.
Token duration: Unlimited
Token type: Custom

In Permissions lets give the following access.

| Content              | Permissions |
| -------------------- | :---------: |
| Lead-Form-Submission |   create    |

Add your token to your `NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN` variable name in the `.env` file.

Once your environment variables are set you can start your frontend application by running `yarn dev`.

You should now see your Next JS frontend.

![frontend](https://user-images.githubusercontent.com/6153188/231865662-d870051f-4503-4a01-bc6b-635c7c5ca40d.png)

## Start Both Projects Concurrently

We can also start both projects with one command using the `concurrently` package.

You can find the setting inside the `package.json` file inside the root folder.

```json
{
  "scripts": {
    "frontend": "yarn dev --prefix ../frontend/",
    "backend": "yarn dev --prefix ../backend/",
    "clear": "cd frontend && rm -rf .next && rm -rf cache",
    "setup:frontend": "cd frontend && yarn",
    "setup:backend": "cd backend && yarn",
    "setup": "yarn install && yarn setup:frontend && yarn setup:backend",
    "dev": "yarn clear && concurrently \"cd frontend && yarn dev\" \"cd backend && yarn develop\""
  },
  "dependencies": {
    "concurrently": "^7.6.0"
  }
}
```
Go to the root folder and install the package, `yarn`
You can start both apps by running `yarn dev`.

## Conclusion

Hope you find this starter useful, it is a bare-bone example to help you get started quickly.

Would love to hear what you will build using it.

If you find bugs or have suggestions feel free to create issues.

Thank you and stay awesome.

# Contributing to the Next.js Corporate Starter repository

We're so excited that you're thinking about contributing to the Next.js Corporate Starter open-source project! If you're unsure or afraid of anything, just know that you can't mess up here. Any contribution is valuable, and we appreciate you!

This document aims to provide all the necessary information for you to make a contribution.

## Prerequisites

Before you can contribute, you need to have the following installed:

- Node.js and npm: You can download these from the official [Node.js website](https://nodejs.org/).
- Git: You can find installation instructions for Git in the official [Git Book](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Steps to Contribute

### 1. Fork the Repository

In your web browser, navigate to [https://github.com/strapi/nextjs-corporate-starter](https://github.com/strapi/nextjs-corporate-starter). Click the 'Fork' button in the upper right-hand corner of the page. This creates a copy of the repository in your GitHub account.

### 2. Clone your Fork

Now, go to your version of the repository. You can do this by navigating to https://github.com/USERNAME/nextjs-corporate-starter (replace 'USERNAME' with your GitHub username). Here, click the 'Clone' button and then 'Copy to clipboard' to copy the git URL.

Next, you need to open your terminal, navigate to where you want to store the project, and type the following command, followed by 'Enter':

```bash
git clone PASTE_CLONED_REPOSITORY_URL
```

Replace 'PASTE_CLONED_REPOSITORY_URL' with the URL you copied earlier. This command downloads your fork to your computer.

### 3. Add Upstream Repository

Before you can start contributing, you have to set up a reference to the original repository. You can do this with the following command:

```bash
git remote add upstream https://github.com/strapi/nextjs-corporate-starter.git
```

This command adds a new remote, named 'upstream', that points to the original repository.

### 4. Synchronize your Fork

Before you start making changes, you should synchronize your forked repository with the latest changes from the upstream. Here are the steps:

a. Fetch the branches and their respective commits:

```bash
git fetch upstream
```

b. Checkout to the main branch of your fork:

```bash
git checkout main
```

c. Merge changes from the upstream's main branch into your local main branch:

```bash
git merge upstream/main
```

This brings your fork's main branch into sync with the upstream repository, without losing your local changes.

### 5. Create a Branch

When you're making a contribution, it's best to make your changes in a new branch instead of the main branch. You can create a new branch and switch to it using the following command:

```bash
git checkout -b BRANCH_NAME
```

Replace 'BRANCH_NAME' with a name that describes the change you're planning to make.

### 6. Make your Changes

Now, you can start making changes to the project. Feel free to make changes that you think will enhance the project.

### 7. Commit your Changes

When you've made your changes, you need to commit them. This is like creating a save point in a game. You can do this using the following commands:

```bash
git add -A
git commit -m "Your detailed commit message"
```

Replace "Your detailed commit message" with a description of the changes you made.

### 8. Push your Changes

After committing your changes, you need to push them to your forked repository on GitHub. You can do this with the following command:

```bash
git push origin BRANCH_NAME
```

Replace 'BRANCH_NAME' with the name of the branch you created earlier.

### 9. Create a Pull Request

After you've pushed your changes, you're ready to create a pull request (PR). Navigate to your forked repository in your web browser and click on 'Pull request' (near the top of the page), then on 'New pull request'. Ensure that the base fork is the original repository and the base is 'main', and that the head fork is your fork and the compare is the branch you created.

Enter a title for your PR and describe the changes you made. Once you're ready, click 'Create pull request'.

### Congrats! 🎉

You've just made a contribution to the Next.js Corporate Starter project! The team will review your changes and may suggest some modifications or improvements. Once your changes have been approved, they will be merged into the main codebase.

Thank you for your contribution. We appreciate you!

Remember, everyone was new to open-source at some point. If you're unsure about something, don't hesitate to ask for help. Good luck and happy hacking!

### Psst...

If you find yourself contributing frequently, we've provided a script in the package.json to help keep your local project synchronized with the main branch of the upstream (original) project. Simply execute the following command:

```bash
yarn repo:upstream
```

## FAQ

### How do I add additional pages?
Check out [this video](https://youtu.be/EoVrTNA3geM) where I will guide on how to do this.

### How do I update my Strapi version?
Check out this [this issue comment](https://github.com/strapi/nextjs-corporate-starter/issues/17#issuecomment-1558149967)

