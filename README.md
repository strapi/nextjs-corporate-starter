# Strapi Starter Next 13, Tailwind, Typescript and Strapi

note: This project was started with love by Trecia, Daniel and Paul.  We were all new to Next 13 and Typescript.  If you find any bugs or improvements feel free to create an issue.  Thank you all for your support and participation.

## Getting Started 

1. Clone the repository locally:

``` bash
  git clone https://github.com/PaulBratslavsky/strapi-next-starter-dev.git 
    or
  gh repo clone PaulBratslavsky/strapi-next-starter-dev
```

2. CD into `backend` directory and run the following command to install all the dependencies:

``` bash
  yarn 
```

3. Next Set up your `.env` file.  You can use use the `.env.example` file as reference:
``` bash
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. Start Your Project by running the following command:
``` bash
  yarn build
  yarn develop
```

You will be prompted to create your first admin user.

Great. You now have your project running.  Let's add some data.

## Seeding The Data 

We are going to use our DEITS feature which will alow to easily import data into your project.

You can learn more about it in our documentation. <-- need link to docs -->

In the root of our project we have our `seed-data.tar.gz` file.  We will use it to seed our data.

1. Open up your terminal and make sure you are still in you `backend` folder.

2. Run the following command to seed your data:

``` bash
  yarn strapi import -f ../seed-data.tar.gz
```

This will import your data locally.  Log into your admin panel to see the newly imported data.


https://snugly-right-limit.strapiapp.com/admin

834a6f00ef26a015e0707693bfc5ee52620984e7d963d93dca85d523c3117b441e96e3efd17d0fcdc881eb6464c663f4380d5243f0f71a51b8d8e2499a877f0f205c006efe7924e2b5b3d1afae6eb5c5ae6de74557d1e40ff9e72e5d4d4fafddadcb9c42972a7e405036e660aa978a8f8c8c9d41ed55f314d7b8964a800ddadd
# nextjs-corporate-starter
