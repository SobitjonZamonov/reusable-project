import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../layout"

const DashboardPage = () => {
  return <div>Dashboard page</div>
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
])