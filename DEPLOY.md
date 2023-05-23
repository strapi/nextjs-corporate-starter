# Let's Deploy our project to Strapi Cloud and Vercel

## Prerequisites 

You need to have a local project set up in your local branch. 

If you have not done that yet, we will cover it in the following section.

## Let's Setup Our Project Locally

[Strapi Starter GitHub](https://github.com/strapi/nextjs-corporate-starter)

Go and click on the `use template` button and follow the steps to set up your own project branch.

![Strapi Starter GitHub](readme-images/strapi-git-hub.png)

I am going to choose `create new repository` you will be greeted with the following screen.

![Create New Branch](readme-images/create-branch.png)

Add your description and click on the `Create Repository From Template` button.

Once you have created your own branch you can follow the following steps on how to set up your project locally [here](https://github.com/strapi/nextjs-corporate-starter#readme)

**Local Setup Guide Checklist**

- [ ] Pull the project to your computer
- [ ] Run `yarn setup`
- [ ] Create `.env` file in `backend` folder based on the example file
- [ ] Start your project with `yarn build` and `yarn develop`
- [ ] Create your first **admin** user
- [ ] Seed your data with `yarn strapi import -f ../seed-data.tar.gz` command
- [ ] Create `.env` file in `frontend` folder based on the example file
- [ ] In Strapi create NEXT_PUBLIC_STRAPI_API_TOKEN Token and add to the `frontend/.env` file
- [ ] In Strapi create NEXT_STRAPI_FORM_SUBMISSION_TOKEN Token and add to the `frontend/.env` file.
- [ ] In root folder run `yarn dev`

Once you completed all these steps, your project should be up and running. 

![Strapi Starter](readme-images/strapi-next-starter.png)

## Deploying Our Backend To Strapi Cloud

**note:** it always recommended that you always deploy the latest Strapi project, you can check the version in `package.json` file and upgrade accordingly.

I will give you a quick overview of the process just in case this is something you would like to do.  

### Updating Your Strapi Project

Navigate to your `backend/package.json` file.

``` json
 "dependencies": {
    "@strapi/plugin-i18n": "4.9.2",
    "@strapi/plugin-seo": "^1.8.0",
    "@strapi/plugin-users-permissions": "4.9.2",
    "@strapi/strapi": "4.9.2",
    "better-sqlite3": "7.4.6"
  },
```

You can see my current project dependencies. I am going to replace my Strapi version from `4.9.2` to `4.10.5`

``` json
 "dependencies": {
    "@strapi/plugin-i18n": "4.10.5",
    "@strapi/plugin-seo": "^1.8.0",
    "@strapi/plugin-users-permissions": "4.10.5",
    "@strapi/strapi": "4.10.5",
    "better-sqlite3": "7.4.6"
  },
```
**note:** if you are using additional external packages or plugins, check and update accordingly.

Once you make the changes in your `package.json` file run the following commands for clean update.

Make sure you are in the correct folder. I am in the `backend` folder of my project.  This is where you will find your Strapi code.

``` bash
rm -rf node_modules
rm yarn.lock
yarn
yarn build && yarn develop
```

Once you check that everything is running correctly push all your recent changes to github.

From the root folder of your project run the following command.

``` bash
git add .
git commit -m "Strapi Version Update"
git push -u origin main
```
### Create Your Strapi Cloud Account

You can go to [here](https://strapi.io/cloud) to get Started with your Strapi Cloud Trial.

![Strapi Cloud](readme-images/strapi-cloud.png)

Click the `Free Trial` button. It will take you to Strapi Cloud where you will be able to get started with your GitHub Account.

![Cloud Sign Up](readme-images/signup-cloud.png)

Click on `Log in with GitHub` and follow the steps.

![Git Hub Authorize](readme-images/auth-git-hub.png)

You will be asked to authorize your account, click on the `Authorize Strapi cloud` button.

You should now be greeted by the Strapi Cloud Dashboard.

![Strapi Dashboard](readme-images/cloud-dashboard.png)

You can watch [Strapi Cloud Dashboard Overview](https://youtu.be/hJ3grbeVSSo) to get familiar with the dashboard.

We are now ready to deploy our first Strapi Project.

## Creating Your First Strapi Project

![Create Strapi Project](readme-images/first-cloud-project.gif)

Follow these steps to create your first Strapi Project.

1. Click `Create Project` button
2. Select `14 Day Trial` click Next
3. Select your repo, you may be asked to authorize  with GitHub.
4. Click `show advanced settings` and add your Strapi repo directory `/backend`
5. Enter your billing info and continue

**Note:** You have a 14 day free trial before you get billed.  So don't forget to cancel if you are just testing out the service.

Once the deployment is complete, you should see you the `done` message.  

![Deployment Complete](readme-images/deployment-comlete.png)

Let's go and create our first **Admin** user.

![Create First Admin Cloud User](readme-images/create-cloud-admin.gif)

Once you create **admin** user and login, you are now ready for our next step.

## Seeding Our Local Data To Cloud with Strapi Transfer

**Note:** Before pushing your data to cloud make sure that you have completed the above steps and have local data in your project.


- [ ] Create transfer token on the Strapi Cloud Instance
- [ ] Save your token ( it will be needed for transfer )
- [ ] In the local strapi version run the transfer command

**Note:** The DIETS transfer f

``` bash
  yarn strapi transfer --to https://example.com/admin 
```

Click enter

``` bash
backend git:(main) yarn strapi transfer --to https://eloquent-amusement-f1ec474780.strapiapp.com/admin 

yarn run v1.22.19
warning ../../../../package.json: No license field
$ strapi transfer --to https://eloquent-amusement-f1ec474780.strapiapp.com/admin
? Please enter your transfer token for the remote Strapi destination [input is hidden] 

```

``` bash
? The transfer will delete all the remote Strapi assets and its database. Are you sure you want to proceed? (y/N) 
```

Selecting `yes` will delete all the previous data in your Strapi Cloud Project

Enter your token


yarn strapi transfer -- --to https://eloquent-amusement-f1ec474780.strapiapp.com/admin

``` bash 
$ strapi transfer --to https://eloquent-amusement-f1ec474780.strapiapp.com/admin
? Please enter your transfer token for the remote Strapi destination [hidden]
? The transfer will delete all the remote Strapi assets and its database. Are you sure you want to proceed? Yes
[2023-05-22 08:43:02.860] warn: (Schema Integrity) Review workflows feature does not exist on source
? There are differences in schema between the source and destination, and the data listed above will be lost. Are you sure you want to continue? Yes
Starting transfer...
✔ entities: 227 transfered (size: 100.2 KB) (elapsed: 18996 ms) 
⠹ assets: 70 transfered (size: 23.3 MB) (elapsed: 7568 ms) (3.1 MB/s)

```

``` bash
yarn strapi transfer --to https://eloquent-amusement-f1ec474780.strapiapp.com/admin --to-token <your token> --exclude=files --force
```
