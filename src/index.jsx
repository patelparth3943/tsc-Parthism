import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import DashboardLayout from './layout/dashboardLayout';
import Home from './pages/home';
import About from './pages/about'
import ErrorPage from './layout/errorElement';
import Shop from './pages/shop';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },



    ],
  },
]);

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />,);


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './style.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Header from './containers/Header';
// import Banner from './containers/Banner';



// // Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// // Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(
//   <>
//     <Header />
//     <RouterProvider router={router} />
//     <Banner />
//   </>,
// );


// //   <div>
// //     <div className="flex gap-4 flex-wrap">
// //       <Card
// //         title="Natural"
// //         imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/6.webp"
// //         className="bg-red-200 flex-grow flex-shrink-0 basis-44"
// //       />
// //       <Card
// //         title="Hare Care"
// //         imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp"
// //         className="bg-blue-200 flex-grow flex-shrink-0 basis-44"
// //       />
// //       <Card
// //         title="Skin Care"
// //         imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/2.webp"
// //         className="bg-purple-200 flex-grow flex-shrink-0 basis-44"
// //       />
// //     </div>
// //   </div>