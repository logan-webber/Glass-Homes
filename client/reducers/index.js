import { combineReducers } from 'redux'
import auth from './auth'

import paginationReviews from './paginationReviews'
import properties from './properties'
import reviews from './reviews'
import propertyById from './propertyById'
import reviewByProperty from './reviewByProperty'
import setOffset from './setOffset'
import users from './users'
export default combineReducers({
  properties,
  auth,
  reviews,
  reviewByProperty,
  propertyById,
  paginationReviews,
  setOffset,
  users
})
