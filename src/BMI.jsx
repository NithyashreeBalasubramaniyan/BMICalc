import React from 'react'
import fitness from './assets/fitness2.jpg'
import './BMI.css'
import { useState } from 'react'
export const BMI = () => {
    const [weight,setWeight]=useState("")
    const [height,setHeight]=useState("")
    const [bmi,setbmi]=useState(null)
    const [status,setStatus]=useState("")
    const [error,seterror]=useState("")
    function calculate(){
        const h=height/100
        const isvalidheight=/^\d+$/.test(height)
        const isvalidweight=/^\d+$/.test(weight)
        if(isvalidheight && isvalidweight){
            const bmi=(weight/(h*h)).toFixed(2)
            setbmi(bmi)
            if(bmi<=18.9){
                setStatus("UnderWeight")
            }
            else if( bmi<=24.9){
                setStatus("Normal")
            }
            else if( bmi<=29.9){
                setStatus("OverWeight")
            }
            else{
                setStatus("obese")
            }
            seterror("")   
        }
        else
        {
            setbmi(null)
            seterror("Please enter the valid numeric value for height and weight")
        }
    }
    function clear(){
        setHeight("")
        setWeight("")
        setbmi(null)
    }
  return (
    <div className='container'>
        <div className='left'>
            <img src={fitness}/>
        </div>
        <div className='right'>
            <h1>BMI Calculator</h1>
            {error && <p>{error}</p>}
            <input type='text' className='weight in'  value={weight} onChange={(e)=>{setWeight(e.target.value)}} placeholder='Enter Weight(kg)'></input>
            <input  type='text'className='height in'  value={height} onChange={(e)=>{setHeight(e.target.value)}} placeholder='Enter Height(cm)'></input>
            <div className='btns'>
                < button className='btn' onClick={calculate}>Calculate BMI</button>
                <button className='btn btn2' onClick={clear}>clear</button>
            </div>
            {bmi && 
            <div className='result'>
            <h3>your BMI is <b>{bmi}</b></h3>
            <h4>{status}</h4>
            </div> }
        </div>
    </div>
  )
}
