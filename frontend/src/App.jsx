
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import PrivateComponent from './AddPropertyPage/PrivateComponent';
import Home from './Dashboard/Home';
import PageBasic from './AddPropertyPage/PageBasic';
import PageProDetails from './AddPropertyPage/PagePropertDetails';
import PageGenInfo from './AddPropertyPage/PageGenInfo';
import Signin from './LoginRegister/Signin';
import Signup from './LoginRegister/Signup';
import PageLocationInfo from './AddPropertyPage/PageLocaInfo';
// import CountOne from './components/CountOne';

function App() {

  const [property, setProperty] = useState("")
  const [contact, setcontact] = useState("")
  const [area, setArea] = useState('')
  const handleChildData = (data) => {

    setcontact(data.contact);

  }
  const handleChildData1 = (data) => {
    setArea(data.area);

  }
  const handleChildData2 = (data) => {
    setProperty(data.property);
  }
  return (

    <>
    {/* <CountOne/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>

            <Route path='/properties' element={<Home />} />
            <Route path='/basic' element={<PageBasic onData2={handleChildData2} />} />
            <Route path='/details' element={<PageProDetails onData1={handleChildData1} />} />
            <Route path='/general' element={<PageGenInfo onData={handleChildData} />} />
            <Route path='/location' element={<PageLocationInfo property={property} area={area} contact={contact} />} />
          </Route>

          <Route path='/' element={<Signin />} />
          {/* <Route path='/count' element={<CountOne />} /> */}
          <Route path='/login' element={<Signin />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;