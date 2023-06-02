import React from "react";
import "./BasicInfo.css"
import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Store/Slice/PropertySlice";
const GeneralInfo = () => {
    const [formData, setFormdata] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleClick=(e)=>{
        console.log(formData)
        e.preventDefault()
        dispatch(addData({key:"genInfo",value:formData}))
        navigate("/location")
    }

    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
    }, [blueColorUrl]);
    return (

        <>
            <form className="formContainer" id="formContainerForGeneralInfo">

                <section className="column">
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Name">Name</label>
                        <select className="WideInput" type="text" id="Name" name="Name" onChange={handleChange}
                            placeholder="Name" >
                            <option value="Name" className="WideInput" >Name</option>
                            <option value="Dasharathi Aprt">Dasharathi Aprt.</option>
                            <option value="Panda in&out">Panda in&out</option>
                        </select>
                    </section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PostedBy">Posted by</label>
                        <select className="WideInput" type="text" id="PostedBy" name="PostedBy" onChange={handleChange}
                            placeholder="Posted By" >
                            <option value="PostedBy" className="WideInput" >Posted By</option>
                            <option value="owner">owner</option>
                            <option value="manger">manger</option>
                        </select>
                    </section>


                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="FeaturedPackage">FeaturedPackage</label>
                        <select className="WideInput" type="text" id="FeaturedPackage" name="FeaturedPackage" onChange={handleChange}
                            placeholder="Featured Package" >
                            <option value="FeaturedPackage" className="WideInput" >Featured Package</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </section>
                </section>
                <section className="column">

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Mobile">Mobile</label>
                        <input className="WideInput" type="number" id="Mobile" name="Mobile"
                            placeholder="Enter Mobile no." onChange={handleChange} value={formData.Mobile || ""} />
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="SaleType">SaleType</label>
                        <select className="WideInput" type="text" id="SaleType" name="SaleType" onChange={handleChange}
                            placeholder="Sale Type" >
                            <option value="SaleType" className="SaleType" >Sale Type</option>
                            <option value="full">full</option>
                            <option value="installment">installment</option>
                        </select>
                    </section>

                    <section className="inputSection"><label className="WideLabel" htmlFor="PpdPackage">PPD Package</label>
                        <select className="WideInput" type="text" id="PpdPackage" name="PpdPackage" onChange={handleChange}
                            placeholder="Ppd Package" >
                            <option value="PpdPackage" className="PpdPackage" >PpdPackage</option>
                            <option value="done">done</option>
                            <option value="Not done">not done</option>
                        </select>
                    </section>
                </section>
            </form>
            <section className="image"> <span className="vector"></span> <input type="file" /></section>
            <section className="buttons" id="buttonsForGeneralInfo">
                <Link to='/details'>    <button className="button1" >Previous</button></Link>
                <Link > <button className="button2" onClick={handleClick} >Save & Continue</button></Link>
                {/* <button className="button1">Previous</button>
                <button className="button2">Save & Continue</button> */}
            </section>
        </>
    )
}
export default GeneralInfo;