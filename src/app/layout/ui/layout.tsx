import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-auto p-4 text-white">
          <Outlet />
        </main>
      </div>
    </div>
  )
}