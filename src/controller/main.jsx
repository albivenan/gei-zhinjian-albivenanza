import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


import SendMessagePublic from "../pages/sendmessagepublic/index.jsx";




import ProtectedRouteAlbi from "../private/hooks/protectedroute.jsx";
import Albi from "../private/pages/albi/index.jsx"
import LoginAlbi from "../pages/loginalbi/index.jsx";
import App from "../pages/index/App.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sendmessagepublic",
    element: <SendMessagePublic />,
  },
  {
    path: "/login",
    element: <LoginAlbi />,
  },
  {
    path: "/albi",
    element: <ProtectedRouteAlbi><Albi /></ProtectedRouteAlbi>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);