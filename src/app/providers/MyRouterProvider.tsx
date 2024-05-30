import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/main";

export const MyRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
