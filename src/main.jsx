import {} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Sobre from './routes/Sobre.jsx';
import Contato from './routes/Contato.jsx';
import Impacto from './routes/Impacto.jsx';
import Problema from './routes/Problema.jsx';
import Solucao from './routes/Solucao.jsx';
import Error from './Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    children: [
      {path: '/home', element: <Home/>},
      {path: '/', element: <Login/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/contato', element: <Contato/>},
      {path: '/impacto', element: <Impacto/>},
      {path: '/problema', element: <Problema/>},
      {path: '/solucao', element: <Solucao/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)