import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"

export default function Item()
 {
    const location = useLocation();
    const data = location.state
    const [apidata,setdata] = useState({})
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
        result.json().then((data)=>{
          setdata(data)
        })
      
     })
  },[])
  return (
    <div>
      <br></br>
      <center>
      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{apidata.title}</MDBCardTitle>
        <MDBCardTitle>{apidata.price*80} Rs</MDBCardTitle>
        <MDBCardTitle>{apidata.category}</MDBCardTitle>
        <MDBCardTitle>{apidata.rating && apidata.rating.rate}</MDBCardTitle>
        <MDBCardTitle>{apidata.rating && apidata.rating.count}</MDBCardTitle>

        <MDBCardText>
        {apidata.description}
        </MDBCardText>
        <MDBBtn href='#'>Buy now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </center>
      
    </div>
  )
}
