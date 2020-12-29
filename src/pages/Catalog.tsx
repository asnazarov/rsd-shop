import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import { rootState } from '../redux/reducers'
import { setCurrentPage } from '../redux/reducers/catalog'
import { setCategory } from '../redux/reducers/catalog';
import SearchBar from '../components/SearchBar'
import Category from '../components/Category'
import Search from './Search'



const Catalog = React.memo(() => {

  const dispatch = useDispatch()
  const { data, page, visibleButton, category, resultData } = useSelector((state: rootState) => state.catalog)

  /* Пагинация */
  const totalPages = data.length; // Всего элементов
  const cardPerPage = 5; // Количество элементов на страницу
  const startIndex = (page - 1) * cardPerPage; // Стартовый индекс
  const numberPage = Math.ceil(totalPages / cardPerPage); // Получаем число страниц, округляем для остаточных элементов

  const selected = data.slice(startIndex, startIndex + cardPerPage);

  /* Выбор страницы страницы */
  const handleClickPage = (num: number) => dispatch(setCurrentPage(num))
  /* Выбор категории */
  const handleCategory = (item: string | null) => dispatch(setCategory(item))

  return (
    <CatalogWpapper >
      {resultData.length === 0

        ? <>
          <Title>Каталог товаров</Title>
          <Container>
            <Category activeCategory={category} handleCategory={handleCategory} />
            {category === null && < SearchBar data={data} category={category} visibleButton={visibleButton} setCurrentPage={setCurrentPage} />}
          </Container>
          <Wrapper>
            {selected.map(item => <Card key={item.id} {...item} />)}
          </Wrapper>
          {numberPage > 1 ? <Pagination handleClickPage={handleClickPage} numberPage={numberPage} /> : null}
        </>
        : <Search resultData={resultData} />
      }
    </CatalogWpapper>)
});

const Wrapper = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
gap:20px;
padding-top:15px;
justify-items:center;

@media screen and (max-width:768px){
   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
`
const CatalogWpapper = styled.section`
max-width:1440px;
margin: 0 auto;
`
const Container = styled.div`
display: flex;
justify-content:space-between;
align-items:baseline;
padding:5px;   
`
const Title = styled.h2`
margin:0;
padding-top: 4rem;
padding-bottom: 2rem;
text-align:center;
font-size:2.5rem;
`

export default Catalog;
