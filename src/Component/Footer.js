import React from 'react'
import {FaGithub,FaFacebook,FaInstagram} from "react-icons/fa"
export const Footer = () => {
  return (
    <div>
        <footer className='footer'>
        <span><FaGithub style={{marginRight:10,marginTop:10}}></FaGithub>
        <FaFacebook style={{marginRight:10,marginTop:10}}>

        </FaFacebook>
        <FaInstagram style={{marginRight:10,marginTop:10}}></FaInstagram>
     <span ><p style={{display:'inline-block',marginLeft:40}}> <i>Terms</i></p></span>
     <p style={{display:'inline-block',marginLeft:40}}> <i>CA Privacy Rights</i></p>
     <p style={{display:'inline-block',marginLeft:40}}> <i>TM & Traget Brands,Inc.</i></p>
      </span>
        </footer></div>
  )
}
