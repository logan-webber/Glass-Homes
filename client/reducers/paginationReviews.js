import { SET_SPECIFIC_REVIEWS } from '../actions/reviews'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIFIC_REVIEWS:
      return action.reviews
    default:
      return state
  }
}

export default reducer
