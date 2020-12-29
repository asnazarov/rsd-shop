import { getAllData, getCurrentProduct } from '../../api';
import { ThunkAction } from 'redux-thunk';
import { rootState } from './index'



const GET_PRODUCT = "GET_PRODUCT";
const GET_СURRENT_PRODUCT = "GET_СURRENT_PRODUCT";
const REMOVE_CURRENT_PRODUCT = "REMOVE_CURRENT_PRODUCT"
const SET_PAGE = "SET_PAGE"
const SET_VISIBLE = "SET_VISIBLE"
const SET_INVISIBLE = "SET_INVISIBLE"
const SET_CATEGORY = "SET_CATEGORY"
const SET_SEARCH_DATA = "SET_SEARCH_DATA"
const REMOVE_SEARCH_DATA = "REMOVE_SEARCH_DATA"
export interface data {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

type initialStateType = typeof initialState;

type setDataType = {
  type: typeof GET_PRODUCT
  data: Array<data>
}

type setCurrentDataType = {
  type: typeof GET_СURRENT_PRODUCT
  product: data
}
type setCurrentPageType = {
  type: typeof SET_PAGE
  payload: number
}
type removeCurrentProduct = {
  type: typeof REMOVE_CURRENT_PRODUCT
}
type setVisibleType = {
  type: typeof SET_VISIBLE

}
type setInvisibleType = {
  type: typeof SET_INVISIBLE

}
type setCategoryType = {
  type: typeof SET_CATEGORY
  category: string | null
}
type setSearchDataType = {
  type: typeof SET_SEARCH_DATA
  data: Array<data>
}
type removeSearchDataType = {
  type: typeof REMOVE_SEARCH_DATA

}


type actionType = setCurrentDataType | setDataType | removeCurrentProduct | setCurrentPageType | setVisibleType | setInvisibleType | setCategoryType | setSearchDataType | removeSearchDataType

type thunkType = ThunkAction<Promise<void>, rootState, unknown, actionType>;


const initialState = {
  data: [] as Array<data>,
  current: {} as data | null,
  page: 1,
  visibleButton: false,
  category: null as string | null,
  resultData: [] as Array<data>
}
/* action */
export const setData = (data: Array<data>): setDataType => ({ type: GET_PRODUCT, data })
const setCurrentData = (product: data): setCurrentDataType => ({ type: GET_СURRENT_PRODUCT, product })
export const removeCurrentData = (): removeCurrentProduct => ({ type: REMOVE_CURRENT_PRODUCT })
export const setCurrentPage = (page: number): setCurrentPageType => ({ type: SET_PAGE, payload: page })
export const setVisible = (): setVisibleType => ({ type: SET_VISIBLE });
export const setInvisible = (): setInvisibleType => ({ type: SET_INVISIBLE });
export const setCategory = (category: string | null): setCategoryType => ({ type: SET_CATEGORY, category })
export const setSearchData = (data: Array<data>): setSearchDataType => ({ type: SET_SEARCH_DATA, data })
export const removeSearchData = (): removeSearchDataType => ({ type: REMOVE_SEARCH_DATA })

/* thunk */
export const getAllProductData = (category: string | null): thunkType => async dispatch => {
  const res = await getAllData(category);
  dispatch(setData(res));
}
export const getCurrentProductData = (id: number): thunkType => async dispatch => {
  const res = await getCurrentProduct(id)
  dispatch(setCurrentData(res));
}

export const getSearchData = (): thunkType => async dispatch => {


  const res = await getAllData(null);

  dispatch(setSearchData(res))
}

const catalog = (state = initialState, action: actionType): initialStateType => {

  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        data: action.data
      }

    case GET_СURRENT_PRODUCT:
      return {
        ...state,
        current: action.product
      }
    case REMOVE_CURRENT_PRODUCT:
      return {
        ...state,
        current: null
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case SET_VISIBLE:
      return {
        ...state,
        visibleButton: true
      }
    case SET_INVISIBLE:
      return {
        ...state,
        visibleButton: false
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      }

    case SET_SEARCH_DATA:
      return {
        ...state,
        resultData: action.data
      }
    case REMOVE_SEARCH_DATA:
      return {
        ...state,
        resultData: []
      }

    default:
      return state
  }
}

export default catalog;