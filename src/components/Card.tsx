import React from 'react'
import styled, { } from 'styled-components'
import { useHistory } from 'react-router-dom'

type card = {
  image: string,
  title: string
  price: number
  id: number
}





const Card: React.FC<card> = ({ image, title, price, id }) => {
  const { push } = useHistory()

  return (

    <Wrapper>
      <CardImage src={image} alt={`image ${title}`} />
      <Div>
        <CardTitle>{title}</CardTitle>
        <CardPrice>{price} $</CardPrice>
        <Button onClick={() => push("/product/" + id)}>Подробнее</Button>
      </Div>
    </Wrapper>

  );
};

const Wrapper = styled.div`
   border-radius:3px;
   padding: 15px;
   width:680px;
   color:white;
   height: 350px;
   display:grid;
   grid-template-columns: 1fr auto;
   gap:10px;
   background-color:#ffffff;
   transition: .2s ease-in;

   &:hover{
      -webkit-box-shadow: 4px 4px 32px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 4px 32px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 4px 32px 0px rgba(34, 60, 80, 0.2);

    

   @media screen and (max-width:1024px){
      width:600px;
   }

   @media screen and (max-width:768px){
      width:300px;
      height: 180px;
   }

   @media screen and (max-width:659px){
    width:500px;
      height: 150px;
   }
   @media screen and (max-width:549px){
    width:400px;
      height: 150px;
   }
   @media screen and (max-width:449px){
      width:350px;
      height: 200px;
   }
   @media screen and (max-width:395px){
      padding: 10px;
      width:320px;
      /* height: 140px; */
   }
   @media screen and (max-width:368px){
      width:285px;
      /* height: 120px; */
   }
 
 

`
const CardImage = styled.img`
   height:220px;
   width: 220px;
   align-self:center;


   @media screen and (max-width:768px){
      width:120px;
      height: 120px;
   }

   @media screen and (max-width:659px){
      width:150px;
      height: 150px;
   }
   @media screen and (max-width:449px){
      width:120px;
      height: 120px;
   }
   @media screen and (max-width:395px){
      width:110px;
      height: 110px;
   }
   @media screen and (max-width:368px){
      align-self:center;
      width:80px;
      height: 80px;
   }

`
const CardTitle = styled.h3`
   margin:0;
   margin-top:40px;
   font-size:1.2rem;
   color:#1d1d1d;
   text-align:end;

   @media screen and (max-width:768px){
      margin-top:15px;
      font-size: 1rem;
   }
   @media screen and (max-width:395px){
      margin-top:10px;
      font-size: 0.9rem;
   }

`
const CardPrice = styled.p`
   margin:0;
   font-size:1rem;
   color:#131313;
   
`
const Div = styled.div`
display:grid;
grid-template-rows:auto auto 1fr;
justify-items:end;
gap:10px;
`
const Button = styled.button`
font-size:1.1rem;
width: 120px;
border-radius:3px;
height:45px;
border:none;
background-color: rgba(19, 96, 197, 0.995);
color:#ebeaea;
padding:0.2rem;
text-decoration:none;
align-self:flex-end;
margin-bottom:20px;
transition: .1s ease-in-out;

&:hover{
   background-color: rgba(29, 115, 226, 0.995);
}

@media screen and (max-width:768px){
      width:100px;
      height: 30px;
      font-size:1rem;
   }
`
export default Card
