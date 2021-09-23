import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Head>
      <QueryClientProvider client={queryClient}> <Component {...pageProps} /> </QueryClientProvider>
    </>
  )
}

export default MyApp;





