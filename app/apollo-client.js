
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat, operationName } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// const { jwtDecode } = require("jwt-decode")
import { useDataTokenStore } from '@/lib/store'
// import { headers } from 'next/headers';

// const httpLink = new HttpLink({ uri: 'https://api.escuelajs.co/graphql' });
// const httpLink = createHttpLink({
//   uri: 'https://api.escuelajs.co/graphql',
//   // credentials: 'same-origin'
// });

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link,
// });

// const aaa = () => {
//   const tockenFive = useDataTokenStore((state) => state.token )
//   var bearer = `bearer ${tockenFive}`
//   return bearer
// }

// const authMiddleware = new ApolloLink((operation, forward,) => {
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: {aaa} ,
//     }
//   }));


//   return forward(operation);

// })



// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   // const token = localStorage.getItem("access-token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: aaa ? `bearer ${aaa}` : "",
//     }
//   }
// });

// const client = new ApolloClient({
//   // uri: "https://api.escuelajs.co/graphql",
//   cache: new InMemoryCache(),
//   link: concat(authMiddleware, httpLink),

// });

const client = new ApolloClient({
  uri: "https://api.escuelajs.co/graphql",
  cache: new InMemoryCache(),
  request: operation => {
    const token = useDataTokenStore((state) => state.token );
    if (token) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  }

});

export default client;
