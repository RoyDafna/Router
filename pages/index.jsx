import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import C1 from "../components/C1";
import C2 from "../components/C2";

export default function App() {
  return (
    <>
      <Layout>
        <C1 />
        <C2 />
      </Layout>
    </>
  );
}
