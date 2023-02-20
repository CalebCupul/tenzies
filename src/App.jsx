import { useState } from 'react'
import Die from './Die'

function App() {
  return (
    <div className='p-10 bg-dark-blue h-screen grid align-middle justify-center'>
      <div className='bg-white-50 max-w-md py-12 px-12 rounded-xl my-auto'>
        <div className='font-inter text-center text-dark-blue px-4'>
          <h1 className='text-4xl font-bold'>Tenzies</h1>
          <p className='mt-1'>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
        </div>
        <div className='mt-8 gap-6 text-xl font-bold self-center grid grid-cols-5 items-center place-items-center'>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
          <Die value={1}></Die>
        </div>
        <div className='flex justify-center'>
          <button className=' text-white font-inter tracking-wider bg-dark-purple px-8 py-2 rounded-md mt-6 '>Roll</button>
        </div>
      </div>
    </div>
  )
}

export default App
