'use client'

type Props = {
  type: string
  id: string
  name: string
  placeholder: string
  required?: boolean
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input = ({ type, id, name, placeholder, required, disabled, onChange, value }: Props) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={onChange}
      value={value}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  )
}