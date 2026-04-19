import { Home, LayoutDashboard, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../../../shared/lib/utils"

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Home", icon: Home, path: "/" },
  { name: "Settings", icon: Settings, path: "/settings" },
]

export const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <aside className="w-64 h-screen bg-zinc-950 text-white flex flex-col border-r border-zinc-800">
      <div className="p-4 text-lg font-bold border-b border-zinc-800">
        Acme Inc.
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon
          const active = pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition",
                active
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-900"
              )}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800 text-sm text-zinc-400">
        © 2026
      </div>
    </aside>
  )
}