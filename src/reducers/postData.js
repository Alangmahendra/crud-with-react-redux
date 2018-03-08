function postData(state=[],action){
  switch (action.type) {
    case 'POST_DATA':
      return action.payload
    default:
      return state
  }
}

export default postData