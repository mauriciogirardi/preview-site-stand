import { Menu } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  showIcon?: boolean
}

export function Input({ showIcon = true, ...props }: InputProps) {
  return (
    <div className="flex w-full items-center border border-gray-500 bg-gray-800 px-4 py-2">
      <input className="w-full bg-transparent outline-none" {...props} />
      {showIcon && <Menu className="text-gray-400" />}
    </div>
  )
}
