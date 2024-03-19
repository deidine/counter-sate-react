import '../css/App.css'
import { useState } from "react"

function Test1(){
    const [increm, setIncrem] = useState<number>(0)

    return  <div className="card">
      <div> count is {increm}</div> 
    <h2>increment and decrement</h2>
 
      <button className='button-cart' onClick={() => setIncrem((increm) => increm + 1)}>
        increment
      </button>
  
      <button className='button-cart' onClick={() => {
        if (increm <= 0) {

        } else {
          setIncrem((increm) => increm - 1)

        }
      }}>
        decrement
      </button>

    </div> 
  
}


export default Test1 ;