import { useState } from 'react'
import Dropdown from './components/Dropdown';

function App() {
  const [selected, setSelected] = useState("");//controle do item selecionado
  let selectOptions=['item 1','item 2','item 3'];//lista de opções
  return (
    <>
      <Dropdown selected={selected} setSelected={setSelected} selectOptions={selectOptions}/>
      <h1>Teste</h1>
    </>
  )
}

export default App
