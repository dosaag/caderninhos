//import Select from "./components/Select"; //importar componente Select
import { useState } from "react"; //importar useState

//const [selected, setSelected] = useState("");
//const selectOptions=['item 1','item 2','item 3'];
const [select, setSelected] = useState<string>(""); //controle do item selecionado, tipo string
let selectOptions:Array<String>=['item1','item2','item3']; // lista de opções de seleção, tipo array de strings

function App() {
  return (
    <>
      {/*<Select selected={selected} setSelected={setSelected} selectOptions={selectOptions}/>*/}
      <h1>
        Caderninhos
      </h1>
    </>
  )
}

export default App
