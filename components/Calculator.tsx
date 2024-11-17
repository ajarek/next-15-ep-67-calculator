'use client'
import Button from "@/components/Button"
import { useState } from "react"


const Calculator = () => {
  const [display, setDisplay] = useState<string>('')

  const handleButtonClick = (value: string) => {
    setDisplay(display+value)
  }

  const handleResultClick = () => {
    try{
      setDisplay(eval(display).toString())
    } catch (error:unknown){
      setDisplay( (error instanceof Error ? error.message : String(error)))
    }
  }

  return (
    <div className="max-w-[360px] flex flex-col gap-3 p-4 pb-6 bg-black rounded-xl  shadow-slate-400 shadow-inner ">
       <div className="w-full min-h-[70px] text-end  text-white text-4xl font-light p-4  border-slate-300 rounded-lg whitespace-normal break-words bg-gradient-to-r from-slate-500 to-slate-700 shadow-slate-300 shadow-inner">
           {display}
      </div>

    <div className='grid grid-cols-4 gap-3 '>
      <Button onClick={()=>handleButtonClick('+')} variant='orange'>+</Button>
      <Button onClick={()=>handleButtonClick('7')} variant='default'>7</Button>
      <Button onClick={()=>handleButtonClick('8')} variant='default'>8</Button>
      <Button onClick={()=>handleButtonClick('9')} variant='default'>9</Button>
      <Button onClick={()=>handleButtonClick('-')} variant='orange'>-</Button>
      <Button onClick={()=>handleButtonClick('4')} variant='default'>4</Button>
      <Button onClick={()=>handleButtonClick('5')} variant='default'>5</Button>
      <Button onClick={()=>handleButtonClick('6')} variant='default'>6</Button>
      <Button onClick={()=>handleButtonClick('*')} variant='orange'>*</Button>
      <Button onClick={()=>handleButtonClick('1')} variant='default'>1</Button>
      <Button onClick={()=>handleButtonClick('2')} variant='default'>2</Button>
      <Button onClick={()=>handleButtonClick('3')} variant='default'>3</Button>
      <Button onClick={()=>handleButtonClick('/')} variant='orange'>/</Button>
      <Button onClick={()=>handleButtonClick('0')} variant='default'>0</Button>
      <Button onClick={()=>handleButtonClick('.')} variant='default'>.</Button>
      <Button onClick={()=>handleResultClick()} variant='default'>=</Button>
    </div>
    <Button onClick={()=>setDisplay('')} variant='blue'>C</Button>
  </div>
  )
}

export default Calculator