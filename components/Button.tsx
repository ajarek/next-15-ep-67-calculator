import React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "default" | "blue" | "orange"
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "blue":
        return "w-full from-blue-700 to-blue-900 before:from-blue-600 before:to-blue-800"
      case "orange":
        return "from-orange-500 to-orange-700 before:from-orange-400 before:to-orange-600"
      default:
        return "from-[#282828] to-[#202020] before:from-[#232323] before:to-[#4a4a4a]"
    }
  }

  return (
    <button
      className={`active:translate-x-1 active:translate-y-1 bg-gradient-to-t flex-col focus:outline focus:outline-1  ${getVariantClasses()} shadow-[inset_0_-8px_*px_rgba(0,0,0,0.15),inset_0_-8px_8px_rgba(0,0,0,0.25),0_0_0_2px_rgba(0,0,0,0.75),10px_20px_25px_rgba(0,0,0,0.4)] h-[80px] items-center inline-flex relative rounded-[10px] p-4 w-[80px] before:absolute before:bg-gradient-to-r before:border-b-[#0004] before:border-b-[1px] before:border-l-[#0004] before:border-l-[1px] before:border-t-[#0009] before:border-t-[1px] before:bottom-4 before:content-[""] before:left-1 before:right-3 before:rounded-[10px] before:shadow-[inset_-10px_-10px_10px_rgba(255,255,255,0.15),10px_5px_10px_rgba(0,0,0,0.15)] before:top-1`}
    >
      <span className='absolute z-50  translate-y-1 -translate-x-1  font-bold text-xl text-white'>
        {children}
      </span>
    </button>
  )
}

export default Button
