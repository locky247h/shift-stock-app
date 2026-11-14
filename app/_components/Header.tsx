'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/_libs/supabase'
import { useSupabaseSession } from '@/app/_hooks/useSupabaseSession'

export const Header: React.FC = () => {
  const router = useRouter()
  const { session, isLoading } = useSupabaseSession()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/sign_in')
  }

  return (
    <header className="bg-gray-800 text-white p-6 font-bold flex justify-between items-center">
      <Link href="/">Shift Stock | シフスト</Link>

      {/* ログイン状態の確認中は何も出さない（ちらつき防止） */}
      {!isLoading && (
        <div className="flex items-center gap-4">
          {session ? (
            <button onClick={handleLogout}>ログアウト</button>
          ) : (
            <>
              <Link href="/sign_in">ログイン</Link>
              <Link href="/sign_up">新規登録</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}