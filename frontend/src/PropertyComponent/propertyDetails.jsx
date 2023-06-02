import React, { useState } from "react";
import "./BasicInfo.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Store/Slice/PropertySlice";

const PropertyDetails = () => {
    const [formData, setFormdata] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(addData({ key: "propertyInfo", value: formData }))
        navigate("/general")
    }

    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
    }, [blueColorUrl]);
    return (

        <>
            <form className="formContainer" id="formContainerForPropertyDetails"  >

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Length">Length</label>
                        <input className="WideInput" type="number" id="Length" name="Length" onChange={handleChange} value={formData.Length || ""}
                            placeholder="Length" />
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="TotalArea">Total Area</label>
                        <input className="WideInput" type="number" id="TotalArea" name="TotalArea"
                            placeholder="Total Area" onChange={handleChange} value={formData.TotalArea || ""} />
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="NoOfBHK">No of BHK</label>
                        <select className="WideInput" type="text" id="NoOfBHK" name="NoOfBHK" onChange={handleChange}
                            placeholder="No of BHK" >
                            <option value="NoOfBHK" className="WideInput" >No of BHK</option>
                            <option value="2BHK">2BHK</option>
                            <option value="3BHK">3BHK</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Attached">Attached</label>
                        <select className="WideInput" type="text" id="Attached" name="Attached"
                            placeholder="Select Attached" >
                            <option value="Select Attached" className="WideInput" >Select Attached</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Furnished">Furnished</label>
                        <select className="WideInput" type="text" id="Furnished" name="Furnished"
                            placeholder="Furnished" >
                            <option value="Furnished" className="WideInput" >Furnished</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Lift">Lift</label>
                        <select className="WideInput" type="text" id="Lift" name="Lift"
                            placeholder="Lift" >
                            <option value="Lift" className="WideInput" >Lift</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Facing">Facing</label>
                        <select className="WideInput" type="text" id="Facing" name="Facing"
                            placeholder="Facing" >
                            <option value="NoOfBHK" className="WideInput" >Facing</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>


                </section>

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Breath">Breath</label>
                        <input className="WideInput" type="number" id="Breath" name="Breath" onChange={handleChange} value={formData.Breath || ""}
                            placeholder="Breath" /></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Area Unit ">Area Unit </label>
                        <select className="WideInput" type="text" id="Area Unit " name="Area Unit "
                            placeholder="Area Unit " >
                            <option value="Area Unit " className="SelectNegotable" >Area Unit </option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="NoOfFloor">No of Floor</label>
                        <select className="WideInput" type="text" id="NoOfFloor" name="NoOfFloor"
                            placeholder="NoOfFloor" >
                            <option value="NoOfFloor" className="NoOfFloor" >No of Floor</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="WesternToilet">Western Toilet</label>
                        <select className="WideInput" type="text" id="WesternToilet" name="WesternToilet"
                            placeholder="WesternToilet" >
                            <option value="WesternToilet" className="WesternToilet" >Western Toilet</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="CarParking">Car Parking</label>
                        <select className="WideInput" type="text" id="CarParking" name="CarParking"
                            placeholder="Car Parking" >
                            <option value="option1" className="CarParking" >Car Parking</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Electricity">Electricity</label>
                        <input className="WideInput" type="number" id="Electricity" name="Electricity"
                            placeholder="Electricity" /></section>
                </section>
            </form>

            <section className="buttons" id="buttonsForPropertyDetails">
                <Link to='/basic'>    <button className="button1">Previous</button></Link>
                <Link > <button onClick={handleClick} className="button2">Save & Continue</button></Link>

            </section>
        </>
    )
}
export default PropertyDetails;