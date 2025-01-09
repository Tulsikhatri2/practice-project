"use client"
// app/page.js
import { Suspense, useState } from 'react';
// import Card from './components/Card';
// import styles from './page.module.css';
import Card from './hover/page';
import axios from 'axios';
import { createPortal } from 'react-dom';
import Modal from "./components/PortalWrapper"

// const fetchCentres = async () => {
//   const res = await axios.get('https://isro.vercel.app/api/centres');
//   // const data = await res.json();
//   return res.data.centres;
// };

// const CentresList = async () => {
//   const centres = await fetchCentres();
//   return (
//     <div className="cardContainer">
//       {centres.map((centre:any) => (
//         <Card
//           key={centre.id}
//           title={centre.name}
//           content={centre.location}
//         />
//       ))}
//     </div>
//   );
// };



export default function Home() {
  const [coords, setCoords] = useState({}); 
  const [isOn, setOn] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        
    </div>
      
      {/* <h1>ISRO Centres</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CentresList />
      </Suspense> */}
    </div>
  );
}
