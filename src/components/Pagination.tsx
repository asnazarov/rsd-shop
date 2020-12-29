import React from 'react'
import styled from 'styled-components'

type pagination = {

  handleClickPage: (num: number) => void
  numberPage: number
}

const Pagination: React.FC<pagination> = ({ handleClickPage, numberPage }) => {
  const pages = []

  for (let num = 1; num <= numberPage; num = num + 1) {
    pages.push(num)
  }



  return (
    <Wrapper>
      {pages.map(item => <Button onClick={() => handleClickPage(item)} key={item}>{item}</Button>)}
    </Wrapper>
  )
}

const Button = styled.button`
border:none;
background-color:#575757;
color:white;
padding:6px;

`

const Wrapper = styled.div`
margin: 0 auto;
display:flex;
justify-content:space-between;
width:120px;
padding-top:20px;
padding-bottom:20px;
`
export default Pagination;
