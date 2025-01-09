"use client"

import React, { useState } from 'react'
import ParentModal from "../components/ParentModal"

const page = () => {
  const [isParent, setIsParent] = useState(false);
  const handleClickOpen = () => {
    setIsParent(true);
  };
  const handleClose = () => {
    setIsParent(false);
  };
  return (
    <>
    <button onClick={handleClickOpen}>offers</button>
    {isParent && (
       <ParentModal handleClose={handleClose} isParent={isParent} setIsParent={setIsParent} /> 
    )}
    </>
  )
}

export default page