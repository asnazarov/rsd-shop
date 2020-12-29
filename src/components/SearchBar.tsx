import React from 'react';
import Fuse from 'fuse.js'
import { data, setData, setInvisible } from '../redux/reducers/catalog';

import { getAllProductData, setVisible, setSearchData } from '../redux/reducers/catalog'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';


interface Provider {
  visibleButton: boolean
  data: Array<data>;
  setCurrentPage: (num: number) => void
  category: string | null
};

const SearchBar: React.FC<Provider> = ({ setCurrentPage, data, category, visibleButton }) => {

  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch()
  const option = {
    includeScore: true,
    minMatchCharLength: 2,
    isCaseSensitive: true,
    shouldSort: true,
    keys: ['title']
  }


  const [loading, setLoading] = React.useState(false)

  const handleSearchForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    const fuse = new Fuse(data, option);
    const result = fuse.search(search)
    const array = []
    for (let obj of result) {
      array.push(obj.item)
    }
    dispatch(setSearchData(array))
    setSearch('')
    // dispatch(setCurrentPage(1))
    dispatch(setVisible())
    setLoading(false)
  }



  return (
    <Form>
      <Input value={search} onChange={e => setSearch(e.target.value)} placeholder={`Поиск по всем товарам...`} type="text" />
      {search && <button onClick={handleSearchForm}>{loading ? "load" : "search"}</button>}
      {/* {visibleButton && <button onClick={handleAllProduct}>{`Все товары`}</button>} */}
    </Form>
  )
}

const Input = styled.input`
width: 250px;
height:auto;
font-size: 1.2rem;
padding-left: 5px;
`
const Form = styled.form`
display:flex;



`

export default SearchBar
