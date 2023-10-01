import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Authprovider from './Components/Provider/Authprovider';
import Order from './Components/Order/Order';
import Privateroutes from './Components/Routs/Privateroutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/order',
        element:<Privateroutes><Order></Order></Privateroutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
