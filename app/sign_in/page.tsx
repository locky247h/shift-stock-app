'use client'

import { supabase } from '@/app/_libs/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@/app/_components/Input'
import { Label } from '@/app/_components/Label'


export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert('ログインに失敗しました')
    } else {
      router.replace('/admin/shifts')
    }
    setIsLoading(false)
  }

  return (
    <div className="flex justify-center pt-60">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-100">
        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
          />
        </div>
        <div>
          <Label htmlFor="password">パスワード</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={isLoading}
          >
            ログイン
          </button>
        </div>
      </form>
    </div>
  )
}