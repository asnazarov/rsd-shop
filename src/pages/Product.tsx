import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps, withRouter, useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { rootState } from '../redux/reducers';
import { getCurrentProductData } from '../redux/reducers/catalog';


interface product extends RouteComponentProps<pathType> {
  title: string
  image: string
  price: number
  description: string

}
type pathType = {
  id: string
}

const Img = styled.img`
height: 200px;
`
const Button = styled.button`
width: 100px;
background-color:#512ca7;
font-size: 18px;
color:white;  
padding: 5px;   
border:none; 
border-radius:2px;
`
const ProductWrapper = styled.section`
padding:10px;



`


const Product: React.FC<product> = (props) => {

  const state = useSelector((state: rootState) => state.catalog.current)

  const { push } = useHistory()
  const dispatch = useDispatch()

  React.useEffect(() => {

    const fetch = async () => {
      let id = +props.match.params.id
      await dispatch(getCurrentProductData(id))
    }
    fetch()

  }, [])

  // const remove = () => {
  //    dispatch(removeCurrentData())
  // }


  return (
    <ProductWrapper>
      <h2>Товар</h2>
      {state
        ? <div>
          <Img src={state.image} alt={state.title} />
          <p>{state.title}</p>
          <p>{state.price}</p>
          <p>{state.description}</p>
        </div>
        : <h3>Загрузка</h3>}
      <Button onClick={() => push("/")}>Назад</Button>

    </ProductWrapper>
  )
}

export default withRouter(Product)