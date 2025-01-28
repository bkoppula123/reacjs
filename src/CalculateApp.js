import { useState } from "react";
import KeyBordTest from "./KeyBordTest";
function CalculateApp() {

      let [input, setInput] = useState("0");

      function Updatetext(value) {
        if (input === "0" && value !== "0") {
            setInput(value); // Replace "0" with the selected value, except when "0" is clicked
        } else {
            setInput(value + input); // Concatenate the value with the existing input
        }
    }
    

    function Updatetext(value) {
        if (input === "0") {
            setInput(value); // Replace "0" with the selected value
        } else {
            setInput(input + value); // Concatenate the value with the existing input
        }
    }
    

      function Calculator(){

            let test =  eval(input);
            setInput(test);

      }

      function clearDate(){

        setInput("0")

      }


    return (

        <div>

             <input type="text" value={input}></input>
             <KeyBordTest Updatetext1 = {Updatetext} Calculator = {Calculator} clearDate={clearDate}></KeyBordTest>
        </div>
    )

}

export default CalculateApp;