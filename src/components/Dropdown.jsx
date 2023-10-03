import { useState } from "react";

const Dropdown = ({selected, setSelected, selectOptions}) => { //função do componente dropdown com variáveis do item selecionado, função para trocar selecionado e lista de itens
    const [open, setOpen] = useState(false) //variável para controlar se está aberto
    return(
        <>
            <div className="select-container" onClick={()=>setOpen(!open)}>{selected=="" ? "teste" : selected}</div>
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

export default Dropdown;