import React from 'react'
import '../Dcomp.css'
import FloatingParticles from './FloatingParticles'
const Dcomp = () => {
  return (
    <div>
        <div className="decorative-container">
      <div className="decorative-shape"></div>
      <div className="decorative-shape second"></div>
    </div>
    <div>
      <FloatingParticles />  {/* Add the floating particles component here */}
    
      {/* Your other components */}
    </div>
    </div>
    
  )
}

export default Dcomp