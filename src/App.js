import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import Pai from './Component/Pai/Pai';
import Quiz from './Component/Quiz/Quiz';
import Statistics from './Component/Statistics/Statistics';
import Topics from './Component/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/topics/quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/pai',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Pai></Pai>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;