import { initializeApp, getApps, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config: FirebaseOptions = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export const firebase = (() => {
  const _app = getApps().find((app) => app.name === "poteboy");
  const config: FirebaseOptions =
    typeof document === "undefined"
      ? {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          messagingSenderId: process.env.SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID,
        }
      : {
          apiKey: process.env.NEXT_PUBLIC_API_KEY,
          authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
          messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
          appId: process.env.NEXT_PUBLIC_APP_ID,
          measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
        };
  return _app ?? initializeApp(config);
})();

export const fbCollectionKeys = {
  blogPost: "blogPost",
} as const;

export const firestore = getFirestore();

export {
  getDoc,
  setDoc,
  query,
  collection,
  doc,
  runTransaction,
  Timestamp,
  getDocs,
} from "firebase/firestore";
