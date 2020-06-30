import { AppProps } from "next/app";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch,
  }),
  defaultOptions: {
    watchQuery: {
      pollInterval: parseInt(process.env.POLL_INTERVAL as string, 10),
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
