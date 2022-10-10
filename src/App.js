import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Topics from './Component/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
