import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Footer from './Footer';
export default function Jwellery() { 
  const [apidata,setdata]=useState([])
  useEffect(()=>{
   getData()
},[])
 async function getData()
{
  //console.log("Hello")
  var result =await fetch("https://fakestoreapi.com/products/category/jewelery")
  //console.log(result)
  var data = await result.json()
 // console.log(data)
  setdata(data)
}
  return (
      <div>
       <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol>
        <MDBCard>
         <center><MDBCardImage
            src={item.image} style={{width:"150px",height:"150px"}}
            alt='...'
            position='top'
          /></center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{item.price*80}Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:"orange"}}>{item.rating.rate}</MDBCardTitle>

            <MDBCardText>
              {item.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      )}
      
      
    </MDBRow>
    <Footer></Footer>
    </div>
  )}  
