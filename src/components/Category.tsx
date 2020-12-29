import React from 'react';
import { useDispatch } from 'react-redux';


import styled, { ThemeProvider } from 'styled-components';
import { setInvisible } from '../redux/reducers/catalog';


interface CategoryType {
  activeCategory: string | null
  handleCategory: (item: string | null) => void;

}


const Category: React.FC<CategoryType> = ({ activeCategory, handleCategory }) => {

  const categoryType = ["men clothing", "women clothing", "electronics", "jewelery"];
  const [selectedCategory, setSelectedCategory] = React.useState(activeCategory)

  const dispatch = useDispatch()

  const onSelectedCategory = (item: string | null) => {

    setSelectedCategory(item)
    handleCategory(item)
    dispatch(setInvisible())
  }

  const translate = (item: string) => {
    if (item === "men clothing") return item = "Мужская"
    if (item === "women clothing") return item = "Женская"
    if (item === "electronics") return item = "Электроника"
    if (item === "jewelery") return item = "Бижутерия"
  }



  return (

    <div className="wrapper">
      <ThemeProvider theme={selectedCategory === null ? colorActive : colorDefault}>
        <Button onClick={() => { onSelectedCategory(null) }}>Все</Button>
      </ThemeProvider>
      {categoryType.map((item) =>
        <ThemeProvider key={item} theme={selectedCategory === item ? colorActive : colorDefault}>
          <Button onClick={() => onSelectedCategory(item)} key={item}>{translate(item)}</Button>
        </ThemeProvider>)}
    </div>

  )
}




const Button = styled.button`
background:${props => props.theme.active};
width:120px;
padding:3px;
height:30px;
border:none;
border-radius:15px;
margin-right: 10px;
color: #e6e6e6;


&:focus{
  outline: 2px solid #1f1f1f;
}

`


const colorActive = {
  active: "#16589e",

}
const colorDefault = {

  active: '#2e2e2e'
}

export default Category;
