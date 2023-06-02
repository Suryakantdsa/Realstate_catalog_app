import { createSlice } from '@reduxjs/toolkit';

const PropertySlice = createSlice({
  name: 'property',
  initialState: [
    {
      basicInfo: {},
    },
    {
      propertyInfo: {},
    },
    {
      genInfo: {},
    },
    {
      locationInfo: {},
    },
  ],
  reducers: {
    addData(state, action) {
      const { key, value } = action.payload;
      state.forEach((item) => {
        if (key in item) {
          item[key] = value;
        }
      });
    },
    sendData:(state,action)=>{
        console.log(state)
        const data = state.reduce((acc, item) => {
            const key = Object.keys(item)[0];
            const value = item[key];
            return { ...acc, ...value };
          }, {});
        
        console.log(data)
        fetch('https://realestate-suryakant.onrender.com/api/property', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((responseData) => {
              // Handle the response data as needed
              console.log('Data sent successfully:', responseData);
            })
            .catch((error) => {
              // Handle the error appropriately
              console.error('Error sending data:', error);
            });
    }
  },
});

export { PropertySlice };
export const { addData ,sendData} = PropertySlice.actions;
