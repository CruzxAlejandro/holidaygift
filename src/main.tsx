import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { ScrollRestoration } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Loader from "./components/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <Loader />
    <App />
    {/* <ScrollRestoration /> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   // ScrollRestoration,
// } from "react-router-dom";
// import "./index.css";
// import App from "./App.tsx";
// import Loader from "./components/Loader.tsx";

// // Define routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         {/* <ScrollRestoration /> */}
//         <Loader />
//         <App />
//       </>
//     ),
//   },
// ]);

// // Render application
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
