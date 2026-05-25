'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouteGuard } from './_hooks/useRouteGuard'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useRouteGuard()

  const pathname = usePathname()
  const isSelected = (href: string) => {
    return pathname.includes(href)
  }

  return (
    <>
      <aside className="fixed bg-gray-100 w-70 left-0 bottom-0 top-18">
        <Link
          href="/admin/shifts"
          className={`p-4 block hover:bg-blue-100 ${
            isSelected('/admin/shifts') && 'bg-blue-100'
          }`}
        >
          シフト一覧
        </Link>
      </aside>

      <div className="ml-70 p-4">{children}</div>
    </>
  )
}