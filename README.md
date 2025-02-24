This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Add Firbase SDK:
npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9A8qGrIDT328e0OK5g3thSUF51Y7SRM4",
  authDomain: "kulcheshulche-92e55.firebaseapp.com",
  projectId: "kulcheshulche-92e55",
  storageBucket: "kulcheshulche-92e55.firebasestorage.app",
  messagingSenderId: "1088058662400",
  appId: "1:1088058662400:web:a03456a4fb41c6dc2902e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Using Script Tag:
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB9A8qGrIDT328e0OK5g3thSUF51Y7SRM4",
    authDomain: "kulcheshulche-92e55.firebaseapp.com",
    projectId: "kulcheshulche-92e55",
    storageBucket: "kulcheshulche-92e55.firebasestorage.app",
    messagingSenderId: "1088058662400",
    appId: "1:1088058662400:web:a03456a4fb41c6dc2902e5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>