"use client"

import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    
      <ApolloProvider client={client}>
        <main className="center h-screen">
          <LoginForm />
        </main>
      </ApolloProvider>
    
  );
}
