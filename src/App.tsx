import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import RouterProvider from './router';
import { ConfigProvider } from 'antd';
import { theme } from './antd/theme';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Suspense } from 'react';


const App = () => {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={theme}
        >
          <BrowserRouter>
            <Suspense>
              <RouterProvider />
            </Suspense>
          </BrowserRouter>
        </ConfigProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
