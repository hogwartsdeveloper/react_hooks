import React, { useState, useEffect, useRef, useMemo } from "react";


function complexComputed(num) {
  console.log('complexComputed')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // const styles = {
  //   color: colored ? 'darkred' : 'black'
  // }

  // const styles2 = {
  //   color: colored ? 'darkred' : 'black'
  // }
  // console.log(styles === styles2)

  const styles = useMemo(() => ({
    color: colored ? 'darked' : 'black'
  }), [colored])

  const computed = useMemo(() => {
    return complexComputed(number)
  }, [number])

  // const computed = complexComputed(number)

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Delete</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
}

export default App;
