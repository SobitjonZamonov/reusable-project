"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/shared/ui/button"

export const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const isDark = resolvedTheme === "dark"

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
    )
}