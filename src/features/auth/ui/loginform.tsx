// features/auth/ui/login-form.tsx
import { useLogin } from "../model/use-login"
import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const { mutate, isPending } = useLogin()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("accessToken", data.accessToken)
          localStorage.setItem("refreshToken", data.refreshToken)

          navigate("/")
        },
      }
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button className="w-full" disabled={isPending}>
        Login
      </Button>
    </form>
  )
}