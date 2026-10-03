'use client'

import { supabase } from '@/app/_libs/supabase'
import { Input } from '@/app/_components/Input'
import { Label } from '@/app/_components/Label'
import { useForm} from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

export default function Page() {
  // React Hook Formのセットアップ
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>()

  // パスワードの状態管理
  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      alert('ログインに失敗しました')
    } else {
      alert('ログインに成功しました')
    }
  }

  return (
    <div className="flex justify-center pt-60">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-100">
        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            type="email"
            id="email"
            placeholder="name@company.com"
            required
            disabled={isSubmitting}
            {...register('email')}
          />
        </div>
        <div>
          <Label htmlFor="password">パスワード</Label>
          <Input
            type="password"
            id="password"
            placeholder="••••••••"
            required
            disabled={isSubmitting}
            {...register('password')}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={isSubmitting}
          >
            ログイン
          </button>
        </div>
      </form>
    </div>
  )
}