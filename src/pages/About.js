import React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

export const About = () => {
  return (
    <>
      <Header />
      <Layout>
        <h1>About Page</h1>
        <span>This app is github search</span>
      </Layout>
    </>
  );
};
