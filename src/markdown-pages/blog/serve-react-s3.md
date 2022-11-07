---
slug: "/blog/serve-a-react-app-from-s3"
date: "2022-11-02"
title: "Serve a React App from S3"
subtitle: "Includes Cloudfront CDN and Github Action CI/CD"
tags: ["react", "cloudfront", "aws", "github actions", "ci/cd"]
featuredImage: "../../images/react-logo.png"
---

![React Logo](../../images/react-logo.png)

# Goal

The idea here is to serve a React app from an S3 bucket using Cloudfront as a CDN and deploy it via Github.

## What do you need?

There's a few bits you'll need before we start.

- AWS Account
- Github Account
- npm installed on your machine
- Basic knowledge of Javascript and the Cloud

# Make the App

The first thing we'll need is a basic React app if you already have one you want to deploy you can skip this step.

## Create React App

You can use the `create-react-app` package to quickly bootstrap a React app.

```bash
$ npx create-react-app s3-hosted-site-tutorial
$ cd s3-hosted-site-tutorial
$ npm start
```

We'll navigate to `http://localhost:3000` just to make sure our site works.

## Add Boilerplate Github Action

Next, we'll add a file that describes what we want the Github action to accomplish. This action uses a Github action VM running Ubuntu to run some commands. It is triggered only when we push to the production branch. This is helpful because it allows development to continue unimpeded until it's time to push the app live to production.

First, it uses `actions/checkout` to pull the repo into the VM. Then, it removes the `package-lock.json` file. I like to do this step to make sure I'm getting the proper packages for the Host OS. I have encountered problems with different development environments muddying up a the `package-lock.json`. Then, it installs the npm packages and runs a build

After that, the action moves into AWS territory. It first uses an action from AWS to setup the Credentials on the VM. Then, it performs a S3 sync to push the built code into the bucket. After that, the VM invalidates the previous Cloudfront cache. This is a very important step because we have to tell Cloudfront we've updated the contents of the bucket and all the information is has cached at the edge is no longer current. 

**Create the File**

1. Create a `.github` directory in your root project folder
2. Create a `workflows` directory in the `.github` folder
3. Finally create a file `deployToAWS.yml` in the `workflows` folder and paste the following in below. We will need to update some info in here after we create the resources on AWS.

```yaml
name: deployToAWS

on:
  push:
    branches:
      - production

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - run: rm package-lock.json
      - run: npm install
      - run: npm run build
        env:
          CI: false

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: AWS S3 Sync
        run: aws s3 sync build s3://${{ secrets.AWS_S3_BUCKET_NAME }}/

      - name: AWS Cloudfront Invalidation
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }} --paths "/index.html"
```

# AWS Setup

Now, we'll move over to the AWS side of things. So go on ahead, and login to your AWS account.

## Create the IAM User

