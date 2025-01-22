import './App.css';
import { useState } from 'react';
import ProductDetails from './Product';

function App() {

  let [counter,updateCounter] = useState(0);

  let ids = {

           
           fname: 'ram111',
           lname: 'koppula',
           age:34

  }

  let stock= 10;
  return (
    <>

     <div className="App">

      <button className='minus' onClick={()=>{

              if(counter > 0){

                updateCounter(counter - 1)

              }

                }}> -
      </button>
      <p>{counter}</p>
      <button className='plus'  onClick={()=>{
             if(counter < stock){

              updateCounter( counter + 1)

             }

      }}>+</button>
      <br></br>
     
     

     <ProductDetails fname={ids.fname} />
     </div>

    </>
    
  );
}

export default App;
