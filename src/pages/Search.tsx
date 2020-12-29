import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import { data, removeSearchData } from '../redux/reducers/catalog'
import { Wrapper } from '../styled/style';
import { useDispatch } from 'react-redux'
interface search {
  resultData: Array<data>

}


const Search: React.FC<search> = ({ resultData }) => {
  const dispatch = useDispatch();


  const removeData = () => {
    dispatch(removeSearchData())

  }

  return (
    <Wrapper>

      <Title>Результат</Title>
      <button onClick={removeData}>Вернуться назад</button>
      {resultData.map(card => <Card key={card.title} {...card} />)}
    </Wrapper>
  )
}


const Title = styled.h2`
padding-top:60px;

`
export default Search
