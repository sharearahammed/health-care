import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:"/",
            element:<Home />
        }
      ]
    },
  ]);

export default router;