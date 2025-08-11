// src/pages/_app.js
import "@/app/globals.css"; // ✅ Adjust the path as needed

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
