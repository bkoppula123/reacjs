import './keyBordTest.css'
function KeyBordTest({Updatetext1,Calculator,clearDate}){

    return(
        <div>
            <div className="row">
            <button onClick={()=>{
                  Updatetext1("7");
            }}>7</button>
            <button onClick={()=>{
                  Updatetext1("8");
            }}>8</button>
            <button onClick={()=>{
                  Updatetext1("9");
            }}>9</button>
            <button onClick={()=>{
                  Updatetext1("*");
            }}>*</button>
            </div>

            <div className="row">
            <button onClick={()=>{
                  Updatetext1("4");
            }}>4</button>
            <button onClick={()=>{
                  Updatetext1("5");
            }}>5</button>
            <button onClick={()=>{
                  Updatetext1("6");
            }}>6</button>
            <button  onClick={()=>{
                  Updatetext1("-");
            }}>-</button>
            </div>
            <div className="row">
            <button onClick={()=>{
                  Updatetext1("1");
            }}>1</button>
            <button onClick={()=>{
                  Updatetext1("2");
            }}>2</button>
            <button onClick={()=>{
                  Updatetext1("3");
            }}>3</button>
            <button onClick={()=>{
                  Updatetext1("+");
            }}>+</button>
            </div>
            <div className="row">
            <button onClick={()=>{
                  Updatetext1("0");
            }}>0</button>
            <button onClick={()=>{
                clearDate()
            }}>AC</button>
            <button onClick={()=>{
                 Calculator()
            }}>=</button>
            <button onClick={()=>{
                  Updatetext1("/");
            }}>/</button>
            </div>
            
        </div>
        
    )

}

export default KeyBordTest;