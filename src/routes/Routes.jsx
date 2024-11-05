import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Revieww from "../pages/Revieww";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader:()=>fetch('../category.json'),
            children:[
                {
                    path:'/category/:category',
                    element:<ProductCard></ProductCard> ,
                    
                },
                {
                    path:'/',
                    element:<ProductCard></ProductCard> ,
                    
                }
            ]
        },
        {
            path:'/dashboard',
            element:<Dashboard/>,
        },
        {
            path:'/statistics',
            element:<Statistics/>,

        },
        {
            path:'/review',
            element:<Revieww></Revieww>
        }
      ]
    },
  ]);

  export default router