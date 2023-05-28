import React, { useState } from "react";
import "./BasicInfo.css"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import AddedSucess from "./AddedSucess";

const LocationInfo = (props) => {
    // const [isAlert,makeAlert]=useState(false)
    const navigate=useNavigate()
    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
    }, [blueColorUrl]);
    let Views = Math.floor(Math.random() * 100);
    let Daysleft = "6"
    let sold = "Unsold"
    const uploadPost = (e) => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append("property", props.property);
        formData.append("contact", props.contact);
        formData.append("area", props.area);
        formData.append("views", Views);
        formData.append("daysleft", Daysleft)
        formData.append("status", sold)

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        console.log(props.property);
        fetch("https://realestate-suryakant.onrender.com/api/property",
            {
                method: 'POST',
                body: formData

            }).then(res => res.json())
            .then(data => {
                console.log("success", data);
            
                // makeAlert(true)
            }).catch(err => {
                console.log("error", err);
            }).finally(()=>{
                // makeAlert(false)
                alert("all peroperty details added sucessfully")
                navigate("/properties")
            });


    }
    // console.log(props);

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
                        <input className="WideInput" type="text" id="PropertyAge" name="PropertyAge"
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
                <Link to='/properties'
                    style={{ textDecoration: "none" }}
                > <button onClick={uploadPost} className="button2">Add Property</button></Link>


            </section>
            {/* {isAlert?<AddedSucess/>:null} */}
        </>
    )
}
export default LocationInfo;