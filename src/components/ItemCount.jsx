import { useState } from "react"

function ItemCount() { 

const [counter, setCounter] = useState(1)

const handleClickAdd = () => {
    setCounter(counter + 1)
}
const handleClickDelete = () => {
    if (counter > 1){
        setCounter(counter - 1)
    }
}

    return (
        <div className="btn-group">
            <button onClick={handleClickDelete} className="btn btn-comprar">-</button>
            <p className="contador">{counter}</p>
            <button onClick={handleClickAdd} className="btn btn-comprar">+</button>
        </div>
    )
}
export default ItemCount