"use client"
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client';
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Info from "@/components/Info";


const page = () => {
  
  // const token = localStorage.getItem('access_token');

  const MYINFO = gql`
    
    query {
      myProfile {
        id
        name
        avatar
      }
    }
  `;

  // const { loading, error, data } = useQuery(MYINFO );


  return (
    <>
      <Nav />
      <Header />
      <div className="flex">
        <SideBar />
        <Info />
      </div>
    </>
  )
}

export default page


// <ApolloProvider client={client}>
    //   <div>
    //     {/* <div>{data.myprofile.name}</div>
    //     <Image
    //       src={data.myprofile.avatar}
    //       width={500}
    //       height={500}
    //       alt="Picture of the author"
    //     /> */}
    //   </div>
    // </ApolloProvider>