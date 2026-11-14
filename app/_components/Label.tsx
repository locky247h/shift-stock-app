'use client'

type Props = {
  htmlFor: string
  children: React.ReactNode
}

export const Label = ({ htmlFor, children }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sma font-medium text-gray-900"
      >
        {children}
      </label>
  )
}
