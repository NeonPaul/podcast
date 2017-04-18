import { add } from '../actions/feeds'

var defaultState = {
  list: []
}

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case add:
      return { list: state.list.concat(action.feed) }
    default:
      return state
  }
}
