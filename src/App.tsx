import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './routes/AppRoutes';
import './App.css'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 20,
        staleTime: 1000 * 60 * 5,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      {/* <Layout> */}
        <QueryClientProvider client={client}>
          <div id='root-modal'></div>
          <AppRoutes />
          <ReactQueryDevtools />
        </QueryClientProvider>
      {/* </Layout> */}
    </>
  )
}

export default App
