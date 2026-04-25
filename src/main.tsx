import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "@/index.css"
import { router } from "./app/router"
import { ThemeProvider } from "./app/providers/theme-provider"
import { QueryProvider } from "./app/providers/query-provider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>
)