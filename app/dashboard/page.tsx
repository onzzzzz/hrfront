"use client"
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Info from "@/components/Info";
import { useEffect } from "react";

const page = () => {

  return (
    <ApolloProvider client={client}>
      <Nav />
      <Header />
      <div className="flex">
        <SideBar  />
        <Info />
      </div>
    </ApolloProvider>
  )
}

export default page