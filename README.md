# Amplify

## Install the Amplify CLI

https://docs.amplify.aws/cli/start/install/

```
% npm install -g @aws-amplify/cli
```

## How to deploy a Next.js app

https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/

If necessary.

```
% amplify configure
```

```
% amplify init
```

### add function

```
% amplify add function
? Select which capability you want to add: Lambda function (serverless function)
? Provide an AWS Lambda function name: ApiBackend
? Choose the runtime that you want to use: Python
Only one template found - using Hello World by default.

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings? No
? Do you want to edit the local lambda function now? No
Successfully added resource ApiBackend locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/ApiBackend/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the <project-dir>/amplify/backend/function/ApiBackend/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
```

```
% amplify status

    Current Environment: dev

┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Function │ ApiBackend    │ Create    │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘
```

```
% cd amplify/backend/function/ApiBackend/
% pipenv install uvicorn fastapi mangum pydantic
```

Edit `src/index.py`.

Start API.

```
% pipenv run uvicorn --reload index:app
```

Request Example.

```
% curl -X POST -H "Content-Type: application/json" -d '{"name": "example"}' http://127.0.0.1:8000/api/name
```

Once `amplify push`.

```
% amplify push
```

A Lambda function is created.

```
% amplify status

    Current Environment: dev

┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Function │ ApiBackend    │ No Change │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘
```

(Also, `aws-exports.js` is created.)

### add api

```
% amplify add api
? Select from one of the below mentioned services: REST
✔ Provide a friendly name for your resource to be used as a label for this category in the project: · Api
✔ Provide a path (e.g., /book/{isbn}): · /api
✔ Choose a Lambda source · Use a Lambda function already added in the current Amplify project
Only one option for [Choose the Lambda function to invoke by this path]. Selecting [ApiBackend].
✔ Restrict API access? (Y/n) · yes
✔ Who should have access? · Authenticated and Guest users
✔ What permissions do you want to grant to Authenticated users? · create, read, update, delete
✔ What permissions do you want to grant to Guest users? · create, read, update, delete
✅ Successfully added auth resource locally.
✔ Do you want to add another path? (y/N) · no
✅ Successfully added resource Api locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

```
% amplify status

    Current Environment: dev

┌──────────┬────────────────┬───────────┬───────────────────┐
│ Category │ Resource name  │ Operation │ Provider plugin   │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Auth     │ amplifyexample │ Create    │ awscloudformation │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Api      │ Api            │ Create    │ awscloudformation │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Function │ ApiBackend     │ No Change │ awscloudformation │
└──────────┴────────────────┴───────────┴───────────────────┘
```

"`Restrict API access? (Y/n) · yes`", so the Auth is also created.

```
% amplify push
```

```
% amplify status

    Current Environment: dev

┌──────────┬────────────────┬───────────┬───────────────────┐
│ Category │ Resource name  │ Operation │ Provider plugin   │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Function │ ApiBackend     │ No Change │ awscloudformation │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Auth     │ amplifyexample │ No Change │ awscloudformation │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Api      │ Api            │ No Change │ awscloudformation │
└──────────┴────────────────┴───────────┴───────────────────┘

REST API endpoint: https://<xxx>.execute-api.<region>.amazonaws.com/dev
```

# Next.js

```
% npx create-next-app --typescript .
```

# readme generated by `create-next-app`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!--
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
-->

## Install Amplify libraries

https://docs.amplify.aws/start/getting-started/setup/q/integration/next/#install-amplify-libraries

```
% npm install aws-amplify @aws-amplify/ui-react
```

## Use API

https://docs.amplify.aws/start/getting-started/data-model/q/integration/next/#api-with-incremental-static-site-generation-ssg

Example of change:

```diff
--- a/pages/index.tsx
+++ b/pages/index.tsx
@@ -3,7 +3,31 @@ import Head from 'next/head'
 // import Image from 'next/image'
 import styles from '../styles/Home.module.css'

-const Home: NextPage = () => {
+import { Amplify, API, withSSRContext } from 'aws-amplify'
+import awsExports from '../aws-exports'
+
+Amplify.configure(awsExports)
+
+export async function getStaticProps() {
+  const SSR = withSSRContext()
+  const res = await SSR.API.post(
+    'Api', // The name of the api that you specified when you `amplify add api`.
+    '/api/name',
+    {
+      body: {
+        name: 'test',
+      }
+    }
+  )
+
+  return {
+    props: {
+      name: res.name
+    }
+  }
+}
+
+const Home: NextPage = ({ name }) => {
   return (
     <div className={styles.container}>
       <Head>
@@ -22,6 +46,10 @@ const Home: NextPage = () => {
           <code className={styles.code}>pages/index.tsx</code>
         </p>

+        <p>
+          name: {name}
+        </p>
+
         <div className={styles.grid}>
           <a href="https://nextjs.org/docs" className={styles.card}>
             <h2>Documentation &rarr;</h2>
```
