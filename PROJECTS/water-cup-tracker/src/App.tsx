import { useEffect, useState } from 'react'
import Cup from './assets/cup.svg'

function App() {
  const [waterCups, setWaterCups] = useState(0)

  useEffect(() => {
    //get water cups from local storage
    const waterCups = localStorage.getItem('waterCups')
    if (waterCups) {
      setWaterCups(parseInt(waterCups))
    } else {
      localStorage.setItem('waterCups', '0')
      setWaterCups(0)
    }
  }, [])

  const addWaterCup = () => {
    const newWaterCups = waterCups + 1
    setWaterCups(newWaterCups)
    localStorage.setItem('waterCups', newWaterCups.toString())
  }

  const removeWaterCup = () => {
    //don't go below 0
    if (waterCups === 0) return
    const newWaterCups = waterCups - 1
    setWaterCups(newWaterCups)
    localStorage.setItem('waterCups', newWaterCups.toString())
  }


  return (
    <main

      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#10c9bf',
      }}
    >
      <img style={{
        scale: "20%",
      }}
        src={Cup} alt="" />
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          fontWeight: 'bold',
          fontSize: '5rem',
          color: '#fff',
        }}
      >
        {waterCups}
      </div>
      <div style={{
        position: 'absolute',
        display: 'flex',
        gap: '15rem',

      }}>
        <button onClick={addWaterCup}>+</button>
        <button onClick={removeWaterCup}>-</button>
      </div>
    </main >
  )
}

export default App
