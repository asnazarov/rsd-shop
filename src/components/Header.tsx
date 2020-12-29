import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <HeaderWrapper>
      <Title>RSD Shop</Title>
      <nav>
        <List>
          <ListItem><Link href="http://" target="_blank" rel="noopener noreferrer">Компания</Link></ListItem>
          <ListItem><Link href="http://" target="_blank" rel="noopener noreferrer">Контакты</Link></ListItem>
        </List>
      </nav>
    </HeaderWrapper>
  );
};


const HeaderWrapper = styled.header`
position:fixed;
top:0;
left:0;
right:0;
display:flex;
align-items:center;
justify-content:space-between;
background-color: rgba(19, 96, 197, 0.995);
height: 40px;
padding: 10px 100px 10px 100px;
box-shadow:0px 10px 13px 0px rgba(107, 107, 107, 0.23);

`

const Title = styled.h1`
margin:0;
font-size:1.8rem;
padding-left: 5px;
color:#0e0e0e;

`

const List = styled.ul`
list-style-type:none;
padding:0;
display:flex;
width: 300px;
justify-content:space-between;
`
const ListItem = styled.li`
font-size:1.4rem;
padding:5px;

`
const Link = styled.a`
text-decoration: none;
color:#0c0c0c;
transition: .1s ease-in-out;
font-weight:600;
padding:5px;

&:hover{
   color:#c7c4c4;
}

&:focus{
  
   outline: 2px solid #a5a5a5;
}
`

export default Header
