import React from 'react'
import { styles } from '../styles/style'
import { Link } from 'react-router-dom'
import templeImageUrl from "../assets/templeBajrangwaliOne.jpg"
import mainImage from "../assets/templeBajrangbaliImage.jpg"
import danPatra from "../assets/danPatra.jpg"
const Home = () => {
  return (
    <div style={{ width: "100%", height: 2000 }}>
      {/* <Link to="/location" style={{textDecoration:"none",fontWeight:'bold'}} >LOCATION</Link>
    <Link to="/aarti" style={{textDecoration:"none",fontWeight:'bold'}} >AARTI</Link> */}
      <div style={{ width: "100%", backgroundColor: "#c1763e", height: 500, display: "flex", marginTop: "1%" }}>
         <img src={templeImageUrl}  style={{width:"40%",height:"95%"}}/>
        <div>
        <p style={{color:'white',marginLeft:10,width:"70%",marginLeft:"10%",marginTop:"10%",marginbottom:"10%"}}>
          Lord Hanuman is one of the bravest and most powerful characters in Ramayana.
           Stories of his courageous feats abound in the Hindu mythology.
           This can be gauged from the time when he lifted the whole Dronagiri Mountain to bring sanjivani booty for Laxman, or when he flew over the ocean all the way to Lanka to convey Rama’s message to Sita
        </p>
        <h3 style={{marginLeft:"10%",marginTop:"4%",color:"white"}}>HINDUISM</h3>
        </div>
      </div>
      <div style={{width:"100%",height:"80%",backgroundColor:"whitesmoke",display:"flex",flexDirection:"column"}}>
        <div><img alt="image-1" src={mainImage} style={{width:"35%",marginTop:"2%",marginLeft:"1%"}}/></div>
        <div><img alt="image-2" src={danPatra}  style={{width:"35%",marginTop:"2%",marginLeft:"1%"}}/></div>
      </div>
    </div>
  )
}

export default Home