import { useEffect, useState } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'

function App() {
  const [dices, setDices] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    // pending use effect for winning logic
  }, [dices])

  function allNewDice() {
    let diceArray = []

    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie())
    }
    return diceArray
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      hold: holdDice
    }
  }

  function holdDice(id) {
    setDices(prevDices => prevDices.map(dice => dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice))
  }

  const diceElements = dices.map((dice) => <Die key={dice.id} id={dice.id} value={dice.value} isHeld={dice.isHeld} hold={holdDice}></Die>)

  function rollDice() {
    setDices(prevDices => prevDices.map(dice => dice.isHeld ? dice : generateNewDie()))
    setTenzies(prevTenzies => !prevTenzies)
  }


  return (
    <div className='p-10 bg-dark-blue h-screen grid align-middle justify-center'>
      <div className='bg-white-50 max-w-md py-12 px-12 rounded-xl my-auto'>
        <div className='font-inter text-center text-dark-blue px-4'>
          <h1 className='text-4xl font-bold'>Tenzies</h1>
          <p className='mt-1'>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
        </div>
        <div className='mt-8 gap-6 text-xl font-bold self-center grid grid-cols-5 items-center place-items-center'>
          {diceElements}

        </div>
        <div className='flex justify-center'>
          <button onClick={rollDice} className=' text-white font-inter tracking-wider bg-dark-purple px-8 py-2 rounded-md mt-6 '>Roll</button>
        </div>
      </div>
    </div>
  )
}

export default App
