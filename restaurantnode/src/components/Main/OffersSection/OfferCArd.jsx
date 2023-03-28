import React from 'react'
import './OffersSection.css'


function OfferCard({offerTitle,offerSubTitle,offerText}) {
  return (
   <div className="offer-card">
    <h2>{offerTitle}</h2>
    <h3>{offerSubTitle}</h3>
    <p>{offerText}</p>
   </div>
  )
}

export default OfferCard