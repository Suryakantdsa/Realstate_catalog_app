import React, { useState } from "react";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import "./BasicInfo.css"
import { addData } from "../Store/Slice/PropertySlice";
const BasicInfo = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormdata]=useState({})

    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
      },[blueColorUrl]);

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormdata((prevFormData)=>({...prevFormData,[name]:value}))
    }
   const handleClick=(e)=>{
    e.preventDefault()
    console.log(formData)
    dispatch(addData({key:"basicInfo",value:formData}))
    navigate("/details")
   }
    return (

        <>
            <form className="formContainer" >

                <section className="column">
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PropertyType">Property Type</label>
                        <select className="WideInput" type="text" id="PropertyType" name="PropertyType"
                            placeholder="Select Property Type" onChange={handleChange} >
                            <option value="option1" className="WideInput" >Select Property Type</option>
                            <option value="Plot">Plot</option>
                            <option value="flat">Flat</option>
                            <option value="House">House</option>
                            <option value="Other">Other</option>
                      
                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Price">Price</label>
                        <input className="WideInput" type="text" id="Price" name="Price" value={formData.Price || ""} onChange={handleChange}
                            placeholder="Example: 10000" /></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyAge">Property Age</label>
                        <input className="WideInput" type="text" id="PropertyAge" name="PropertyAge" value={formData.PropertyAge || ""} onChange={handleChange}
                            placeholder="Select Property Age" /></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyDescription">Property Description</label>
                        <input className="WideInput" type="text" id="PropertyDescription" name="PropertyDescription" value={formData.PropertyDescription ||""} onChange={handleChange} />
                    </section>
                </section>
                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Negotable">Negotable</label>
                        <select className="WideInput" type="text" id="Negotable" name="Negotable"
                            placeholder="Select Negotable" >
                            <option value="option1" className="SelectNegotable" >Select Negotable</option>
                            <option value="option2">yes </option>
                            <option value="option3">no </option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Ownership">Ownership</label>
                        <select className="WideInput" type="text" id="Ownership" name="Ownership" onChange={handleChange}
                            placeholder="Ownership" >
                            <option value="Ownership" className="Ownership" >Ownership</option>
                            <option value="partnership">partnership</option>
                            <option value="sole proprietorship">sole proprietorship</option>
                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyApproved">Property Approved</label>
                        <select className="WideInput" type="text" id="PropertyApproved" name="PropertyApproved"
                            placeholder="PropertyApproved" >
                            <option value="option1" className="PropertyApproved" >Property Approved</option>
                            <option value="option2">Done</option>
                            <option value="option3">not Done</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="BankLoan">Bank Loan</label>
                        <select className="WideInput" type="text" id="BankLoan" name="BankLoan"
                            placeholder="BankLoan" >
                            <option value="option1" className="BankLoan" >Bank Loan</option>
                            <option value="option2">Available</option>
                            <option value="option3">not Available </option>
                        </select>
                    </section>
                </section>
            </form>

            <section className="buttons">
            <Link to='/properties'>  <button className="button1" >Cancel</button></Link>   
              <Link > <button className="button2" onClick={handleClick} >Save & Continue</button></Link> 
            </section>
        </>
    )
}
export default BasicInfo;