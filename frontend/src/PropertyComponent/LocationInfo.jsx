import React, { useState } from "react";
import "./BasicInfo.css"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import AddedSucess from "./AddedSucess";
import { useDispatch, useSelector } from "react-redux";
import { addData,sendData } from "../Store/Slice/PropertySlice";

const LocationInfo = () => {
    // const [isAlert,makeAlert]=useState(false)
    const navigate=useNavigate()
    let blueColorUrl = window.location.href
    useEffect(() => {

    }, [blueColorUrl]);

    
    const [formData, setFormdata] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata((prevData) => ({ ...prevData, [name]: value }))
    }
    const uploadPost = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(addData({ key: "locationInfo", value: formData }))
        dispatch(sendData({ data: formData }));

    }

    return (

        <>
            <form className="formContainer" id="formContainerForLocationInfo">

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Price">Price</label>
                        <input className="WideInput" type="text" id="Price" name="Price"
                            placeholder="Example: 10000" /></section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PropertyType">Property Type</label>
                        <select className="WideInput" type="text" id="PropertyType" name="PropertyType"
                            placeholder="Select Property Type" >
                            <option value="option1" className="WideInput" >Select Property Type</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyAge">Property Age</label>
                        <input className="WideInput" type="text" id="PropertyAge" name="PropertyAge" onChange={handleChange} value={formData.PropertyAge || ""}
                            placeholder="Select Property Age" /></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyDescription">Property Description</label>
                        <input className="WideInput" type="text" id="PropertyDescription" name="PropertyDescription" />
                    </section>
                </section>

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Negotable">Negotable</label>
                        <select className="WideInput" type="text" id="Negotable" name="Negotable"
                            placeholder="Select Negotable" >
                            <option value="option1" className="SelectNegotable" >Select Negotable</option>
                            <option value="option2">yes</option>
                            <option value="option3">no </option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Ownership">Ownership</label>
                        <select className="WideInput" type="text" id="Ownership" name="Ownership"
                            placeholder="Ownership" >
                            <option value="option1" className="Ownership" >Ownership</option>
                            <option value="option2">sole 2</option>
                            <option value="option3">patener</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyDescription">Property Description</label>
                        <input className="WideInput" type="text" id="PropertyDescription" name="PropertyDescription" />
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyDescription">Property Description</label>
                        <input className="WideInput" type="text" id="PropertyDescription" name="PropertyDescription" />
                    </section>


                </section>
            </form>

            <section className="buttons" id="buttonsForLocationInfo">
                <Link to='/general'
                    style={{ textDecoration: "none" }}
                >    <button className="button1">Previous</button></Link>
                <Link
                    style={{ textDecoration: "none" }}
                > <button onClick={uploadPost} className="button2">Add Property</button></Link>


            </section>
            {/* {isAlert?<AddedSucess/>:null} */}
        </>
    )
}
export default LocationInfo;