import Button from "@/components/Button"

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-slate-900 '>
      <div className="flex flex-col gap-3 px-4 pt-4 pb-6 bg-black rounded-xl shadow-xl shadow-slate-800 ">
        <div className='flex justify-end text-white text-4xl font-light p-2 border border-blue-400 rounded-lg'>
          0
        </div>
        <div className='grid grid-cols-4 gap-3 '>
          <Button variant='orange'>+</Button>
          <Button variant='default'>7</Button>
          <Button variant='default'>8</Button>
          <Button variant='default'>9</Button>
          <Button variant='orange'>-</Button>
          <Button variant='default'>4</Button>
          <Button variant='default'>5</Button>
          <Button variant='default'>6</Button>
          <Button variant='orange'>*</Button>
          <Button variant='default'>1</Button>
          <Button variant='default'>2</Button>
          <Button variant='default'>3</Button>
          <Button variant='orange'>/</Button>
          <Button variant='default'>0</Button>
          <Button variant='default'>.</Button>
          <Button variant='default'>=</Button>
        </div>
        <Button variant='blue'>C</Button>
      </div>
    </main>
  )
}
{
  /* */
}
