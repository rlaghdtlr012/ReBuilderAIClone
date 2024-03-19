import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import { theme } from './common/theme';
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
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
