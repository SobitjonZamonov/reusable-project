"use client";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import {
  CardTitle,
  CardDescription,
} from "@/shared/ui/card";

import {
  setAccessToken,
  setRefreshToken,
} from "@/shared/lib/cookies";
import { useLogin } from "../api/use-login";
import { Label } from "@/shared/ui/label";

export const LoginForm = () => {
  const navigate = useNavigate();

  const { mutate, isPending } =
    useLogin();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState(
    "admin@example.com"
  );

  const [password, setPassword] =
    useState("admin12345");

  const onSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          setAccessToken(
            data.access_token
          );

          setRefreshToken(
            data.refresh_token
          );

          navigate("/");
        },
      }
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <CardTitle className="text-3xl">
          Welcome Back
        </CardTitle>

        <CardDescription>
          Login to admin panel
        </CardDescription>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-5"
      >
        <div className="space-y-2">
          <Label>Email</Label>

          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>

          <div className="relative">
            <Input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target
                    .value
                )
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending
            ? "Loading..."
            : "Login"}
        </Button>
      </form>
    </div>
  );
};