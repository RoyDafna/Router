import { useRouter } from "next/router";
import React from "react";

export default function App() {
  const router = useRouter();
  return (
    <>
      <h1>inside 2 {router.query.slug.map((param) => param)}</h1>
    </>
  );
}
