'use client'

import React from 'react'

type Props = React.ComponentProps<'input'>

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    )
  }
)

Input.displayName = 'Input'
