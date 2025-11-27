"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const params = useSearchParams()

  const redirectTo = params.get("redirect") // hero, contact, stats...

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: any) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Email va parolni kiriting!")
      return
    }

    // login bo‘ldi deb faraz qilamiz:
    if (redirectTo) {
      router.push(`/#${redirectTo}`)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">

      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Kirish</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            className="w-full p-3 border rounded-xl"
            type="email"
            placeholder="email kiriting..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Parol</label>
          <input
            className="w-full p-3 border rounded-xl"
            type="password"
            placeholder="parol..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-xl py-3 text-lg font-semibold"
        >
          Kirish
        </Button>

        <p className="text-center text-gray-600">
          Yangi foydalanuvchi?{" "}
          <a href="/register" className="text-blue-700 font-semibold">
            Ro‘yxatdan o‘tish
          </a>
        </p>
      </form>

    </div>
  )
}
