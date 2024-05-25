import Head from "next/head";
import "../app/globals.css";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <Head>
        <title>Fun</title>
      </Head>
      <div className="animate-bounce">
        <h1 className="font-bold text-4xl mb-3 text-white">
          老師拜託讓我過
        </h1>
        <p className="text-white">
          我會好好生活....
        </p>
      </div>
    </div>
  );
}