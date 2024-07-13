import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import ProjectPlans from './ProjectPlans'
import Amenities from './Amenities'
import Location from './Location'

const PropertyDetails = () => {
  const [showBrochure, setShowBrochure] = useState(false)

  return (
    <section className="property-details">
      <h2>Gotety Residency</h2>
      <p>Valasaravakkam, Chennai(All)</p>
      <p>Price On Request</p>
      <button className="btn-primary">CONTACT US</button>
      <button
        className="btn-secondary"
        onClick={() => setShowBrochure(!showBrochure)}
      >
        DOWNLOAD BROCHURE
      </button>
      {showBrochure && (
        <div className="brochure-modal">Brochure download modal</div>
      )}

      <img
        src="/path-to-property-image.jpg"
        alt="Gotety Residency"
        className="property-image"
      />

      <ProjectDetails />
      <ProjectPlans />
      <Amenities />
      <Location />
    </section>
  )
}

export default PropertyDetails
