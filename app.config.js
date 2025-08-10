import 'dotenv/config';

export default {
  expo: {
    name: "connext",
    slug: "connext",
    version: "1.0.0",

    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,  
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET, 
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL
    },

    web: {
      favicon: "./assets/favicon.png"
    },

    experiments: {
      tsconfigPaths: true
    },

    plugins: [],

    orientation: "portrait",
    icon: "./assets/icon.png",

    userInterfaceStyle: "light",

    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    }
  }
}