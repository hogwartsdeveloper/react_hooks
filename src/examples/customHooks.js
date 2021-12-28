import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')

  const input = useInput('')
  const lastName = useInput('')

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }

  // const lastNameHandler = event => {
  //   setLastName(event.target.value)
  // }

  useLogger(input.value)

  return (
    <div className={'container pt-3'}>
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      {/* <input type="text" value={lastName} onChange={lastNameHandler} /> */}
      <input type="text" {...input.bind} />
      <input type="text" {...lastName.bind} />
      <h1>{input.value} {lastName.value}</h1>
      <button className="btn btn-warning" onClick={() => input.clear()}>clear</button>
    </div>
  );
}

export default App;
