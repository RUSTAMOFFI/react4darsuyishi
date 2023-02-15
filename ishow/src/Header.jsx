import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="lines">
<div className="line"></div>
<div className="line"></div>
      </div>
      <div className="car">
       <button className='bmw'>VIEW COLLECTION</button>
       <img src="../public/bmw.png" alt="BMW M8 COMPITATION" />
      </div>
<div className="catigory">
  <div className="about">
    <p>HORSE POWER</p>
    <p>455 HP</p>
  </div>
  <div className="about">
    <p>ENGINE</p>
    <p>V6</p>
  </div>
  <div className="about">
    <p>PRICE</p>
    <p>KSH.20M</p>
  </div>

</div>
    </div>
  )
}

export default Header
