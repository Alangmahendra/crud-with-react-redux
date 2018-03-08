import { combineReducers } from "redux";

import getData from './getData'
import postData from './postData'

export default combineReducers({
  getData,
  postData
})