import { useState } from "react";

function FilterWork() {

    let [details, setDetails] = useState([10, 20, 30]);
    let [valueInput, setValueInput] = useState("");

    return (
        <>
            <div>
                <input type="text" value={valueInput} onChange={(e) => {
                    let filterchange = e.target.value;
                    setValueInput(filterchange)
                }}></input>
                <ul>
                    {details.filter((ele1) => (ele1.toString().includes(valueInput)
                ))
                     .map((ele, ind) => (
                            console.table(ind,ele),
                            <li key={ind}>{ele}</li>
                        ))}          
                </ul>
            </div>
        </>
    )
}

export default FilterWork;