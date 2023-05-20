import React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};
