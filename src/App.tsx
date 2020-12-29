import React from 'react';
import Catalog from './pages/Catalog';
import Header from './components/Header'
import { Route } from 'react-router-dom';
import Product from './pages/Product';
import { getAllProductData, } from './redux/reducers/catalog'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from './redux/reducers';

const App = () => {
  const { category } = useSelector((state: rootState) => state.catalog);

  const dispatch = useDispatch();


  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllProductData(category))
    }
    fetchData()





  }, [category, dispatch])



  return (
    <div>
      <Header />
      <Route path={'/'} exact component={Catalog} />
      <Route path={'/product/:id'} component={Product} />
    </div>
  );
}
export default App;
