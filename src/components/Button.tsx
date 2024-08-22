import { ReactNode } from "react"

interface ButtonProps {
    type?: "primary" | "secondary"
    size?: "small" | "large" | "tall"
    children: ReactNode
}

export default function Button({ children, type = "primary", size = "small" }: ButtonProps) {
  
    const baseClasses = "text-gray-100 rounded-sm transition-all text-xs duration-300"
    const typeClasses = {"primary": "bg-primary-200 shadow-buttonPrimary hover:bg-primary-300", "secondary": "bg-buttonBlack"}
    const sizeClasses = { "small": "px-6 py-2", "large": "px-10 py-2", "tall": "w-full" }
  
    return (
    <button className={`${baseClasses} ${typeClasses[type]} ${sizeClasses[size]}`}>{children}</button>
  )
}
