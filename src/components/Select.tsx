import { useState } from "react"; //importar useState

const Select = ({selected, setSelected, selectOptions}: {selected:string; setSelected:Function; selectOptions:Array<string>}) => { //objeto select com variável do item selecionado, função para trocar selecionado, lista de itens
    const [open, setOpen] = useState(false) //variável para controlar se está aberto
    return (
        <>
            <div className="select-container" onClick={()=>setOpen(!open)}>{selected}</div>
            {open && (
                <ul className="select-content">
                    {selectOptions.map(option=>(
                        <li onClick={()=>{
                            setSelected(option)
                            setOpen(false)
                        }} className="select-content-item">{option}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Select;