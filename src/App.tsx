import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './routes/AppRoutes';
import './App.css';

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
        <AppRoutes />
      </QueryClientProvider>
      {/* </Layout> */}
    </>
  );
}

export default App;
