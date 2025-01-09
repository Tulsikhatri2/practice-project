"use client"
import React, { useEffect, useState } from "react";

const page = () => {
  const [generalInfo,setGeneralInfo] = useState({
    firstName:"",
    gender:"",
    location:{
      country:"",
      states:""
    }
  })
  const [statesData,setStatesData] = useState([])
  const data = [
    {
      name: "country1",
      states: [1, 2, 3],
    },
    {
      name: "country2",
      states: [4,5,6],
    },
    {
      name: "country3",
      states: [7,8,9],
    },
    {
      name: "country4",
      states: [10,11,12],
    },
    {
      name: "country5",
      states: [13,14,15],
    },
  ];

  useEffect(() => {
    if (generalInfo.location.country) {
      const selectedCountry = data.find(
        (item) => item.name === generalInfo.location.country
      );

      if (selectedCountry) {
        setStatesData(selectedCountry.states);
      }
    } else {
      setStatesData([]);
    }
  }, [generalInfo.location.country]);

  const handleStateChange = (e) => {
    const {id,value} = e.target
    setGeneralInfo((prevInfo)=>({
      ...prevInfo,
      location: {
        ...generalInfo.location,
        [id]: value,
      },
    }));
  };

  const handleCountryChange = (e) => {
    setGeneralInfo((prevInfo)=>({
      ...prevInfo,
      location: {
        country: e.target.value,
        states:""
      },
    }));
  };

  console.log(generalInfo,"from page")

  return(
  <div>

    <select id="country" value={generalInfo.location.country} onChange={handleStateChange}>
      <option>Select Country</option>
      {data.map((item)=>{
        return(
          <option key={item.name} value={item.name}>{item.name}</option>
        )
      })}
    </select>

    <select id="states" value={generalInfo.location.states} onChange={handleStateChange}>
      <option>Select States</option>
      {statesData.map((item)=>{
        return(
          <option key={item} value={item}>{item}</option>
        )
      })}
    </select>

  </div>
  )
};

export default page;
