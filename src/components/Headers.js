import React from 'react'

const Headers = ({imageUrl}) => {
  return (
    <div style={{ backgroundColor: "#ff7722", height: 150 }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginTop: "1%", marginLeft: "1.5%" }}>
        <img src={imageUrl} width={200} style={{ height: "90%" }} />
      </div>
      <div style={{ color: "white", fontWeight: "800", fontSize: 50, marginTop: "2%" }}>
        JAI BAJRANG BALI
      </div>     
      <div style={{ marginTop: "1%", marginLeft: "1.5%", marginRight: "1%" }}>
        <img src={imageUrl} width={200} style={{ height: "90%" }} />
      </div>
    </div>
  </div>
  )
}

export default Headers